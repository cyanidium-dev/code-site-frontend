"use client";
import * as motion from "motion/react-client";
import { Project } from "@/types/project";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface SlidePreviewCardsProps {
  projects: Project[];
  rest: number[];
  containerOffset: number;
  cardWidth: number;
  cardHeight: number;
  gap: number;
  isMovingBackward: boolean;
  onSlideClick: (index: number) => void;
  className?: string;
}

export default function SlidePreviewCards({
  projects,
  rest,
  containerOffset,
  cardWidth,
  cardHeight,
  gap,
  isMovingBackward,
  onSlideClick,
  className,
}: SlidePreviewCardsProps) {
  return (
    <div className={twMerge("", className)}>
      {rest.map((cardIndex, index) => {
        const cardData = projects[cardIndex];
        const x = containerOffset + index * (cardWidth + gap);

        return (
          <motion.button
            key={`side-card-${cardIndex}`}
            onClick={() => onSlideClick(cardIndex)}
            className="absolute bottom-0 md:bottom-16 lg:bottom-0 rounded-[8px] z-[30] cursor-pointer xl:hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
            style={{
              background: `linear-gradient(140deg, ${cardData.gradientStartColor || "#CFFD59"} 0%, ${
                cardData.gradientEndColor || "#121212"
              } 100%)`,
            }}
            initial={{
              x: isMovingBackward
                ? x - (cardWidth + gap)
                : x + (cardWidth + gap),
              y: 0,
              width: cardWidth,
              height: cardHeight,
              scale: 1,
              borderRadius: 8,
            }}
            animate={{
              x,
              y: 0,
              width: cardWidth,
              height: cardHeight,
              scale: 1,
              borderRadius: 8,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1] as const,
              delay: 0.02 * index + 0.4,
            }}
          >
            <Image
                src={cardData.mainImage.asset.url}
                alt="preview image"
                width={1071}
                height={872}
                sizes="338px"
                className="w-[338px] h-full object-cover"
              />
          
          </motion.button>
        );
      })}
    </div>
  );
}
