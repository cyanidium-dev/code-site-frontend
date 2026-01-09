"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function PortfolioDecorations() {
  const decorationDelay = 0;

  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax з мемоізацією
  const { fastY } = useParallaxVariants(scrollYProgress, {
    fast: [120, -120],
  });

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        key="decoration-bottom"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({
          delay: decorationDelay,
          duration: 2,
          scale: 0.8,
        })}
        className="absolute md:hidden -z-50 bottom-[-57px] right-[-165px] w-[273px] h-auto aspect-[273/291]"
      >
        <Image
          src="/images/portfolioPage/projectList/code-site-list.svg"
          alt="code-site"
          width="273"
          height="291"
          className="w-[273px] h-auto"
        />
      </motion.div>
      <motion.div
        style={{ y: fastY }}
        className="hidden md:block absolute -z-50 top-[27.6%] left-[-141px] w-[445px] h-auto aspect-[445/476]"
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
            src="/images/portfolioPage/projectList/code-site-list.svg"
            alt="code-site"
            width="445"
            height="476"
            className="w-[445px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute md:hidden -z-10 bottom-[-117px] right-[-125%] w-[130%] h-[420px] rounded-full
    bg-main supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
    </div>
  );
}
