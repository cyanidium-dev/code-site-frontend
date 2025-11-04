"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CTADecorations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const middleY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Повільний параллакс (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        // style={{ y: slowY }}
        className="absolute top-[379px] lg:top-15 left-[calc(50%-334px)] xl:left-[calc(50%-97px)] w-[518px] lg:w-[625px] h-auto aspect-[1251/1761] rotate-[20deg]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/hand.png"
            alt="hand"
            width={1251}
            height={1761}
            className="w-[440px] lg:w-[625px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        // style={{ y: slowY }}
        className="absolute -z-10 top-[202px] lg:top-15 right-[calc(50%-494px)] xl:left-[calc(50%-97px)] w-[473px] h-auto aspect-[473/320]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/code-site.svg"
            alt="code-site.art"
            width="473"
            height="320"
            className="w-[473px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute -z-30 top-[456px] lg:top-[-288px] left-[calc(50%-356px)] lg:left-[calc(50%-243px)] w-[246px] h-[234px] rounded-full
       bg-purple-light supports-[backdrop-filter]:blur-[86px] will-change-transform"
      />
      <div
        className="absolute -z-30 top-[177px] lg:top-[-288px] right-[calc(50%-693px)] lg:left-[calc(50%-243px)] w-[480px] h-[436px] rounded-full
       bg-main supports-[backdrop-filter]:blur-[335px] will-change-transform"
      />
    </div>
  );
}
