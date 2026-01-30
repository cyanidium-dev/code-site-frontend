"use client";

import { useRef, useMemo } from "react";
import {
  useScroll,
  useTransform,
  useMotionValue,
  MotionValue,
} from "motion/react";
import { useIosDevice } from "@/contexts/IosDeviceContext";

// Тип для offset - використовуємо NonNullable для виключення undefined
type UseScrollOptions = NonNullable<Parameters<typeof useScroll>[0]>;
type ScrollOffset = UseScrollOptions["offset"];

/**
 * Оптимізований хук для parallax анімацій на основі скролу.
 * Parallax увімкнено тільки на не-iOS пристроях (на iOS повертає 0).
 */
export function useParallaxScroll(
  offset: ScrollOffset = ["start end", "end start"]
) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIos } = useIosDevice();

  const { scrollYProgress: scrollYProgressReal } = useScroll({
    target: sectionRef,
    offset,
  });
  const scrollYProgressStatic = useMotionValue(0);

  const scrollYProgress = isIos ? scrollYProgressStatic : scrollYProgressReal;

  return { sectionRef, scrollYProgress };
}

/**
 * Готовий хук для створення parallax значень з часто використовуваними варіантами.
 * На iOS повертає 0 (без руху); на інших пристроях — реальні parallax значення.
 */
export function useParallaxVariants(
  scrollYProgress: MotionValue<number>,
  options?: {
    fast?: [number, number];
    medium?: [number, number];
    slow?: [number, number];
    extraSlow?: [number, number];
  }
) {
  const { isIos } = useIosDevice();
  const {
    fast = [150, -150],
    medium = [80, -80],
    slow = [-100, 100],
    extraSlow = [-50, 50],
  } = options || {};

  const zero: [number, number] = [0, 0];
  const fastY = useTransform(scrollYProgress, [0, 1], isIos ? zero : fast);
  const mediumY = useTransform(scrollYProgress, [0, 1], isIos ? zero : medium);
  const slowY = useTransform(scrollYProgress, [0, 1], isIos ? zero : slow);
  const extraSlowY = useTransform(
    scrollYProgress,
    [0, 1],
    isIos ? zero : extraSlow
  );

  return useMemo(
    () => ({
      fastY,
      mediumY,
      slowY,
      extraSlowY,
    }),
    [fastY, mediumY, slowY, extraSlowY]
  );
}

/**
 * Хук для відстеження абсолютного значення скролу (scrollY)
 * Корисний для Header та інших компонентів, які потребують значення скролу в пікселях
 */
export function useScrollY() {
  const { scrollY } = useScroll();

  return { scrollY };
}
