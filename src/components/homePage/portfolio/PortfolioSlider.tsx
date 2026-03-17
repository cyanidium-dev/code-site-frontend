"use client";
import { useState, useEffect, useRef } from "react";
import { Project } from "@/types/project";
import MainCard from "./MainCard";
import MainCardTexts from "./MainCardTexts";
import SlidePreviewCards from "./SlidePreviewCards";
import Pagination from "./Pagination";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { Link } from "@/i18n/navigation";

interface PortfolioSliderProps {
  projectsList: Project[];
}

export default function PortfolioSlider({
  projectsList,
}: PortfolioSliderProps) {
  const [detailsEven, setDetailsEven] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMovingBackward, setIsMovingBackward] = useState(false);

  const width = useScreenWidth();

  const dragStartXRef = useRef<number | null>(null);
  const dragDeltaXRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const suppressNextClickRef = useRef(false);

  const DRAG_THRESHOLD = 40;

  // Animation constants
  const cardWidth = width > 786 ? 286 : 150;
  const cardHeight = width > 786 ? 212 : 111;
  const gap = 14;

  // Calculate positions
  const getPositions = () => {
    if (typeof window === "undefined")
      return { offsetTop: 200, containerOffset: 0 };

    let containerOffset = 0;

    if (width >= 1280) {
      containerOffset = (width - 1280) / 2 + 240 + 500; // xl breakpoint
    } else if (width >= 1024) {
      containerOffset = (width - 1024) / 2 + 160 + 460; // lg breakpoint
    } else if (width >= 768) {
      containerOffset = (width - 768) / 2 + 48 + 380; // md breakpoint
    } else if (width >= 640) {
      containerOffset = (width - 640) / 2 + 48 + 220; // sm breakpoint
    } else {
      containerOffset = width / 2 + 48 - 80;
    }

    return {
      offsetTop: width >= 1024 ? 200 : 300,
      containerOffset,
    };
  };

  const { offsetTop, containerOffset } = getPositions();

  // Initialize component
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Step to next slide
  const step = () => {
    setDetailsEven((prev) => !prev);
    setCurrentSlide((prev) => (prev + 1) % projectsList.length);
  };

  // Step to previous slide
  const stepBack = () => {
    setDetailsEven((prev) => !prev);
    setCurrentSlide(
      (prev) => (prev - 1 + projectsList.length) % projectsList.length
    );
  };

  // Manual navigation
  const goToSlide = (index: number) => {
    setIsMovingBackward(index < currentSlide);
    setDetailsEven((prev) => !prev);
    setCurrentSlide(index);
    setTimeout(() => setIsMovingBackward(false), 300);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
    dragStartXRef.current = event.clientX;
    dragDeltaXRef.current = 0;
    hasDraggedRef.current = false;
    suppressNextClickRef.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartXRef.current === null) return;
    const deltaX = event.clientX - dragStartXRef.current;
    dragDeltaXRef.current = deltaX;

    if (!hasDraggedRef.current && Math.abs(deltaX) > DRAG_THRESHOLD) {
      hasDraggedRef.current = true;
      // Prevent text selection / accidental link interactions during drag
      event.preventDefault();
      (window as any).__portfolioSlideDragging = true;
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!hasDraggedRef.current) {
      dragStartXRef.current = null;
      dragDeltaXRef.current = 0;
      return;
    }

    const deltaX = dragDeltaXRef.current;

    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      suppressNextClickRef.current = true;
      if (deltaX > 0) {
        setIsMovingBackward(true);
        stepBack();
        setTimeout(() => {
          setIsMovingBackward(false);
        }, 300);
      } else {
        setIsMovingBackward(false);
        step();
      }
    }

    dragStartXRef.current = null;
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    dragStartXRef.current = event.clientX;
    dragDeltaXRef.current = 0;
    hasDraggedRef.current = false;
    suppressNextClickRef.current = false;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragStartXRef.current === null) return;
    const deltaX = event.clientX - dragStartXRef.current;
    dragDeltaXRef.current = deltaX;

    if (!hasDraggedRef.current && Math.abs(deltaX) > DRAG_THRESHOLD) {
      hasDraggedRef.current = true;
      event.preventDefault();
      (window as any).__portfolioSlideDragging = true;
    }
  };

  const handleMouseUp = () => {
    if (!hasDraggedRef.current) {
      dragStartXRef.current = null;
      dragDeltaXRef.current = 0;
      return;
    }

    const deltaX = dragDeltaXRef.current;

    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      suppressNextClickRef.current = true;
      if (deltaX > 0) {
        setIsMovingBackward(true);
        stepBack();
        setTimeout(() => {
          setIsMovingBackward(false);
        }, 300);
      } else {
        setIsMovingBackward(false);
        step();
      }
    }

    dragStartXRef.current = null;
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (suppressNextClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }

    hasDraggedRef.current = false;
    dragStartXRef.current = null;
    dragDeltaXRef.current = 0;
    suppressNextClickRef.current = false;
    (window as any).__portfolioSlideDragging = false;
  };

  if (!isInitialized) {
    return null;
  }

  const activeData = projectsList[currentSlide];
  const rest = projectsList
    .map((_, i) => i)
    .filter((i) => i !== currentSlide);

  return (
    <div className="relative h-[631px] lg:h-[687px] overflow-hidden pb-[154px] lg:pb-[74px]">
      <Link
        href={`/portfolio/${activeData.slug}`}
        aria-label={activeData.portfolioTitle}
        onClick={handleClick}
      >
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Main card */}
          <MainCard
            project={activeData}
            containerOffset={containerOffset}
            offsetTop={offsetTop}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            width={width}
            isPriority={currentSlide === 0}
          />

          {/* Main card texts */}
          <MainCardTexts project={activeData} detailsEven={detailsEven} />
        </div>
      </Link>

      {/* Slide preview cards */}
      <SlidePreviewCards
        projects={projectsList}
        rest={rest}
        containerOffset={containerOffset}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        gap={gap}
        isMovingBackward={isMovingBackward}
        onSlideClick={goToSlide}
      />

      {/* Pagination */}
      <Pagination
        projectsCount={projectsList.length}
        activeIndex={currentSlide}
        width={width}
        onPrevious={() => {
          setIsMovingBackward(true);
          stepBack();
          setTimeout(() => {
            setIsMovingBackward(false);
          }, 300);
        }}
        onNext={() => {
          setIsMovingBackward(false);
          step();
        }}
        onSlideClick={goToSlide}
      />
    </div>
  );
}
