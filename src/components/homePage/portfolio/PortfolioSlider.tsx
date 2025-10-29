"use client";
import { useState, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Project } from "@/types/project";
import MainCard from "./MainCard";
import MainCardTexts from "./MainCardTexts";
import SlidePreviewCards from "./SlidePreviewCards";
import Pagination from "./Pagination";
import { useScreenWidth } from "@/hooks/useScreenWidth";

interface PortfolioSliderProps {
  projectsList: Project[];
}

export default function PortfolioSlider({
  projectsList,
}: PortfolioSliderProps) {
  const [order, setOrder] = useState<number[]>([]);
  const [detailsEven, setDetailsEven] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMovingBackward, setIsMovingBackward] = useState(false);

  const loopIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const width = useScreenWidth();

  // Animation constants
  const cardWidth = 138;
  const cardHeight = width > 1024 ? 212 : 179;
  const gap = 14;
  const numberSize = 50;

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

  useEffect(() => {
    if (projectsList && projectsList.length > 0) {
      // формуємо масив [0, 1, 2, ..., n-1]
      setOrder(projectsList.map((_, i) => i));
    }
  }, [projectsList]);

  // Initialize component
  useEffect(() => {
    const init = () => {
      setIsInitialized(true);
      setTimeout(() => {
        startLoop();
      }, 1000);
    };

    init();
  }, []);

  // Start automatic loop
  const startLoop = () => {
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
    }

    loopIntervalRef.current = setInterval(() => {
      step();
    }, 3000);
  };

  // Stop loop
  const stopLoop = () => {
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
  };

  // Step to next slide
  const step = () => {
    setOrder((prev) => {
      const newOrder = [...prev];
      newOrder.push(newOrder.shift()!);
      return newOrder;
    });
    setDetailsEven((prev) => !prev);
    setCurrentSlide((prev) => (prev + 1) % projectsList.length);
  };

  // Step to previous slide
  const stepBack = () => {
    setOrder((prev) => {
      const newOrder = [...prev];
      // Переміщуємо останній елемент на початок масиву
      newOrder.unshift(newOrder.pop()!);
      return newOrder;
    });
    setDetailsEven((prev) => !prev);
    setCurrentSlide(
      (prev) => (prev - 1 + projectsList.length) % projectsList.length
    );
  };

  // Manual navigation
  const goToSlide = (index: number) => {
    // Pause automatic loop when user interacts
    stopLoop();

    const currentIndex = order[0];
    const steps =
      (index - currentIndex + projectsList.length) % projectsList.length;
    const isBackward = steps > projectsList.length / 2;

    setIsMovingBackward(isBackward);

    // Просто встановлюємо новий порядок без анімації
    setOrder((prev) => {
      const newOrder = [...prev];
      // Знаходимо індекс цільового слайда в поточному порядку
      const targetIndex = newOrder.indexOf(index);
      // Переміщуємо цільовий слайд на початок
      const targetSlide = newOrder.splice(targetIndex, 1)[0];
      newOrder.unshift(targetSlide);
      return newOrder;
    });

    setDetailsEven((prev) => !prev);
    setCurrentSlide(index);

    // Resume automatic loop after manual navigation
    setTimeout(() => {
      startLoop();
      setIsMovingBackward(false);
    }, 300);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      stopLoop();
    };
  }, []);

  if (!isInitialized) {
    return null;
  }

  const [active, ...rest] = order;
  const activeData = projectsList[active];

  return (
    <div className="relative h-[631px] lg:h-[687px] overflow-hidden pb-[154px] lg:pb-[74px]">
      {/* Main card */}
      <MainCard
        project={activeData}
        containerOffset={containerOffset}
        offsetTop={offsetTop}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        width={width}
      />

      {/* Main card texts */}
      <MainCardTexts project={activeData} detailsEven={detailsEven} />

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
        activeIndex={active}
        width={width}
        onPrevious={() => {
          stopLoop();
          setIsMovingBackward(true);
          stepBack();
          setTimeout(() => {
            startLoop();
            setIsMovingBackward(false);
          }, 300);
        }}
        onNext={() => {
          stopLoop();
          setIsMovingBackward(false);
          step();
          setTimeout(() => {
            startLoop();
            setIsMovingBackward(false);
          }, 300);
        }}
        onSlideClick={goToSlide}
      />
    </div>
  );
}
