"use client";
import { useState, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Project } from "@/types/project";
import Container from "@/components/shared/container/Container";
import Image from "next/image";
import ArrowButton from "./ArrowButton";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import ProjectCategory from "./ProjectCategory";
import ProjectAdvantages from "./ProjectAdvantages";
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
  const gap = width > 1024 ? 40 : 14;
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
      offsetTop: 200,
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
      // setTimeout(() => {
      //   startLoop();
      // }, 1000);
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
    <div className="relative h-[631px] lg:h-[687px] overflow-hidden pb-[154px] lg:pb-20">
      {/* Main card */}
      <motion.div
        key={`bg-${active}`}
        className="relative h-[477px] lg:h-[607px] rounded-[8px] lg:rounded-[18px] overflow-hidden max-w-[calc(100%-48px)] sm:max-w-[592px] md:max-w-[720px] 
        lg:max-w-[864px] xl:max-w-[1040px] px-6 lg:px-20 xl:px-30 mx-auto"
      >
        {/* Background image + gradient in one layer */}
        <motion.div
          key={`image-${active}`}
          initial={{
            x:
              width >= 1280
                ? containerOffset - 240
                : width >= 1024
                  ? containerOffset - 160
                  : containerOffset - 48,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            borderRadius: 8,
          }}
          animate={{
            x: 0,
            y: 0,
            width: "100%",
            height: "100%",
            borderRadius: width >= 1024 ? 18 : 8,
          }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: 0.05,
          }}
          style={{
            background: `linear-gradient(140deg, ${
              activeData.gradientStartColor || "#CFFD59"
            } 0%, ${activeData.gradientEndColor || "#121212"} 100%)`,
          }}
          className="absolute top-0 left-0 w-[calc(100%-48px)] lg:w-[calc(100%-160px)] xl:w-[calc(100%-240px)] rounded-[8px] lg:rounded-[18px] overflow-hidden"
        >
          {/* Background image with specific dimensions */}
          <motion.div
            key={`image-${active}`}
            initial={{
              x: "300px",
              y: "300px",
              width: 338,
              height: 275,
            }}
            animate={{
              width: width >= 1024 ? 1071 : 521,
              height: width >= 1024 ? 872 : 424,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            style={{
              backgroundImage: `url(${activeData.mainImage.asset.url})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="absolute top-[71px] lg:top-0 left-[calc(50%-247px)] lg:left-[calc(50%-480px)] w-[521px] lg:w-[1071px] aspect-[1071/872] rounded-[8px] lg:rounded-[18px]"
          />
        </motion.div>
      </motion.div>

      {/* Main card texts */}
      <Container className="absolute top-0 left-0 sm:left-[calc((100%-640px)/2)] md:left-[calc((100%-768px)/2)] lg:left-[calc((100%-1024px)/2)] xl:left-[calc((100%-1280px)/2)] h-[477px] lg:h-[607px] w-full">
        <AnimatePresence mode="wait">
          <div className="absolute z-[22] flex justify-between w-[calc(100%-48px)] lg:w-[calc(100%-160px)] xl:w-[calc(100%-240px)] h-full p-[14px] lg:p-[50px]">
            {/* Left side */}
            <motion.div
              key={`details-${detailsEven ? "even" : "odd"}`}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
                delay: 0.4,
              }}
              className="flex flex-col justify-between h-full"
            >
              <ProjectCategory
                project={activeData}
                className="hidden lg:block"
              />
              <ProjectAdvantages
                advantages={activeData.advantages}
                className="lg:hidden"
              />
              <motion.div
                className="relative p-5 lg:p-0 rounded-[10px] lg:rounded-none bg-white/6 lg:bg-transparent shadow-[inset_0px_2px_16px_rgba(255,255,255,0.25)] 
                lg:shadow-none backdrop-blur-[18.95px] lg:backdrop-blur-none"
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                  delay: 0.35,
                }}
              >
                <div
                  className="lg:hidden absolute inset-0 rounded-[10px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(175.34deg, #FF76C1 3.91%, #6A8FFF 123.62%",
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <ArrowButton
                  slug={activeData.slug}
                  className="absolute -top-2 -right-2 lg:static mb-8"
                />
                <h3 className="lg:max-w-[291px] mb-2 lg:mb-5 font-actay text-[12px] lg:text-[24px] font-bold leading-[120%] uppercase">
                  {activeData.portfolioTitle}
                </h3>
                <p className="lg:max-w-[252px] text-[10px] lg:text-[12px] font-light leading-[120%]">
                  {activeData.portfolioDescription}
                </p>
                <ProjectCategory
                  project={activeData}
                  className="lg:hidden mt-3"
                />
              </motion.div>
            </motion.div>

            {/* Right side */}
            <motion.div
              key={`details-right-${detailsEven ? "even" : "odd"}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
                delay: 0.4,
              }}
              className="hidden lg:block"
            >
              <ProjectAdvantages advantages={activeData.advantages} />
            </motion.div>
          </div>
        </AnimatePresence>
      </Container>

      {/* Slide preview cards */}
      {rest.map((cardIndex, index) => {
        const cardData = projectsList[cardIndex];
        const x = containerOffset + index * (cardWidth + gap);

        return (
          <motion.button
            key={`side-card-${cardIndex}`}
            onClick={() => goToSlide(cardIndex)}
            className="absolute bottom-0 lg:bottom-5 rounded-[8px] z-[30] cursor-pointer xl:hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
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
            <div className="absolute top-[20px] left-[-60px] w-[338px] h-auto aspect-[1071/872] flex items-center justify-center overflow-hidden">
              <Image
                src={cardData.mainImage.asset.url}
                alt="preview image"
                width={1071}
                height={872}
                className="w-[338px] h-auto object-contain"
              />
            </div>
          </motion.button>
        );
      })}

      {/* Pagination */}
      <motion.div
        className="absolute left-0 sm:left-[calc((100%-640px+48px)/2)] md:left-[calc((100%-768px+48px)/2)] lg:left-[calc((100%-1024px+160px)/2)] xl:left-[calc((100%-1280px+240px)/2)] bottom-0 z-[30] flex items-center"
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
          onClick={() => {
            stopLoop();
            setIsMovingBackward(true);
            stepBack();
            setTimeout(() => {
              startLoop();
              setIsMovingBackward(false);
            }, 300);
          }}
          type="button"
          aria-label="icon button"
          className={`group cursor-pointer flex items-center justify-center size-[50px] p-[15px] rounded-full border-[1.5px] border-white active:scale-[95%] transition duration-300 ease-out will-change-transform`}
        >
          <ArrowIcon className="rotate-[-135deg] text-white group-active:scale-[95%] group-[focus-visible]:-translate-x-0.5 xl:group-hover:-translate-x-0.5 transition duration-300 ease-out will-change-transform" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => {
            stopLoop();
            setIsMovingBackward(false);
            step();
            setTimeout(() => {
              startLoop();
              setIsMovingBackward(false);
            }, 300);
          }}
          type="button"
          aria-label="icon button"
          className={`group cursor-pointer flex items-center justify-center ml-3 size-[50px] p-[15px] rounded-full border-[1.5px] border-white active:scale-[95%] transition duration-300 ease-out will-change-transform`}
        >
          <ArrowIcon className="rotate-[45deg] text-white group-active:scale-[95%] group-[focus-visible]:translate-x-0.5 xl:group-hover:translate-x-0.5 transition duration-300 ease-out will-change-transform" />
        </button>

        {/* Progress bar */}
        <div className="ml-6 z-[60] w-[500px] h-[50px] flex items-center">
          <div className="w-[500px] h-[3px] bg-white/20 relative cursor-pointer group">
            <motion.div
              className="h-[3px] bg-[#ecad29]"
              initial={{ width: 0 }}
              animate={{
                width: `${500 * (1 / projectsList.length) * (active + 1)}px`,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            />
            {/* Clickable segments */}
            {projectsList.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="absolute top-0 h-[50px] w-[83.33px] cursor-pointer hover:bg-white/5 transition-colors duration-300"
                style={{ left: `${index * (500 / projectsList.length)}px` }}
              />
            ))}
          </div>
        </div>

        {/* Slide numbers */}
        <div className="w-[50px] h-[50px] overflow-hidden z-[60] relative">
          {projectsList.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="absolute top-0 left-0 w-[50px] h-[50px] text-white flex items-center justify-center text-[32px] font-bold cursor-pointer hover:bg-white/10 rounded-full transition-all duration-300"
              initial={{ x: (index + 1) * numberSize }}
              animate={{ x: index === active ? 0 : (index + 1) * numberSize }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
