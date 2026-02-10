"use client";
import AnimatedGraph from "@/components/homePage/whyUs/AnimatedGraph";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import * as motion from "motion/react-client";
import { useEffect, useState, RefObject } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";
import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { useIosDevice } from "@/contexts/IosDeviceContext";
import ReviewDecorationsStatic from "./ReviewDecorationsStatic";

interface ReviewDecorationsProps {
  authorNameRef: RefObject<HTMLHeadingElement | null>;
  isTextReview: boolean;
}

export default function ReviewDecorations({
  authorNameRef,
  isTextReview,
}: ReviewDecorationsProps) {
  const { isIos } = useIosDevice();
  if (isIos) {
    return (
      <ReviewDecorationsStatic
        authorNameRef={authorNameRef}
        isTextReview={isTextReview}
      />
    );
  }
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax з мемоізацією
  const { fastY, mediumY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [120, -120],
    medium: [-60, 60],
    slow: [-120, 120],
  });

  const decorationDelay = 0;

  const [topOffset, setTopOffset] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (authorNameRef.current) {
        const headingRect = authorNameRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current?.getBoundingClientRect();

        if (sectionRect) {
          const relativeTop = headingRect.top - sectionRect.top;
          setTopOffset(relativeTop);
        }
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    const resizeObserver = new ResizeObserver(updatePosition);
    if (authorNameRef.current) {
      resizeObserver.observe(authorNameRef.current);
    }
    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
      resizeObserver.disconnect();
    };
  }, [authorNameRef, sectionRef]);

  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  const textOffset = isTextReview ? 0 : 84;

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {topOffset !== null && (
        <>
          <motion.div
            style={{
              y: slowY,
              top: isMobile ? `${topOffset - 84 - textOffset}px` : "99px",
            }}
            className="absolute -z-10 md:-z-20 md:top-0 left-[calc(50%-47px)] md:left-[calc(50%+127px)] scale-75 md:scale-100 origin-left pointer-events-none"
          >
            <AnimatedGraph />
          </motion.div>
          <motion.div
            style={{
              y: mediumY,
              top: isMobile ? `${topOffset + 71 - textOffset * 2}px` : "181px",
            }}
            className="absolute -z-10 left-[calc(50%-40px)] md:left-auto md:right-0 md:translate-x-1/2 w-[376px] md:w-[508px] h-auto aspect-[376/329] md:aspect-[508/444]"
          >
            <motion.div
              key="decoration-text"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({
                delay: decorationDelay,
                duration: 2,
                scale: 0.8,
              })}
            >
              <Image
                src="/images/projectPage/review/code-site.svg"
                alt="code-site"
                width="376"
                height="329"
                sizes="(max-width: 1024px) 376px, 508px"
                className="w-[376px] md:w-[508px] h-auto"
              />
            </motion.div>
          </motion.div>
          <div
            key="decoration-circle-middle"
            style={{
              top: isMobile ? `${topOffset + 85 - textOffset * 2}px` : "216px",
            }}
            className="absolute -z-10 left-[calc(50%-599px/2+6.5px)] md:left-[calc(50%-808px/2+189px)] w-[598.99px] h-[335.08px] md:w-[808px] md:h-[452px] rounded-full bg-black supports-[backdrop-filter]:blur-[66.2px] will-change-transform"
          />
          <div
            key="decoration-circle-right"
            className="hidden md:block absolute -z-10 top-[500px] right-[-169px] w-[469px] h-[420px] rounded-full bg-black supports-[backdrop-filter]:blur-[89.25px] will-change-transform"
          />
        </>
      )}
    </div>
  );
}
