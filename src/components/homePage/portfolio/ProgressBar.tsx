"use client";
import * as motion from "motion/react-client";
import { twMerge } from "tailwind-merge";

interface ProgressBarProps {
  projectsCount: number;
  activeIndex: number;
  width: number;
  onSlideClick: (index: number) => void;
  className?: string;
}

export default function ProgressBar({
  projectsCount,
  activeIndex,
  width,
  onSlideClick,
  className,
}: ProgressBarProps) {
  const progressWidth = width >= 1280 ? 465 : 385;

  return (
    <div
      className={twMerge(
        "hidden lg:flex ml-5 z-[30] w-[385px] xl:w-[465px] h-[50px] items-center",
        className
      )}
    >
      <div className="w-[385px] xl:w-[465px] h-[1px] bg-white/20 relative cursor-pointer group">
        <motion.div
          className="h-[1px] bg-white"
          initial={{ width: 0 }}
          animate={{
            width: `${progressWidth * (1 / projectsCount) * (activeIndex + 1)}px`,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
          }}
        />
        {/* Clickable segments */}
        {Array.from({ length: projectsCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideClick(index)}
            className="absolute top-0 h-[50px] cursor-pointer hover:bg-white/5 transition-colors duration-300 ease-in-out"
            style={{
              left: `${index * (progressWidth / projectsCount)}px`,
              width: progressWidth / projectsCount,
            }}
          />
        ))}
      </div>
    </div>
  );
}
