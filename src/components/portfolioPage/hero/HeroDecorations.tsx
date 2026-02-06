"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export default function HeroDecorations() {
  const { isIos } = useIosDevice();
  const decorationDelay = 0;

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
        style={{ y: fastY }}
        className="absolute -z-30 top-[288px] lg:top-[-155px] right-[calc(50%-268px)] lg:right-[calc(50%-460px)] w-[337px] lg:w-[555px] h-auto aspect-[337/475] 
         mix-blend-color-dodge"
      >
        <motion.div
          key="decoration-head"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: decorationDelay, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/head.webp"
            alt="head"
            width={337}
            height={475}
            sizes="(max-width: 1024px) 337px, 555px"
            className="w-[337px] lg:w-[555px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-40 top-[374px] lg:top-[22px] right-[calc(50%-192px)] lg:right-[calc(50%-244px)] w-[337px] lg:w-[441px] h-auto aspect-[337/475]"
      >
        <motion.div
          key="decoration-phone"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: decorationDelay, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/portfolioPage/hero/phone.webp"
            alt="phone"
            width={271}
            height={330}
            sizes="(max-width: 1024px) 271px, 441px"
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
          key="decoration-logo"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: decorationDelay, duration: 2, scale: 0.8 })}
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
        style={{ y: mediumY }}
        className="hidden lg:block absolute -z-50 top-[234px] right-[calc(50%-681px)] w-[493px] h-auto aspect-[493/375]"
      >
        <motion.div
          key="decoration-right"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: decorationDelay, duration: 2, scale: 0.8 })}
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
          key="decoration-drops-mob"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: decorationDelay, duration: 2, scale: 0.8 })}
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
          key="decoration-drops-desk"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: decorationDelay, duration: 2, scale: 0.8 })}
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
        className={`absolute -z-10 top-[529px] lg:top-[263px] left-[-40%] lg:left-[-50%] w-[180%] lg:w-[200%] h-[408px] lg:h-[643px] rounded-full
       bg-black ${!isIos ? "supports-[backdrop-filter]:blur-[52px] lg:supports-[backdrop-filter]:blur-[65px] will-change-transform" : ""}`}
      />
    </div>
  );
}
