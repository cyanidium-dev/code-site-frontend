import { useRef, useMemo } from "react";
import {
  useScroll,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "motion/react";

// Тип для offset - використовуємо NonNullable для виключення undefined
type UseScrollOptions = NonNullable<Parameters<typeof useScroll>[0]>;
type ScrollOffset = UseScrollOptions["offset"];

/**
 * Оптимізований хук для parallax анімацій на основі скролу
 * Використовує мемоізацію та оптимізації для продуктивності
 */
export function useParallaxScroll(
  offset: ScrollOffset = ["start end", "end start"]
) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Створюємо scrollYProgress один раз для секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset,
  });

  return { sectionRef, scrollYProgress };
}

/**
 * Готовий хук для створення parallax значень з часто використовуваними варіантами
 * Створює трансформації один раз та перевикористовує їх
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
  const {
    fast = [150, -150],
    medium = [80, -80],
    slow = [-100, 100],
    extraSlow = [-50, 50],
  } = options || {};

  // Створюємо трансформації один раз - useTransform сам оптимізований
  const fastY = useTransform(scrollYProgress, [0, 1], fast);
  const mediumY = useTransform(scrollYProgress, [0, 1], medium);
  const slowY = useTransform(scrollYProgress, [0, 1], slow);
  const extraSlowY = useTransform(scrollYProgress, [0, 1], extraSlow);

  // Мемоізуємо об'єкт для запобігання перестворення
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
