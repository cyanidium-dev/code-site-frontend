"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function HeroDecorations() {
  const decorationDelay = 0;

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

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        style={{ y: mediumY }}
        className="md:hidden absolute -z-30 bottom-[-354px] left-[calc(50%-64px)] w-[421px] h-auto aspect-[421/459] 
         mix-blend-color-dodge"
      >
        <motion.div
          key="decoration-head"
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
            src="/images/projectPage/hero/head.webp"
            alt="head"
            width={421}
            height={459}
            sizes="421px"
            className="w-[421px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: fastY }}
        className="md:hidden absolute -z-40 bottom-[-228px] left-[50%-160px] w-[445px] h-auto aspect-[445/476]"
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
            src="/images/projectPage/hero/code-site.svg"
            alt="code-site"
            width="445"
            height="476"
            className="w-[445px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute md:hidden -z-10 bottom-[-32px] left-[calc(50%-1073px/2+54.5px)] top-[466px] w-[298%] h-[709px] rounded-full
            bg-black supports-[backdrop-filter]:blur-[57.8px] will-change-transform"
      />
    </div>
  );
}
