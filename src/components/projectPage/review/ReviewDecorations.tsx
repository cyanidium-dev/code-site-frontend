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

interface ReviewDecorationsProps {
  authorNameRef: RefObject<HTMLHeadingElement | null>;
  isTextReview: boolean;
}

export default function ReviewDecorations({
  authorNameRef,
  isTextReview,
}: ReviewDecorationsProps) {
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

  const [topPosition, setTopPosition] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (authorNameRef.current) {
        const headingRect = authorNameRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current?.getBoundingClientRect();

        if (sectionRect) {
          const relativeTop = headingRect.top - sectionRect.top;
          setTopPosition(relativeTop);
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

  const textOffset = isTextReview ? 0 : 84;
  console.log(topPosition);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {topPosition !== null && (
        <>
          <motion.div
            style={{ y: slowY, top: `${topPosition - 84 - textOffset}px` }}
            className="absolute -z-10 left-[calc(50%-47px)] scale-75 origin-left pointer-events-none"
          >
            <AnimatedGraph />
          </motion.div>
          <motion.div
            style={{
              y: mediumY,
              top: `${topPosition + 71 - textOffset * 2}px`,
            }}
            className="md:hidden absolute -z-40 bottom-[-228px] left-[50%-40px] w-[376px] h-auto aspect-[376/329]"
          >
            <motion.div
              key="decoration-middle"
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
                className="w-[376px] h-auto"
              />
            </motion.div>
          </motion.div>
          <div
            style={{ top: `${topPosition + 85 - textOffset * 2}px` }}
            className="absolute md:hidden -z-10 bottom-[-4694.17px] left-[calc(50%-598.99px/2+6.5px)] w-[598.99px] h-[335.08px] rounded-full
            bg-black supports-[backdrop-filter]:blur-[66.2px] will-change-transform"
          />
        </>
      )}
    </div>
  );
}
