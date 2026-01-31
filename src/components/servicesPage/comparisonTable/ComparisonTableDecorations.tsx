"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export default function ServicesDecorations() {
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
    <div
      ref={sectionRef}
      className="absolute inset-0 pointer-events-none hidden lg:block"
    >
      <motion.div
        style={{ y: mediumY }}
        className="absolute top-[53px] right-[calc(50%+428px)] w-[351px] h-auto aspect-[351/352]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/comparisonTable/drops-blue-top.svg"
            alt="drops"
            width="351"
            height="352"
            sizes="351px"
            className="w-[351px] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: fastY }}
        className="absolute top-[317px] right-[calc(50%+500px)] w-[261px] h-auto aspect-[261/288]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/servicesPage/comparisonTable/drops-blue-bottom.svg"
            alt="drops"
            width="261"
            height="288"
            sizes="261px"
            className="w-[261px] h-auto"
          />
        </motion.div>
      </motion.div>
      <div
        className={`absolute -z-20 lg:-z-20 top-[138px] right-[calc(100%-44px)] w-[295px] h-[347px] rounded-full
       bg-blue/40 ${!isIos ? "supports-[backdrop-filter]:blur-[164px] will-change-transform" : ""}`}
      />
    </div>
  );
}
