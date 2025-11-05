"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function ReviewsDecorations() {
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax з мемоізацією
  const { fastY, mediumY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [150, -150],
    medium: [80, -80],
    slow: [-100, 100],
  });

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {/* Code Site */}
      <motion.div
        style={{ y: slowY }}
        className="absolute -z-30 left-[-113px] lg:left-[-96px] top-[-183px] lg:top-[109px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/code-site.svg"
            alt="code-site"
            width={359}
            height={423}
            className="w-[359px] lg:w-[537px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Girl */}
      <motion.div
        style={{ y: fastY }}
        className="absolute -z-50 top-[-154px] lg:top-[-286px] right-[-61px] lg:right-auto lg:left-[-15px] w-[313px] lg:w-[533px] h-auto aspect-[625/1336] mix-blend-plus-lighter"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/girl.webp"
            alt="girl"
            width={313}
            height={668}
            sizes="(max-width: 1024px) 313px, 533px"
            className="w-[313px] lg:w-[533px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div className="absolute -z-40 top-[104px] left-[-407px] w-[448px] h-[451px] rounded-full bg-[#0C96FA] supports-[backdrop-filter]:blur-[131px] will-change-transform" />

      <div className="hidden lg:block absolute -z-10 top-[42px] right-[-121px] w-[448px] h-[451px] rounded-full bg-[#0C96FA] supports-[backdrop-filter]:blur-[131px] will-change-transform" />

      {/* Drops */}
      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-10 top-[275px] left-[-53px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/drops.svg"
            alt="drops"
            width="245"
            height="247"
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Head Background */}
      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-30 left-[41px] sm:left-[301px] top-[344px] sm:top-[94px] w-[313px] h-auto aspect-[626/939] mix-blend-color-dodge"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/headBg.webp"
            alt="head background"
            width={626}
            height={939}
            sizes="313px"
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Tags */}
      <motion.div
        style={{ y: slowY }}
        className="hidden -z-20 lg:block absolute top-[-212px] right-[-34px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/tags.svg"
            alt="tags"
            width="358"
            height="336"
            className=""
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute -z-10 lg:z-20 top-[606px] sm:top-[376px] lg:top-auto lg:bottom-[-586px] left-[-82px] lg:left-[-241px] sm:left-[100px] 
      w-[524px] lg:w-[1762px] h-[337px] lg:h-[667px] rounded-full bg-black supports-[backdrop-filter]:blur-[73px] will-change-transform"
      />

      {/* Drops Top Desk */}
      <motion.div
        style={{ y: fastY }}
        className="hidden lg:block absolute top-[-200px] right-[87px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/drops-top-desk.svg"
            alt="drops"
            width="311"
            height="265"
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Drops Bottom Desk */}
      <motion.div
        style={{ y: fastY }}
        className="hidden lg:block absolute bottom-[-207px] right-[150px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/drops-bottom-desk.svg"
            alt="drops"
            width="345"
            height="348"
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Girl Desk */}
      <motion.div
        style={{ y: mediumY }}
        className="hidden lg:block absolute z-[15] top-[-56px] right-[-72px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/girlDesk.webp"
            alt="girl"
            width={437}
            height={934}
            sizes="437px"
            className=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
