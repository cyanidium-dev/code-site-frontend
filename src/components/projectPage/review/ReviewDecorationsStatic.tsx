"use client";

import AnimatedGraph from "@/components/homePage/whyUs/AnimatedGraph";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { useScreenWidth } from "@/hooks/useScreenWidth";

interface ReviewDecorationsStaticProps {
  authorNameRef: RefObject<HTMLHeadingElement | null>;
  isTextReview: boolean;
}

export default function ReviewDecorationsStatic({
  authorNameRef,
  isTextReview,
}: ReviewDecorationsStaticProps) {
  const [topOffset, setTopOffset] = useState<number | null>(null);
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const textOffset = isTextReview ? 0 : 84;

  useEffect(() => {
    const updatePosition = () => {
      if (authorNameRef.current) {
        const headingRect = authorNameRef.current.getBoundingClientRect();
        const relativeTop = headingRect.top - (window.innerHeight / 2 - 100);
        setTopOffset(relativeTop);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [authorNameRef]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {topOffset !== null && (
        <>
          {/* Graph */}
          <div
            style={{
              top: isMobile ? `${topOffset - 84 - textOffset}px` : "99px",
            }}
            className="absolute -z-10 md:-z-20 md:top-0 left-[calc(50%-47px)] md:left-[calc(50%+127px)] scale-75 md:scale-100 origin-left pointer-events-none"
          >
            <AnimatedGraph />
          </div>

          {/* Code-site text */}
          <div
            style={{
              top: isMobile ? `${topOffset + 71 - textOffset * 2}px` : "181px",
            }}
            className="absolute -z-10 left-[calc(50%-40px)] md:left-auto md:right-0 md:translate-x-1/2 w-[376px] md:w-[508px] h-auto aspect-[376/329] md:aspect-[508/444]"
          >
            <Image
              src="/images/projectPage/review/code-site.svg"
              alt="code-site"
              width={376}
              height={329}
              sizes="(max-width: 1024px) 376px, 508px"
              className="w-[376px] md:w-[508px] h-auto"
            />
          </div>

          {/* Gradient ovals (iOS-style) */}
          <div
            className="absolute -z-10 left-[calc(50%-599px/2+6.5px)] md:left-[calc(50%-808px/2+189px)] w-[598.99px] h-[335.08px] md:w-[808px] md:h-[452px] rounded-full opacity-90"
            aria-hidden
            // black oval
            style={{
              top: isMobile ? `${topOffset + 85 - textOffset * 2}px` : "216px",
              background:
                "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 70%)",
            }}
          />
          <div
            className="hidden md:block absolute -z-10 top-[500px] right-[-169px] w-[469px] h-[420px] rounded-full"
            aria-hidden
            // right black oval
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 70%)",
            }}
          />
        </>
      )}
    </div>
  );
}

