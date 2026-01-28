"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";

export default function FAQDecorations() {
  // PARALLAX DISABLED — використання закоментовано, паралакс не працює
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax
  const { fastY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [120, -120],
    slow: [-120, 120],
  });

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {/* Швидкий шар - qa. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="absolute top-[291px] lg:top-[116px] right-[-93px] lg:right-[-61px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/faq/qa.svg"
            alt="qa"
            width={180}
            height={157}
            className="w-[180px] lg:w-[231px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Швидкий шар - questions. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="absolute bottom-[-85px] lg:bottom-[85px] right-[-149px] lg:right-[-99px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/faq/questions.svg"
            alt="questions"
            width="267"
            height="201"
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - tag. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="absolute top-[280px] lg:top-[143px] left-[-86px] lg:left-[17px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/faq/tag.svg"
            alt="tag"
            width={180}
            height={157}
            className="w-[142px] lg:w-[284px] h-auto rotate-[-10deg] lg:rotate-[-30px]"
          />
        </motion.div>
      </motion.div>

      {/* Швидкий шар - dropsDesk (desktop). PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="hidden lg:block absolute left-0 bottom-[-87px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/faq/dropsDesk.svg"
            alt="drops"
            width={263}
            height={130}
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Швидкий шар - dropsMob (mobile). PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="lg:hidden absolute bottom-[-15px] left-[-10px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/faq/dropsMob.svg"
            alt="drops"
            width={179}
            height={130}
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - dropsBottom. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="hidden lg:block absolute bottom-[-267px] right-[-67px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/faq/dropsBottom.svg"
            alt="drops"
            width="385"
            height="389"
            className=""
          />
        </motion.div>
      </motion.div>
      {/* Повільний шар - blur. PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute -z-20 bottom-[-73px] lg:bottom-[109px] left-[-245px] lg:left-[-238px]"
      >
        <motion.div
          className="w-[271px] lg:w-[448px] h-[273px] lg:h-[451px] 2xl:opacity-50 rounded-full bg-[#0C96FA] supports-[backdrop-filter]:blur-[195px] lg:supports-[backdrop-filter]:blur-[323px] will-change-transform"
        />
      </motion.div>
      {/* PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="hidden lg:block absolute -z-20 bottom-[226px] right-[-272px]"
      >
        <motion.div
          className="w-[363px] h-[363px] 2xl:opacity-50 rounded-full bg-[#9D5280] supports-[backdrop-filter]:blur-[163px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
