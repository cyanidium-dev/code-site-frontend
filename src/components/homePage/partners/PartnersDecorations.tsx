"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function PartnersDecorations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Повільний параллакс (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div ref={sectionRef}>
      {/* Швидкий шар - drops */}
      <motion.div
        style={{ y: fastY }}
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

      {/* Повільний шар - chain mobile */}
      <motion.div
        style={{ y: slowY }}
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
            src="/images/homePage/partners/chainMob.png"
            alt="chain"
            width="455"
            height="198"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - chain desktop */}
      <motion.div
        style={{ y: fastY }}
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
            src="/images/homePage/partners/chainDesk.png"
            alt="chain"
            width="912"
            height="225"
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

      {/* Повільний шар - main blur */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="hidden lg:block absolute -z-20 top-[-159px] left-[-425px]"
      >
        <motion.div
          style={{ y: slowY }}
          className="w-[354px] h-[380px] rounded-full bg-main supports-[backdrop-filter]:blur-[281px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
