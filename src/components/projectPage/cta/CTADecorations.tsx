"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export default function CTADecorations() {
  const { isIos } = useIosDevice();
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
        style={{ y: slowY }}
        className="absolute -z-10 top-[345px] lg:top-[51px] left-1/2 md:left-[400px] -translate-x-1/2 md:translate-x-0 w-[613px] lg:w-[803px]
        h-auto aspect-[613/469] lg:aspect-[803/602] rotate-[2deg] lg:rotate-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/projectPage/cta/phone.webp"
            alt="phone"
            width={1607}
            height={1205}
            sizes="(max-width: 1024px) 613px, 803px"
            className="w-[613px] lg:w-[803px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-20 top-[440px] md:top-[97px] left-1/2 md:left-[calc(50%-25px)] -translate-x-1/2 md:translate-x-0 w-[650px] md:w-[625px]
        h-auto aspect-[1300/1270] md:aspect-[1251/1760] origin-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/projectPage/cta/hand-mob.webp"
            alt="hand"
            width={1300}
            height={1270}
            sizes="650px"
            className="w-[650px] lg:hidden h-auto"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/projectPage/cta/hand-desk.webp"
            alt="hand"
            width={1251}
            height={1760}
            sizes="625px"
            className="w-[625px] h-auto hidden md:block"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: slowY }}
        className="absolute -z-30 top-[322px] md:top-[70px] left-[calc(50%-12px)] md:left-[calc(50%)] w-[322px] md:w-[513px] h-auto aspect-[322/290] md:aspect-[513/456] rotate-[-61deg] mix-blend-color-dodge md:rotate-none md:mix-blend-normal"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/projectPage/cta/code-site-blue.svg"
            alt="code-site.art"
            width="322"
            height="290"
            className="w-[322px] md:w-[513px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: mediumY }}
        className="hidden md:block absolute -z-40 top-[437px] left-[-38px] w-[480px] h-auto aspect-[480/350]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/projectPage/cta/code-site-red.svg"
            alt="code-site.art"
            width="480"
            height="350"
            className="w-[480px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="absolute top-[330px] md:top-[121px] left-[calc(50%-35px)] md:left-auto md:right-[181px] w-[196px] md:w-[240px] h-auto aspect-[196/196] md:aspect-[240/235] scale-75 md:scale-100"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/projectPage/cta/drops-top.svg"
            alt="drops"
            width="196"
            height="196"
            sizes="(max-width: 1024px) 196px, 240px"
            className="w-[196px] md:w-[240px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="absolute top-[553px] md:top-[360px] -z-20 right-[calc(50%-10px)] md:right-[calc(50%-50px)] md:translate-x-1/2 w-[207px] md:w-[282px] h-auto aspect-[207/205] md:aspect-[282/280]"
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
            width="207"
            height="205"
            sizes="(max-width: 1024px) 207px, 282px"
            className="w-[207px] md:w-[282px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* blue */}
      <div
        className={`absolute -z-50 top-[471px] md:top-[163px] left-1/2 md:left-[calc(50%+60px)] -translate-x-1/2 md:translate-x-0 w-[244px] md:w-[338px] h-[232px] md:h-[302px] rounded-full
       bg-purple-light ${!isIos ? "supports-[backdrop-filter]:blur-[86px] will-change-transform" : ""}`}
      />
      {/* bottom black */}
      <div
        className={`absolute z-10 lg:-z-10 bottom-[-248px] md:bottom-auto md:top-[516px] left-[-25%] w-[150%] lg:w-[200%] h-[436px] lg:h-[699px] rounded-full
       bg-black ${!isIos ? "supports-[backdrop-filter]:blur-[45px] lg:supports-[backdrop-filter]:blur-[68px] will-change-transform" : ""}`}
      />
    </div>
  );
}
