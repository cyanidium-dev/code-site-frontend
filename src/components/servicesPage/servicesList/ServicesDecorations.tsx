"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function ServicesDecorations() {
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
        className="absolute top-[-248px] right-[calc(50%+55px)] w-[225px] h-auto aspect-[225/229]"
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
            sizes="(max-width: 1024px) 225px, 229px"
            className="w-[225px] md:w-[229px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: slowY }}
        className="absolute -z-10 bottom-[-135px] left-[calc(50%+3px)] w-[473px] h-auto aspect-[473/472] 
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
            sizes="473px"
            className="w-[473px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: mediumY }}
        className="absolute -z-30 bottom-[177px] left-[calc(50%+50px)] w-[337px] h-auto aspect-[337/353]"
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
            className="w-[337px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute -z-20 lg:-z-20 top-[19px] right-[calc(50%+60px)] w-[70%] h-[259px] rounded-full
       bg-pink-bright/50 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-10 top-[99px] left-1/2 -translate-x-1/2 w-[180%] h-[408px] rounded-full
       bg-black supports-[backdrop-filter]:blur-[57.8px] will-change-transform"
      />
      <div
        className="absolute -z-10 lg:-z-10 top-[588px] left-[calc(50%+58px)] w-[70%] h-[259px] rounded-full
       bg-pink-bright/50 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-10 lg:-z-10 top-[1076px] right-[calc(50%+19px)] w-[82%] h-[347px] rounded-full
       bg-blue/40 supports-[backdrop-filter]:blur-[164px] will-change-transform"
      />
      <div
        className="absolute -z-20 lg:-z-10 bottom-[30px] right-[calc(50%-250px)] w-[50%] h-[352px] rounded-full
       bg-blue/70 supports-[backdrop-filter]:blur-[156px] will-change-transform rotate-[56.37deg] origin-center"
      />
    </div>
  );
}
