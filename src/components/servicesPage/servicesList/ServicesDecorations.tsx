"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";
import ServicesDecorationsStatic from "./ServicesDecorationsStatic";

export default function ServicesDecorations() {
  const { isIos } = useIosDevice();
  const decorationDelay = 0;

  // On iOS use a separate static decorations component (no parallax / blur),
  // same pattern as home hero's HeroSlideDecorations/HeroSlideDecorationsStatic.
  if (isIos) {
    return <ServicesDecorationsStatic />;
  }

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
        className="absolute top-[-180px] md:top-[-185px] right-[calc(50%+55px)] md:right-[calc(50%+437px)] w-[225px] md:w-[325px] h-auto aspect-[225/229]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/servicesList/drops-purple.svg"
            alt="drops"
            width="225"
            height="229"
            sizes="(max-width: 1024px) 225px, 325px"
            className="w-[225px] md:w-[325px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: fastY }}
        className="hidden md:block absolute top-[-266px] left-[calc(50%+428px)] w-[350px] h-auto aspect-[350/352]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/servicesList/drops-blue-top.svg"
            alt="drops"
            width="350"
            height="352"
            sizes="350px"
            className="w-[350px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: slowY }}
        className="absolute -z-10 bottom-[-135px] md:bottom-[-364px] left-[calc(50%+3px)] md:left-[calc(50%+338px)] w-[473px] md:w-[624px] h-auto aspect-[473/472] 
         mix-blend-color-dodge"
      >
        <motion.div
          key="decoration-head"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            delay: decorationDelay,
            duration: 2,
            scale: 0.8,
          })}
        >
          <Image
            src="/images/servicesPage/servicesList/head.webp"
            alt="head"
            width={473}
            height={472}
            sizes="(max-width: 1024px) 473px, 624px"
            className="w-[473px] md:w-[624px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-30 bottom-[177px] md:bottom-[160px] left-[calc(50%+50px)] md:left-[calc(50%+355px)] w-[337px] md:w-[575px] h-auto aspect-[337/353]"
      >
        <motion.div
          key="decoration-middle"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            delay: decorationDelay,
            duration: 2,
            scale: 0.8,
          })}
        >
          <Image
            src="/images/servicesPage/servicesList/code-site-blue.svg"
            alt="code-site"
            width="337"
            height="353"
            className="w-[337px] md:w-[575px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute -z-20 lg:-z-20 top-[100px] md:top-[-35px] right-[calc(50%+60px)] md:right-[calc(50%+573px)] w-[70%] md:w-[295px] h-[259px] md:h-[347px] rounded-full bg-pink-bright/30 md:bg-pink-bright supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-10 top-[180px] md:top-[-689px] left-1/2 -translate-x-1/2 w-[180%] md:w-[100%] h-[408px] md:h-[532px] rounded-full bg-black supports-[backdrop-filter]:blur-[57.8px] will-change-transform"
      />
      <div
        className="absolute lg:hidden -z-10 lg:-z-10 top-[588px] left-[calc(50%+58px)] w-[70%] h-[259px] rounded-full bg-pink-bright/50 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute lg:hidden -z-10 lg:-z-10 top-[1076px] right-[calc(50%+19px)] w-[82%] h-[347px] rounded-full bg-blue/40 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-20 lg:-z-10 bottom-[30px] right-[calc(50%-250px)] md:right-auto md:left-[calc(50%+394px)] w-[50%] md:w-[204px] h-[352px] md:h-[398px] rounded-full bg-blue/70 supports-[backdrop-filter]:blur-[156px] will-change-transform rotate-[56.37deg] origin-center"
      />
    </div>
  );
}
