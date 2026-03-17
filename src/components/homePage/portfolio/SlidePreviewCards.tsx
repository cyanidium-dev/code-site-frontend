"use client";
import * as motion from "motion/react-client";
import { Project } from "@/types/project";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useIosDevice } from "@/contexts/IosDeviceContext";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { useEffect, useRef } from "react";

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
  const { isIos } = useIosDevice();
  const width = useScreenWidth();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isMouseDraggingRef = useRef(false);

  const DRAG_THRESHOLD = 6;

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    if (event.pointerType === "mouse") return; // mouse is handled separately

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scrollerRef.current.scrollLeft;
    hasDraggedRef.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    if (dragStartXRef.current === null) return;

    const deltaX = event.clientX - dragStartXRef.current;
    if (!hasDraggedRef.current && Math.abs(deltaX) > DRAG_THRESHOLD) {
      hasDraggedRef.current = true;
    }

    if (hasDraggedRef.current) {
      event.preventDefault();
      scrollerRef.current.scrollLeft = dragStartScrollLeftRef.current - deltaX;
    }
  };

  const handlePointerUp = () => {
    dragStartXRef.current = null;
    hasDraggedRef.current = false;
  };

  const beginMouseDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    if (event.button !== 0) return;

    event.preventDefault();
    isMouseDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scrollerRef.current.scrollLeft;
    hasDraggedRef.current = false;
  };

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!scrollerRef.current) return;
      if (!isMouseDraggingRef.current) return;
      if (dragStartXRef.current === null) return;

      const deltaX = event.clientX - dragStartXRef.current;
      if (!hasDraggedRef.current && Math.abs(deltaX) > DRAG_THRESHOLD) {
        hasDraggedRef.current = true;
      }

      if (hasDraggedRef.current) {
        event.preventDefault();
        scrollerRef.current.scrollLeft = dragStartScrollLeftRef.current - deltaX;
      }
    };

    const handleUp = () => {
      if (!isMouseDraggingRef.current) return;
      isMouseDraggingRef.current = false;
      dragStartXRef.current = null;
      hasDraggedRef.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  const handleCardClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    cardIndex: number
  ) => {
    if (hasDraggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      hasDraggedRef.current = false;
      return;
    }
    onSlideClick(cardIndex);
  };

  const isDesktop = width >= 1024;
  const outerStyle: React.CSSProperties | undefined = isDesktop
    ? {
        left: `${containerOffset}px`,
        right: "auto",
        width: `calc(100% - ${containerOffset}px)`,
      }
    : undefined;

  return (
    <div
      className={twMerge(
        "absolute bottom-0 md:bottom-16 lg:bottom-0 left-0 right-0 z-[30]",
        className
      )}
      style={outerStyle}
    >
      <div
        ref={scrollerRef}
        className={twMerge(
          "flex items-stretch overflow-x-auto scrollbar-hide select-none touch-pan-x cursor-grab active:cursor-grabbing",
          isDesktop ? "gap-[14px]" : "gap-[14px] w-full px-6 md:px-12"
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onMouseDown={beginMouseDrag}
      >
        {rest.map((cardIndex) => {
          const cardData = projects[cardIndex];

          return (
            <motion.button
              key={`side-card-${cardIndex}`}
              onClick={(e) => handleCardClick(e, cardIndex)}
              className="relative flex-shrink-0 rounded-[8px] overflow-hidden cursor-pointer xl:hover:-translate-y-2 transition-transform duration-300"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={
                isIos
                  ? { duration: 0, delay: 0 }
                  : {
                      duration: 0.4,
                      ease: [0.4, 0.0, 0.2, 1] as const,
                    }
              }
              style={{
                width: cardWidth,
                height: cardHeight,
                marginRight: gap ? 0 : undefined,
              }}
            >
              <Image
                src={cardData.mainImage.asset.url}
                alt="preview image"
                width={1071}
                height={872}
                sizes="338px"
                className="w-full h-full object-cover"
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
