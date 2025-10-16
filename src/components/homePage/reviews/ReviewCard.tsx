"use client";

import { useState } from "react";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import { Review } from "@/types/review";
import ReactPlayer from "react-player";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";

interface ReviewCardProps {
  review: Review;
  idx: number;
}

export default function ReviewCard({ review, idx }: ReviewCardProps) {
  const t = useTranslations("homePage.reviews");
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    authorName,
    description,
    videoUrl,
    reviewText,
    projectLink,
    contentType,
  } = review;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={`relative w-full h-full rounded-[8px] bg-black/26 backdrop-blur-[5px] overflow-hidden 
        ${
          idx % 2 !== 0
            ? "border border-[#B14285] bg-[linear-gradient(180deg,rgba(2,4,24,0.82)_13.95%,rgba(1,2,12,0)_46.99%,#020418_92.56%)]"
            : ""
        }`}
    >
      {idx % 2 === 0 && (
        <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
      )}

      {contentType === "video" && videoUrl && (
        <div className="absolute inset-0">
          <ReactPlayer
            src={videoUrl}
            playing={isPlaying}
            controls={false}
            width="100%"
            height="100%"
          />
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center xl:opacity-0 xl:hover:opacity-100 xl:hover:brightness-125 transition duration-300 ease-in-out cursor-pointer"
            >
              <PlayIcon />
            </button>
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
            className="relative z-10 pointer-events-auto"
          >
            <SecondaryButton>{t("seeProject")}</SecondaryButton>
          </a>
        )}
      </div>
    </motion.li>
  );
}
