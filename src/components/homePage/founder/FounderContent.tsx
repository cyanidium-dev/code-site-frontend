"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useLocale } from "next-intl";
import { fadeInAnimation } from "@/utils/animationVariants";
import BenefitsList from "./BenefitsList";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";
import { FOUNDER_VIDEO_URLS } from "@/constants/constants";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as any;

// Функція для отримання Vimeo video ID
function getVimeoVideoId(url: string): string | null {
  const match = url.match(/vimeo.com\/(?:.*\/)?(\d+)/);
  return match ? match[1] : null;
}

interface FounderContentProps {
  actualSolutionsText: string;
}

export default function FounderContent({
  actualSolutionsText,
}: FounderContentProps) {
  const locale = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null);

  // Get video URL for current locale
  const videoUrl = FOUNDER_VIDEO_URLS[locale] || "";

  // Отримуємо Vimeo thumbnail через oEmbed API
  useEffect(() => {
    // Reset playing state when locale/video changes
    setIsPlaying(false);
    
    if (videoUrl) {
      const vimeoId = getVimeoVideoId(videoUrl);
      if (vimeoId) {
        fetch(
          `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.thumbnail_url) {
              setVimeoThumbnail(data.thumbnail_url);
            }
          })
          .catch(() => {
            // Якщо помилка, залишаємо null
          });
      }
    } else {
      // Reset thumbnail if no video URL
      setVimeoThumbnail(null);
    }
  }, [videoUrl]);

  return (
    <>
      {/* Основний контент - рухається зі звичайною швидкістю (без параллаксу) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ x: -20 })}
        className="relative rounded-[8px] overflow-hidden w-full md:w-[calc(100%-19px-334px)] h-[514px]"
      >
        {videoUrl ? (
          <div
            className="absolute inset-0 rounded-[8px]"
            aria-label="Founder video"
          >
            {isPlaying && (
              <ReactPlayer
                key={`founder-player-${videoUrl}-${locale}`}
                src={videoUrl}
                playing={isPlaying}
                controls={false}
                width="100%"
                height="100%"
              />
            )}
            {!isPlaying && (
              <>
                {vimeoThumbnail ? (
                  <Image
                    src={vimeoThumbnail}
                    alt="Founder video preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src="/images/homePage/founder/founder.webp"
                    alt="founder"
                    fill
                    className="object-cover"
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
                className="absolute inset-0 flex items-center justify-center opacity-30 xl:opacity-0 xl:hover:opacity-100 xl:hover:brightness-125 duration-300 ease-in-out transition cursor-pointer z-10"
              >
                <PauseIcon />
              </button>
            )}
          </div>
        ) : (
          <Image
            src="/images/homePage/founder/founder.webp"
            alt="founder"
            fill
            className="object-cover"
          />
        )}
      </motion.div>

      <div className="md:w-[333px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95 })}
          className="mb-8 font-actay text-[22px] font-bold leading-[108%] uppercase"
        >
          {actualSolutionsText}
        </motion.h2>
        <BenefitsList />
      </div>
    </>
  );
}
