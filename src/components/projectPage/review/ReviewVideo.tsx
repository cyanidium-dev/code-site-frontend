"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";
import type { Review } from "@/types/review";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as any;

// Функція для отримання Vimeo video ID
function getVimeoVideoId(url: string): string | null {
  const match = url.match(/vimeo.com\/(?:.*\/)?(\d+)/);
  return match ? match[1] : null;
}

// Функція для отримання високоякісного thumbnail від Vimeo
function getHighQualityThumbnail(
  thumbnailUrl: string,
  width: number = 1280,
  height: number = 720
): string {
  // Замінюємо розміри в URL на більші
  // Паттерн: d_{width}x{height}
  return thumbnailUrl.replace(/d_\d+x\d+/, `d_${width}x${height}`);
}

interface ReviewVideoProps {
  id: string;
  authorName: string;
  videoUrl: string;
  className?: string;
}

export default function ReviewVideo({
  id,
  authorName,
  videoUrl,
  className,
}: ReviewVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Отримуємо Vimeo thumbnail через oEmbed API
  useEffect(() => {
    if (videoUrl) {
      const vimeoId = getVimeoVideoId(videoUrl);
      if (vimeoId) {
        fetch(
          `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}`
        )
          .then(res => res.json())
          .then(data => {
            if (data.thumbnail_url) {
              // Отримуємо високоякісний thumbnail (360x720 для кращої якості)
              const highQualityThumbnail = getHighQualityThumbnail(
                data.thumbnail_url,
                360,
                720
              );
              setVimeoThumbnail(highQualityThumbnail);
            }
          })
          .catch(() => {
            // Якщо помилка, залишаємо null
          });
      }
      // Reset video duration when video URL changes
      setVideoDuration(null);
    }
  }, [videoUrl]);

  useEffect(() => {
    if (!videoUrl || !isPlaying) return;

    const postMessageToVimeo = (data: any) => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(JSON.stringify(data), "*");
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("vimeo.com")) return;

      const data =
        typeof event.data === "string" ? JSON.parse(event.data) : event.data;

      if (data.event === "ready") {
        postMessageToVimeo({ method: "getDuration" });
        postMessageToVimeo({ method: "addEventListener", value: "timeupdate" });
      } else if (data.event === "timeupdate") {
        const currentTime = data.data.seconds;

        // Pause 0.3 seconds before end
        if (videoDuration && currentTime >= videoDuration - 0.3 && isPlaying) {
          postMessageToVimeo({ method: "pause" });
          setIsPlaying(false);
        }
      } else if (data.method === "getDuration") {
        setVideoDuration(data.value);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [videoUrl, isPlaying, videoDuration]);

  return (
    <motion.div
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={`relative w-full h-auto aspect-[312/468] md:w-[333px] md:h-[468px] ${className}`}
    >
      <div
        className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
        style={{
          background:
            "linear-gradient(171.05deg, #B14285 6.81%, #FFFFFF 158.64%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        className="absolute inset-0 rounded-[8px] flex items-center justify-center overflow-hidden"
        aria-label={`Відео-відгук від ${authorName}`}
        data-review-video-id={id}
      >
        {isPlaying && (
          <div className="absolute inset-0 w-full h-full">
            <ReactPlayer
              ref={playerRef}
              key={`player-${id}-${videoUrl}`}
              src={videoUrl}
              playing={isPlaying}
              controls={false}
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              onReady={(player: any) => {
                if (player) {
                  // Get iframe reference for postMessage communication
                  setTimeout(() => {
                    const container = document.querySelector(
                      `[data-review-video-id="${id}"]`
                    );
                    if (container) {
                      const iframe = container.querySelector(
                        'iframe[src*="vimeo.com"]'
                      ) as HTMLIFrameElement;
                      if (iframe) {
                        iframeRef.current = iframe;
                      }
                    }
                  }, 500);
                }
              }}
            />
          </div>
        )}
        {!isPlaying && (
          <>
            {vimeoThumbnail && (
              <Image
                src={vimeoThumbnail}
                alt={`Прев'ю відео від ${authorName}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 312px, 333px"
                loading="lazy"
              />
            )}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center xl:opacity-0 xl:hover:opacity-100 xl:hover:brightness-125 transition duration-300 ease-in-out cursor-pointer z-10"
            >
              <PlayIcon />
            </button>
          </>
        )}
        {isPlaying && (
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute inset-0 flex items-center justify-center opacity-30 xl:opacity-0 xl:hover:opacity-100 xl:hover:brightness-125 duration-300 ease-in-out transition cursor-pointer"
          >
            <PauseIcon />
          </button>
        )}
      </div>
    </motion.div>
  );
}
