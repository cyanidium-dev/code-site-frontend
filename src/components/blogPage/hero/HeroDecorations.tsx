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
        className="absolute top-[344px] lg:top-15 left-[calc(50%-177px)] lg:left-[calc(50%-97px)] w-[353px] h-auto aspect-[353/530]"
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
        className="absolute top-[115px] lg:top-[101px] right-[calc(50%-180px)] lg:right-[calc(50%-701px)] w-[164px] lg:w-[244px] h-auto aspect-[244/235]"
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
        className="hidden lg:block absolute z-20 top-[328px] left-[calc(50%-290px)] w-[224px] h-auto aspect-[224/252]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/blogPage/hero/drops-pink.svg"
            alt="blue drops"
            width="224"
            height="252"
            className="w-[224px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        //    style={{ y: slowY }}
        className="absolute -z-10 top-[385px] lg:top-[318px] right-[calc(50%-213px)] lg:right-auto lg:left-[calc(50%-625px)] w-[255px] lg:w-[365px] h-auto aspect-[365/283]"
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

      <div className="absolute -z-30 top-[373px] lg:top-[-288px] left-[calc(50%-337px)] lg:left-[calc(50%-243px)] w-[469px] h-[420px] rounded-full bg-purple-bright supports-[backdrop-filter]:blur-[164px] will-change-transform" />
      <div className="lg:hidden absolute -z-20 top-[-51px] left-[calc(50%-400px)] w-[697px] h-[392px] rounded-full bg-black supports-[backdrop-filter]:blur-[176.7px] will-change-transform" />
      <div
        className="absolute z-10 bottom-[-168px] lg:bottom-[-330px] left-[calc(-53%)] lg:left-[calc(50%-1019px)] w-[194%] lg:w-[2564px] h-[372px]
       lg:h-[699px] rounded-full bg-black supports-[backdrop-filter]:blur-[90px] lg:supports-[backdrop-filter]:blur-[106px] will-change-transform"
      />
    </div>
  );
}
