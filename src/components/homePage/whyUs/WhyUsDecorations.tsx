"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import AnimatedMapWithDots from "./AnimatedMapWithDots";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";
import WhyUsDecorationsStatic from "./WhyUsDecorationsStatic";

export default function WhyUsDecorations() {
  const { isIos } = useIosDevice();

  if (isIos) {
    return <WhyUsDecorationsStatic />;
  }

  // PARALLAX DISABLED — використання закоментовано, паралакс не працює
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax
  const { fastY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [80, -80],
    slow: [-80, 80],
  });

  return (
    <div ref={sectionRef}>
      {/* Швидкий шар - drops mobile. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="lg:hidden absolute top-[-177px] lg:top-[-115px] left-[-52px] lg:left-[-12px] z-10 pointer-events-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/whyUs/drops.svg"
            alt="drops"
            width="232"
            height="251"
            className="w-[232px] lg:w-[263px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Швидкий шар - drops desktop. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="hidden lg:block absolute top-[118px] left-[-86px] z-10 pointer-events-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/whyUs/dropsDesk.svg"
            alt="drops"
            width="348"
            height="350"
          />
        </motion.div>
      </motion.div>

      {/* Швидкий шар - tag small. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="absolute top-[-45px] lg:top-[246px] right-[-16px] lg:right-[calc(50%-566px)] z-10 pointer-events-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/whyUs/tag-small.svg"
            alt="tag"
            width="82"
            height="63"
            sizes="82px"
            className="w-[82px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - tag large. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="absolute top-[82px] lg:top-[71px] right-[89px] lg:right-[calc(50%-78px)] -z-20 pointer-events-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/whyUs/tag-large.svg"
            alt="tag"
            width="110"
            height="85"
            sizes="(max-width: 1024px) 110px, 229px"
            className="w-[110px] lg:w-[229px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - map. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="absolute -z-30 lg:-z-20 top-[-33px] lg:top-[82px] left-[calc(50%-206px)] lg:left-auto lg:right-[39px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <AnimatedMapWithDots className="w-[377px] lg:w-[604px] h-auto" />
        </motion.div>
      </motion.div>

      {/* Повільний шар - blur. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute -z-10 top-[-66px] left-[-51px] lg:top-[-290px] lg:left-auto lg:right-[43px]"
      >
        <motion.div
          className="w-[303px] lg:w-[777px] h-[238px] lg:h-[611px] rounded-full bg-black supports-[backdrop-filter]:blur-[53px] lg:supports-[backdrop-filter]:blur-[72px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
