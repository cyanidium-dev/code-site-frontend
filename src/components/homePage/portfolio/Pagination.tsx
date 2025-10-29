"use client";
import * as motion from "motion/react-client";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import ProgressBar from "./ProgressBar";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  projectsCount: number;
  activeIndex: number;
  width: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideClick: (index: number) => void;
  className?: string;
}

export default function Pagination({
  projectsCount,
  activeIndex,
  width,
  onPrevious,
  onNext,
  onSlideClick,
  className,
}: PaginationProps) {
  return (
    <motion.div
      className={twMerge(
        "absolute left-6 sm:left-[calc((100%-640px+48px)/2)] md:left-[calc((100%-768px+48px)/2)] lg:left-[calc((100%-1024px+160px)/2)] xl:left-[calc((100%-1280px+240px)/2)] bottom-[72px] lg:bottom-0 z-[30] flex items-center",
        className
      )}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.6,
      }}
    >
      {/* Left arrow */}
      <button
        onClick={onPrevious}
        type="button"
        aria-label="icon button"
        className="group cursor-pointer flex items-center justify-center size-[50px] p-[15px] rounded-full border-[1.5px] border-white active:scale-[95%] transition duration-300 ease-out will-change-transform"
      >
        <ArrowIcon className="rotate-[-135deg] text-white group-active:scale-[95%] group-[focus-visible]:-translate-x-0.5 xl:group-hover:-translate-x-0.5 transition duration-300 ease-out will-change-transform" />
      </button>

      {/* Right arrow */}
      <button
        onClick={onNext}
        type="button"
        aria-label="icon button"
        className="group cursor-pointer flex items-center justify-center ml-3 size-[50px] p-[15px] rounded-full border-[1.5px] border-white active:scale-[95%] transition duration-300 ease-out will-change-transform"
      >
        <ArrowIcon className="rotate-[45deg] text-white group-active:scale-[95%] group-[focus-visible]:translate-x-0.5 xl:group-hover:translate-x-0.5 transition duration-300 ease-out will-change-transform" />
      </button>

      {/* Progress bar */}
      <ProgressBar
        projectsCount={projectsCount}
        activeIndex={activeIndex}
        width={width}
        onSlideClick={onSlideClick}
      />
    </motion.div>
  );
}
