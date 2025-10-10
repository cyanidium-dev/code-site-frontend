"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";
import Container from "@/components/shared/container/Container";
import FounderDecorations from "./FounderDecorations";

interface FounderAnimatedProps {
  children: ReactNode;
}

export default function FounderAnimated({ children }: FounderAnimatedProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс для drops (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Повільний параллакс для figure (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={sectionRef} className="pt-[45px] xl:pt-[271px]">
      <Container className="relative flex flex-col md:flex-row gap-12 md:gap-5">
        <FounderDecorations fastY={fastY} slowY={slowY} />
        {children}
      </Container>
    </section>
  );
}
