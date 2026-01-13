"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import AnimatedGraph from "@/components/homePage/whyUs/AnimatedGraph";

export default function ExtraInfoDecorations() {
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
        className="absolute -z-10 md:-z-20 top-[-99px] left-[-213px] md:left-[calc(50%+127px)] scale-x-128 md:scale-100 origin-left pointer-events-none"
      >
        <AnimatedGraph />
      </motion.div>
      <motion.div
        style={{ y: fastY }}
        className="absolute bottom-[-16px] right-[calc(50%+23px)] w-[188px] h-auto aspect-[188/164]"
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
            sizes="(max-width: 1024px) 188px, 164px"
            className="w-[188px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: slowY }}
        className="absolute bottom-[188px] right-[calc(100%-32px)] w-[56px] h-auto aspect-[56/52]"
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
            sizes="(max-width: 1024px) 56px, 52px"
            className="w-[56px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: mediumY }}
        className="absolute bottom-[212px] right-[calc(50%+104px)] w-[74px] h-auto aspect-[74/67]"
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
            sizes="(max-width: 1024px) 74px, 67px"
            className="w-[74px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute -z-10 bottom-[-41px] left-[calc(50%+120px)] w-[110%] h-[196px] rounded-full
       bg-pink-bright/50 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-10 top-[47px] left-1/2 -translate-x-1/2 w-[400%] h-[210px] rounded-full
       bg-black supports-[backdrop-filter]:blur-[47.5px] will-change-transform"
      />
    </div>
  );
}
