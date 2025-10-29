"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function PortfolioDecorations() {
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
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        //  style={{ y: fastY }}
        className="lg:hidden absolute bottom-[150px] left-[-15px] w-[625px] h-auto aspect-[625/79]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/portfolio/code-site.png"
            alt="code-site.art"
            width={625}
            height={79}
            className="w-[625px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        //  style={{ y: fastY }}
        className="absolute -z-10 top-[53px] lg:top-19 left-[-338px] lg:left-auto lg:right-[-148px] w-[650px] lg:w-[763px] h-auto aspect-[1817/1770] bg-black"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="mix-blend-hard-light"
        >
          <Image
            src="/images/homePage/portfolio/head.png"
            alt="head"
            width={1817}
            height={1770}
            className="w-[650px] lg:w-[908px] h-auto mix-blend-hard-light"
          />
        </motion.div>
      </motion.div>

      <motion.div
        //  style={{ y: fastY }}
        className="hidden lg:block absolute -z-10 top-[170px] left-[-56px] w-[266px] h-auto aspect-[266/303]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/portfolio/drops.svg"
            alt="drops"
            width="266"
            height="303"
            className="w-[266px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        //  style={{ y: fastY }}
        className="hidden lg:block absolute -z-10 top-[308px] left-[-119px] w-[496px] h-auto aspect-[266/303]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/portfolio/code-site-desk.svg"
            alt="code-site.art"
            width="496"
            height="552"
            className="w-[496px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div className="hidden lg:block absolute top-[262px] right-[-101px] w-[1026px] h-[586px] rotate-[-148deg] rounded-full bg-black supports-[backdrop-filter]:blur-[72px] will-change-transform" />

      <div className="hidden lg:block absolute top-[322px] right-[-121px] w-[354px] h-[380px] rounded-full bg-main supports-[backdrop-filter]:blur-[281px] will-change-transform" />
    </div>
  );
}
