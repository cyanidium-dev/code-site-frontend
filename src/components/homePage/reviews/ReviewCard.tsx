"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import { Review } from "@/types/review";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";
import ExpandIcon from "@/components/shared/icons/ExpandIcon";
import Modal from "@/components/shared/modals/Modal";
import { getOptimizedImageUrl } from "@/utils/sanityImageUrl";
import { useIosDevice } from "@/contexts/IosDeviceContext";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as any;

// Функція для отримання Vimeo video ID
function getVimeoVideoId(url: string): string | null {
  const match = url.match(/vimeo.com\/(?:.*\/)?(\d+)/);
  return match ? match[1] : null;
}

interface ReviewCardProps {
  review: Review;
  uniqueKey: string;
}

export default function ReviewCard({ review, uniqueKey }: ReviewCardProps) {
  const { isIos } = useIosDevice();
  const t = useTranslations("homePage.reviews");
  const [isPlaying, setIsPlaying] = useState(false);
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const {
    authorName,
    description,
    videoUrl,
    reviewText,
    projectLink,
    contentType,
    reviewImage,
  } = review;

  // Отримуємо Vimeo thumbnail через oEmbed API
  useEffect(() => {
    if (contentType === "video" && videoUrl) {
      const vimeoId = getVimeoVideoId(videoUrl);
      if (vimeoId) {
        fetch(
          `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}`
        )
          .then(res => res.json())
          .then(data => {
            if (data.thumbnail_url) {
              setVimeoThumbnail(data.thumbnail_url);
            }
          })
          .catch(() => {
            // Якщо помилка, залишаємо null
          });
      }
      // Reset video duration when video URL changes
      setVideoDuration(null);
    }
  }, [contentType, videoUrl]);

  useEffect(() => {
    if (contentType !== "video" || !videoUrl || !isPlaying) return;

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
  }, [contentType, videoUrl, isPlaying, videoDuration]);

  return (
    <>
      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
        className={`relative w-full h-full rounded-[8px] overflow-hidden 
          ${isIos ? "bg-black/50" : "bg-black/26 backdrop-blur-[5px]"}
          ${
            contentType === "video"
              ? "bg-[linear-gradient(180deg,rgba(2,4,24,0.82)_13.95%,rgba(1,2,12,0)_46.99%,#020418_92.56%)]"
              : ""
          }`}
      >
        {(contentType === "text" || contentType === "image") && (
          <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        )}

        {/* Gradient border layer for video and image cards */}
        {(contentType === "video" || contentType === "image") && (
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
        )}

        {contentType === "video" && videoUrl && (
          <div
            className="absolute inset-0 rounded-[8px] flex items-center justify-center overflow-hidden"
            aria-label={`Відео-відгук від ${authorName}`}
            data-review-video-id={uniqueKey}
          >
            {isPlaying && (
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className="w-full h-full max-w-full max-h-full"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ReactPlayer
                    ref={playerRef}
                    key={`player-${uniqueKey}-${videoUrl}`}
                    src={videoUrl}
                    playing={isPlaying}
                    controls={false}
                    width="100%"
                    height="100%"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    onReady={(player: any) => {
                      if (player) {
                        // Get iframe reference for postMessage communication
                        setTimeout(() => {
                          const container = document.querySelector(
                            `[data-review-video-id="${uniqueKey}"]`
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
              </div>
            )}
            {!isPlaying && (
              <>
                {vimeoThumbnail && (
                  <Image
                    src={vimeoThumbnail}
                    alt={`Прев'ю відео від ${authorName}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 245px, 400px"
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
        )}

        {/* --- TEXT CONTENT --- */}
        <div className="relative z-10 flex flex-col justify-between h-full px-5 pt-9 pb-7 lg:pb-3 pointer-events-none">
          <div>
            <h3 className="mb-4 font-actay text-[20px] font-bold leading-[120%] uppercase line-clamp-2">
              {authorName}
            </h3>
            <p className="mb-4 text-[14px] font-normal leading-[120%] uppercase">
              {description}
            </p>
            {contentType === "text" && (
              <p className="mt-11 text-[14px] font-light leading-[120%]">
                {reviewText}
              </p>
            )}
            {contentType === "image" && reviewImage?.asset?._id && (
              <div
                className="mt-11 relative w-full aspect-square max-w-[200px] mx-auto cursor-pointer pointer-events-auto group"
                aria-label={`Відгук з зображенням від ${authorName}`}
                onClick={() => setIsImageModalOpen(true)}
              >
                <Image
                  src={
                    getOptimizedImageUrl(reviewImage as any, 400, 85, "auto") ||
                    reviewImage.asset.url
                  }
                  alt={reviewImage.alt || `Відгук від ${authorName}`}
                  fill
                  className="object-cover rounded-[8px] lg:opacity-90 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  sizes="(max-width: 768px) 200px, 200px"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`bg-black/50 rounded-full size-12 flex items-center justify-center ${!isIos ? "backdrop-blur-sm" : ""} lg:group-hover:translate-y-[-10px] lg:group-hover:scale-110 lg:group-hover:brightness-125 transition-all duration-300 ease-in-out`}>
                    <ExpandIcon className="text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="relative z-20 pointer-events-auto"
            >
              <SecondaryButton>{t("seeProject")}</SecondaryButton>
            </a>
          )}
        </div>
      </motion.div>
      {/* Image Modal */}
      {contentType === "image" && reviewImage?.asset?._id && (
        <Modal
          isModalShown={isImageModalOpen}
          setIsModalShown={setIsImageModalOpen}
          variant="image"
          className="bg-black/80 border border-white/20 rounded-lg"
        >
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={
                getOptimizedImageUrl(
                  reviewImage as any,
                  undefined,
                  90,
                  "auto"
                ) || reviewImage.asset.url
              }
              alt={reviewImage.alt || `Відгук від ${authorName}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </Modal>
      )}
    </>
  );
}
