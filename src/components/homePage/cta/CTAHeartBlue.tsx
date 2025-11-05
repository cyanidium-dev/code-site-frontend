"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function CTAHeartBlue() {
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Повільний параллакс
  const { slowY } = useParallaxVariants(scrollYProgress, {
    slow: [-150, 150],
  });

  return (
    <div
      ref={sectionRef}
      className="hidden lg:block absolute -z-[15] top-[-136px] right-[-196px] w-[390px] h-auto aspect-[390/377]"
    >
      <motion.div style={{ y: slowY }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/cta/heart-blue.webp"
            alt="heart"
            width={390}
            height={377}
            sizes="390px"
            className="w-[390px] h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
