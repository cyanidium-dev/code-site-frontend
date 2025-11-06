"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import { getAnimationDelay } from "@/utils/getAnimationDelay";

export default function HeroDecorations() {
  const isLoadingSplashScreen = useSplashScreen();
  const girlDelay = getAnimationDelay(isLoadingSplashScreen, 0.3);
  const dropsDelay = getAnimationDelay(isLoadingSplashScreen, 1.1);

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
        className="absolute top-[344px] lg:top-15 left-[calc(50%-177px)] xl:left-[calc(50%-97px)] w-[353px] h-auto aspect-[353/530]"
      >
        <motion.div
          key={`girl-${isLoadingSplashScreen}`}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: girlDelay, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/blogPage/hero/girl.webp"
            alt="girl"
            width={353}
            height={530}
            sizes="353px"
            className="w-[353px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="absolute top-[115px] lg:top-[101px] right-[calc(50%-180px)] lg:right-[calc(50%-701px)] w-[164px] lg:w-[244px] h-auto aspect-[244/235]"
      >
        <motion.div
          key={`drops-${isLoadingSplashScreen}`}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: dropsDelay, scale: 0.95 })}
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
        style={{ y: fastY }}
        className="hidden lg:block absolute z-20 top-[328px] left-[calc(50%-290px)] w-[224px] h-auto aspect-[224/252]"
      >
        <motion.div
          key={`drops-${isLoadingSplashScreen}`}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: dropsDelay, scale: 0.95 })}
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
        style={{ y: mediumY }}
        className="absolute -z-10 top-[385px] lg:top-[318px] right-[calc(50%-213px)] lg:right-auto lg:left-[calc(50%-625px)] w-[255px] lg:w-[365px] h-auto aspect-[365/283]"
      >
        <motion.div
          key={`drops-${isLoadingSplashScreen}`}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: dropsDelay, scale: 0.95 })}
        >
          <Image
            src="/images/blogPage/hero/dices.webp"
            alt="dices"
            width="365"
            height="283"
            sizes="(max-width: 1024px) 255px, 365px"
            className="w-[255px] lg:w-[365px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div className="absolute -z-30 top-[373px] lg:top-[-288px] left-[calc(50%-337px)] lg:left-[calc(50%-243px)] w-[469px] h-[420px] rounded-full bg-purple-bright supports-[backdrop-filter]:blur-[164px] will-change-transform" />
      <div className="lg:hidden absolute -z-20 top-[-51px] left-[calc(50%-400px)] w-[697px] h-[392px] rounded-full bg-black supports-[backdrop-filter]:blur-[176.7px] will-change-transform" />
      <div
        className="absolute z-10 bottom-[-168px] lg:bottom-[-330px] left-[calc(-53%)] lg:left-[calc(50%-1019px)] w-[194%] lg:w-[2564px] h-[372px]
       lg:h-[699px] rounded-full bg-black supports-[backdrop-filter]:blur-[90px]  lg:supports-[backdrop-filter]:blur-[106px] will-change-transform"
      />
    </div>
  );
}
