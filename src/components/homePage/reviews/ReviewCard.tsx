"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import { Review } from "@/types/review";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";

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
  const t = useTranslations("homePage.reviews");
  const [isPlaying, setIsPlaying] = useState(false);
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null);

  const {
    authorName,
    description,
    videoUrl,
    reviewText,
    projectLink,
    contentType,
  } = review;

  // Отримуємо Vimeo thumbnail через oEmbed API
  useEffect(() => {
    if (contentType === "video" && videoUrl) {
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
    }
  }, [contentType, videoUrl]);

  return (
    <motion.div
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={`relative w-full h-full rounded-[8px] bg-black/26 backdrop-blur-[5px] overflow-hidden 
        ${
          contentType === "video"
            ? "bg-[linear-gradient(180deg,rgba(2,4,24,0.82)_13.95%,rgba(1,2,12,0)_46.99%,#020418_92.56%)]"
            : ""
        }`}
    >
      {contentType === "text" && (
        <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
      )}

      {/* Gradient border layer for odd cards */}
      {contentType === "video" && (
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
          className="absolute inset-0 rounded-[8px]"
          aria-label={`Відео-відгук від ${authorName}`}
        >
          {isPlaying && (
            <ReactPlayer
              key={`player-${uniqueKey}-${videoUrl}`}
              src={videoUrl}
              playing={isPlaying}
              controls={false}
              width="100%"
              height="100%"
            />
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
  );
}
