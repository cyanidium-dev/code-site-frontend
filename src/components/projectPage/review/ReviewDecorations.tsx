"use client";
import AnimatedGraph from "@/components/homePage/whyUs/AnimatedGraph";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import * as motion from "motion/react-client";
import { useEffect, useState, RefObject } from "react";

interface ReviewDecorationsProps {
  authorNameRef: RefObject<HTMLHeadingElement | null>;
}

export default function ReviewDecorations({
  authorNameRef,
}: ReviewDecorationsProps) {
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  const { slowY } = useParallaxVariants(scrollYProgress, {
    slow: [-120, 120],
  });

  const [topPosition, setTopPosition] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (authorNameRef.current) {
        const headingRect = authorNameRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current?.getBoundingClientRect();

        if (sectionRect) {
          const headingCenter =
            headingRect.top - sectionRect.top + headingRect.height / 2;
          const graphHeight = 289;
          const relativeTop = headingCenter - graphHeight / 2;
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

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {topPosition !== null && (
        <motion.div
          style={{ y: slowY, top: `${topPosition}px` }}
          className="absolute z-[5] left-[-98px] md:left-[calc(50%+91px)] lg:left-[calc(50%+91px)] w-[973px] lg:w-[936px] h-auto lg:h-[289px] pointer-events-none"
        >
          <AnimatedGraph />
        </motion.div>
      )}
    </div>
  );
}
