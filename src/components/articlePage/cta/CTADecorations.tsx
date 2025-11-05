"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function CTADecorations() {
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax з мемоізацією
  const { fastY, mediumY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [120, -120],
    medium: [-60, 60],
    slow: [-120, 120],
  });

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-20 top-[379px] lg:top-auto lg:bottom-[-50px] left-[calc(50%-334px)] lg:left-[calc(50%-7px)] w-[518px] lg:w-[625px] 
        h-auto aspect-[1251/1761] rotate-[20deg] lg:rotate-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/hand.webp"
            alt="hand"
            width={1251}
            height={1761}
            sizes="(max-width: 1024px) 440px, 625px"
            className="w-[440px] lg:w-[625px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: slowY }}
        className="absolute -z-30 top-[202px] lg:top-[533px] right-[calc(50%-494px)] lg:right-auto lg:left-[calc(50%-654px)] w-[473px] h-auto aspect-[473/320]"
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

      <motion.div
        style={{ y: mediumY }}
        className="hidden lg:block absolute -z-40 bottom-[470px] right-[calc(50%-378px)] w-[502px] h-auto aspect-[502/433]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/code-site-blue.svg"
            alt="code-site.art"
            width="502"
            height="433"
            className="w-[502px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute -z-40 bottom-[507px] right-[calc(50%-437px)] w-[335px] h-auto aspect-[335/416]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/tags.svg"
            alt="tags"
            width="335"
            height="416"
            className="w-[335px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="hidden lg:block absolute bottom-[618px] right-[calc(50%-661px)] w-[244px] h-auto aspect-[244/235]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/drops-top.svg"
            alt="drops"
            width="244"
            height="235"
            className="w-[244px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="hidden lg:block absolute bottom-[287px] right-[calc(50%-210px)] w-[283px] h-auto aspect-[283/280]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/articlePage/cta/drops-bottom.svg"
            alt="drops"
            width="283"
            height="280"
            className="w-[283px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute -z-50 top-[456px] lg:top-auto lg:bottom-[461px] left-[calc(50%-356px)] lg:left-auto lg:right-[calc(50%-450px)] w-[246px] lg:w-[338px] h-[234px] lg:h-[303px] rounded-full
       bg-purple-light supports-[backdrop-filter]:blur-[86px] will-change-transform"
      />
      <div
        className="absolute -z-30 top-[177px] lg:top-auto lg:bottom-[142px] right-[calc(50%-693px)] lg:right-auto lg:left-[calc(50%-1285px)] w-[480px] h-[436px] rounded-full
       bg-main supports-[backdrop-filter]:blur-[335px] will-change-transform"
      />
      <div
        className="absolute z-10 lg:-z-10 bottom-[-248px] lg:bottom-[-350px] left-[-25%] w-[150%] lg:w-[200%] h-[436px] lg:h-[699px] rounded-full
       bg-black supports-[backdrop-filter]:blur-[45px] lg:supports-[backdrop-filter]:blur-[68px] will-change-transform"
      />
    </div>
  );
}
