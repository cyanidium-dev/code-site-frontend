"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function ReviewsDecorations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Різні варіації parallax
  const fastY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const slowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const extraSlowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {/* Code Site */}
      <motion.div className="absolute -z-30 left-[-113px] top-[-183px]">
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
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Girl */}
      <motion.div className="absolute -z-50 top-[-154px] right-[-61px] w-[313px] h-auto aspect-[625/1336] mix-blend-plus-lighter">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/girl.png"
            alt="girl"
            width={313}
            height={668}
            className="w-[313px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div className="absolute -z-40 top-[104px] left-[-407px] w-[448px] h-[451px] rounded-full bg-[#0C96FA] supports-[backdrop-filter]:blur-[131px] will-change-transform" />

      {/* Drops */}
      <motion.div
        // style={{ y: extraSlowY }}
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
      <motion.div className="absolute -z-30 left-[41px] sm:left-[301px] top-[344px] sm:top-[94px] w-[313px] h-auto aspect-[626/939] mix-blend-color-dodge">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/headBg.png"
            alt="head background"
            width={626}
            height={939}
            className=""
          />
        </motion.div>
      </motion.div>

      <div className="absolute -z-20 top-[606px] sm:top-[376px] left-[-82px] sm:left-[100px] w-[524px] h-[337px] rounded-full bg-black supports-[backdrop-filter]:blur-[73px] will-change-transform" />

      {/* Drops Bottom Desk */}
      {/* <motion.div style={{ y: slowY }} className="absolute">
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
            width={255}
            height={265}
            className=""
          />
        </motion.div>
      </motion.div> */}

      {/* Drops Top Desk */}
      {/* <motion.div style={{ y: mediumY }} className="absolute">
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
            width={291}
            height={255}
            className=""
          />
        </motion.div>
      </motion.div> */}

      {/* Girl Desk */}
      {/* <motion.div style={{ y: slowY }} className="absolute">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/girlDesk.png"
            alt="girl"
            width={400}
            height={500}
            className=""
          />
        </motion.div>
      </motion.div> */}

      {/* Tags */}
      {/* <motion.div style={{ y: extraSlowY }} className="absolute">
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
            width={291}
            height={189}
            className=""
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
}
