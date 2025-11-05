"use client";
import { useTransform } from "motion/react";
import { ReactNode } from "react";
import Container from "@/components/shared/container/Container";
import FounderDecorations from "./FounderDecorations";
import { useParallaxScroll, useParallaxVariants } from "@/hooks/useParallaxScroll";

interface FounderAnimatedProps {
  children: ReactNode;
}

export default function FounderAnimated({ children }: FounderAnimatedProps) {
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax
  const { fastY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [80, -80],
    slow: [-80, 80],
  });

  return (
    <section ref={sectionRef} className="relative pt-[45px] lg:pt-[271px]">
      <Container className="relative flex flex-col md:flex-row gap-12 md:gap-5">
        <FounderDecorations fastY={fastY} slowY={slowY} />
        {children}
      </Container>
    </section>
  );
}
