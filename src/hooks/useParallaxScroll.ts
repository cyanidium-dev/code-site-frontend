import { useRef, useMemo } from "react";
import {
  useScroll,
  useTransform,
  useMotionValue,
  MotionValue,
  useMotionValueEvent,
} from "motion/react";

// Тип для offset - використовуємо NonNullable для виключення undefined
type UseScrollOptions = NonNullable<Parameters<typeof useScroll>[0]>;
type ScrollOffset = UseScrollOptions["offset"];

/**
 * Оптимізований хук для parallax анімацій на основі скролу
 * Використовує мемоізацію та оптимізації для продуктивності
 *
 * PARALLAX DISABLED: реалізація закоментована, повертає статичні значення
 */
export function useParallaxScroll(
  offset: ScrollOffset = ["start end", "end start"]
) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // PARALLAX DISABLED — закоментовано, parallax не працює
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset,
  // });
  const scrollYProgress = useMotionValue(0);

  return { sectionRef, scrollYProgress };
}

/**
 * Готовий хук для створення parallax значень з часто використовуваними варіантами
 * Створює трансформації один раз та перевикористовує їх
 *
 * PARALLAX DISABLED: реалізація закоментована, повертає статичні 0
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

  // PARALLAX DISABLED — закоментовано, повертаємо useTransform(..., [0, 0]) щоб не було руху
  // const fastY = useTransform(scrollYProgress, [0, 1], fast);
  // const mediumY = useTransform(scrollYProgress, [0, 1], medium);
  // const slowY = useTransform(scrollYProgress, [0, 1], slow);
  // const extraSlowY = useTransform(scrollYProgress, [0, 1], extraSlow);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const slowY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const extraSlowY = useTransform(scrollYProgress, [0, 1], [0, 0]);

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
