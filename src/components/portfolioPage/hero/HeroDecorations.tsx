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

  const middleY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Повільний параллакс (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        style={{ y: fastY }}
        className="absolute -z-30 top-[288px] lg:top-[-155px] right-[calc(50%-268px)] lg:right-[calc(50%-460px)] w-[337px] lg:w-[555px] h-auto aspect-[337/475] 
         mix-blend-color-dodge"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/head.png"
            alt="head"
            width={337}
            height={475}
            className="w-[337px] lg:w-[555px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: middleY }}
        className="absolute -z-40 top-[374px] lg:top-[22px] right-[calc(50%-192px)] lg:right-[calc(50%-244px)] w-[337px] lg:w-[441px] h-auto aspect-[337/475]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/phone.png"
            alt="phone"
            width={271}
            height={330}
            className="w-[271px] lg:w-[441px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="absolute -z-50 lg:-z-50 top-[272px] lg:top-[-208px] left-[calc(50%-311px)] lg:left-[calc(50%-279px)] w-[470px] h-auto aspect-[470/492]
        lg:rotate-[24deg]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/code-site.svg"
            alt="code-site"
            width="470"
            height="492"
            className="w-[470px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: middleY }}
        className="hidden lg:block absolute -z-50 top-[234px] right-[calc(50%-681px)] w-[493px] h-auto aspect-[493/375]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/code-site-right.svg"
            alt="code-site"
            width="493"
            height="375"
            className="w-[493px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="lg:hidden absolute -z-20 top-[50px] right-[calc(50%-270px)] w-[179px] h-auto aspect-[179/177]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/dropsMob.svg"
            alt="drops"
            width="179"
            height="177"
            className="w-[179px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="hidden lg:block absolute -z-20 top-[62px] left-[calc(50%-726px)] w-[224px] h-auto aspect-[224/252]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/dropsDesk.svg"
            alt="drops"
            width="224"
            height="252"
            className="w-[224px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute -z-10 top-[529px] lg:top-[263px] left-[-40%] lg:left-[-50%] w-[180%] lg:w-[200%] h-[408px] lg:h-[643px] rounded-full
       bg-black supports-[backdrop-filter]:blur-[52px] lg:supports-[backdrop-filter]:blur-[65px] will-change-transform"
      />
    </div>
  );
}
