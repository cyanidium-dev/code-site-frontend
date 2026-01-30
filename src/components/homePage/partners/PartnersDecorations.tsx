"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";
import PartnersDecorationsStatic from "./PartnersDecorationsStatic";

export default function PartnersDecorations() {
  const { isIos } = useIosDevice();
  if (isIos) return <PartnersDecorationsStatic />;

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
      {/* Швидкий шар - drops. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="absolute -z-10 top-[49px] right-[-40px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/partners/drops.svg"
            alt="drops"
            width="183"
            height="184"
            className="lg:hidden"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - chain mobile. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="lg:hidden absolute -z-30 top-[77px] left-[calc(50%-205px)]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/partners/chainMob.webp"
            alt="chain"
            width="455"
            height="198"
            sizes="(max-width: 1024px) 455px, 0px"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - chain desktop. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="hidden lg:block absolute -z-30 top-[26px] right-[-302px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/partners/chainDesk.webp"
            alt="chain"
            width="912"
            height="225"
            sizes="(min-width: 1024px) 912px, 0px"
            className="hidden lg:block"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - black blur */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute -z-20 top-[-5px] lg:top-[-76px] left-[calc(50%-200px)] lg:left-[166px]"
      >
        <motion.div className="w-[399px] lg:w-[800px] h-[286px] lg:h-[373px] rounded-full bg-black supports-[backdrop-filter]:blur-[60px] lg:supports-[backdrop-filter]:blur-[60px] will-change-transform" />
      </motion.div>

      {/* Повільний шар - main blur. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="hidden lg:block absolute -z-20 top-[-159px] left-[-425px]"
      >
        <motion.div
          className="w-[354px] h-[380px] 2xl:opacity-50 rounded-full bg-main supports-[backdrop-filter]:blur-[281px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
