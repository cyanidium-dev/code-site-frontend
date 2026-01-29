"use client";
import * as motion from "motion/react-client";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import ProgressBar from "./ProgressBar";
import { twMerge } from "tailwind-merge";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface PaginationProps {
  projectsCount: number;
  activeIndex: number;
  width: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideClick: (index: number) => void;
  className?: string;
}

const willChangeClass = "will-change-transform";

export default function Pagination({
  projectsCount,
  activeIndex,
  width,
  onPrevious,
  onNext,
  onSlideClick,
  className,
}: PaginationProps) {
  const { isIos } = useIosDevice();
  const wc = isIos ? "" : willChangeClass;
  return (
    <motion.div
      className={twMerge(
        "absolute left-6 sm:left-[calc((100%-640px+48px)/2)] md:left-[calc((100%-768px+48px)/2)] lg:left-[calc((100%-1024px+160px)/2)] xl:left-[calc((100%-1280px+240px)/2)] bottom-[84px] lg:bottom-0 z-[30] flex items-center",
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
        className={twMerge("group cursor-pointer flex items-center justify-center size-[50px] p-[15px] rounded-full border-[1.5px] border-white active:scale-[95%] transition duration-300 ease-out", wc)}
      >
        <ArrowIcon className={twMerge("rotate-[-135deg] text-white group-active:scale-[95%] group-[focus-visible]:-translate-x-0.5 xl:group-hover:-translate-x-0.5 transition duration-300 ease-out", wc)} />
      </button>

      {/* Right arrow */}
      <button
        onClick={onNext}
        type="button"
        aria-label="icon button"
        className={twMerge("group cursor-pointer flex items-center justify-center ml-3 size-[50px] p-[15px] rounded-full border-[1.5px] border-white active:scale-[95%] transition duration-300 ease-out", wc)}
      >
        <ArrowIcon className={twMerge("rotate-[45deg] text-white group-active:scale-[95%] group-[focus-visible]:translate-x-0.5 xl:group-hover:translate-x-0.5 transition duration-300 ease-out", wc)} />
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
