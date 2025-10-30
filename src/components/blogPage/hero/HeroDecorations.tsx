"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroDecorations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const middleY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Повільний параллакс (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        //    style={{ y: slowY }}
        className="absolute top-[344px] left-[calc(50%-177px)] w-[353px] h-auto aspect-[353/530]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/blogPage/hero/girl.png"
            alt="girl"
            width={353}
            height={530}
            className="w-[353px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        //    style={{ y: slowY }}
        className="absolute top-[115px] right-[calc(50%-180px)] w-[164px] lg:w-[244px] h-auto aspect-[244/235]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/blogPage/hero/drops-blue.svg"
            alt="blue drops"
            width="244"
            height="235"
            className="w-[164px] lg:w-[244px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        //    style={{ y: slowY }}
        className="absolute -z-10 top-[385px] right-[calc(50%-213px)] w-[255px] lg:w-[365px] h-auto aspect-[365/283]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/blogPage/hero/dices.png"
            alt="dices"
            width="365"
            height="283"
            className="w-[255px] lg:w-[365px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div className="absolute -z-30 top-[373px] left-[calc(50%-337px)] w-[469px] h-[420px] rounded-full bg-purple-bright supports-[backdrop-filter]:blur-[164px] will-change-transform" />
      <div className="absolute -z-20 top-[-51px] left-[calc(50%-400px)] w-[697px] h-[392px] rounded-full bg-black supports-[backdrop-filter]:blur-[176.7px] will-change-transform" />
      <div className="absolute z-10 bottom-[-168px] left-[calc(50%-371px)] w-[194%] h-[372px] rounded-full bg-black supports-[backdrop-filter]:blur-[90px] will-change-transform" />
    </div>
  );
}
