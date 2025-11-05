"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function WhyUsImages() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Повільний параллакс (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div ref={sectionRef}>
      {/* Швидкий шар - compact disk */}
      <motion.div
        style={{ y: fastY }}
        className="absolute z-20 bottom-[-35px] lg:bottom-[-115px] right-[-78px] lg:right-[-82px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <div
            className="w-[164px] lg:w-[251px] h-[164px] lg:h-[251px] rounded-full"
            style={{
              background: `
                radial-gradient(89.1% 89.1% at 40.3% 3.43%, #001EFF 0%, #B8C6FF 18.19%, #74B5FF 37.1%, #046AF8 58.61%, #B8DAFF 80.46%, #0451F8 100%),
                conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 58.85deg, #FFFFFF 109.04deg, #000000 147.12deg, #FFFFFF 193.85deg, #000000 245.77deg, #FFFFFF 295.96deg, #000000 337.5deg, #FFFFFF 360deg),
                conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 43.27deg, #FFFFFF 86.54deg, #000000 129.81deg, #FFFFFF 174.81deg, #000000 212.88deg, #FFFFFF 256.15deg, #000000 297.69deg, #FFFFFF 337.5deg, #FFFFFF 360deg)
              `,
            }}
          >
            <Image
              src="/images/homePage/whyUs/compact-disk.svg"
              alt="compact disk"
              width="164"
              height="164"
              sizes="(max-width: 1024px) 164px, 251px"
              className="w-full h-full mix-blend-screen"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Повільний шар - pink blur */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute z-10 bottom-[-32px] lg:bottom-[-249px] right-[-91px] lg:right-[-242px]"
      >
        <motion.div
          style={{ y: slowY }}
          className="w-[190px] lg:w-[469px] h-[207px] lg:h-[512px] 2xl:opacity-50 rounded-full bg-pink-bright supports-[backdrop-filter]:blur-[66px] lg:supports-[backdrop-filter]:blur-[164px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
