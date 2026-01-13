"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import AnimatedGraph from "@/components/homePage/whyUs/AnimatedGraph";
import { useEffect, useMemo } from "react";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function ExtraInfoDecorations() {
  const screenWidth = useScreenWidth();
  const graphScale = useMemo(() => {
    return (screenWidth + 175) / 936;
  }, [screenWidth]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--graph-scale",
      graphScale.toString()
    );
  }, [graphScale]);

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
        className="absolute -z-10 md:-z-30 top-[-99px] left-[-213px] md:top-[-158px] md:left-[-162px] scale-x-128 md:scale-x-155
    xl:scale-x-[var(--graph-scale)] origin-left pointer-events-none"
      >
        <AnimatedGraph />
      </motion.div>
      <motion.div
        style={{ y: fastY }}
        className="absolute bottom-[-16px] md:bottom-[27px] md:-z-30 right-[calc(50%+23px)] md:right-[calc(50%+404px)] w-[188px] md:w-[299px] h-auto aspect-[188/164]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/extraInfo/tag-big.svg"
            alt="tag-big"
            width="188"
            height="164"
            sizes="(max-width: 1024px) 188px, 299px"
            className="w-[188px] md:w-[299px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: slowY }}
        className="absolute bottom-[188px] md:bottom-[234px] md:-z-30 right-[calc(100%-32px)] md:right-[calc(100%-87px)] w-[56px] md:w-[116px] h-auto aspect-[56/52]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/extraInfo/tag-right.svg"
            alt="tag-right"
            width="56"
            height="52"
            sizes="(max-width: 1024px) 56px, 116px"
            className="w-[56px] md:w-[116px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: mediumY }}
        className="absolute bottom-[212px] md:bottom-[316px] md:-z-30 right-[calc(50%+104px)] md:right-[calc(50%+478px)] w-[74px] md:w-[170px] h-auto aspect-[74/67]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/extraInfo/tag-left.svg"
            alt="tag-left"
            width="74"
            height="67"
            sizes="(max-width: 1024px) 74px, 170px"
            className="w-[74px] md:w-[170px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute -z-10 bottom-[-41px] md:bottom-[202px] left-[calc(50%+120px)] md:left-[calc(50%+462px)] w-[110%] md:w-[668px] h-[196px] md:h-[347px] rounded-full
       bg-pink-bright/50 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-10 md:-z-20 top-[47px] left-1/2 -translate-x-1/2 w-[400%] md:w-[190%] h-[210px] md:h-[235px] rounded-full
       bg-black supports-[backdrop-filter]:blur-[47.5px] will-change-transform"
      />
    </div>
  );
}
