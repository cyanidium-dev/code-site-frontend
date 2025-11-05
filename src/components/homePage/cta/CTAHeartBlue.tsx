"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function CTAHeartBlue() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс
  const slowY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

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
            className="w-[390px] h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
