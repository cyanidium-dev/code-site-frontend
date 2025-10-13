"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function FAQDecorations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  // Повільний параллакс (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {/* Швидкий шар - qa */}
      <motion.div
        style={{ y: fastY }}
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

      {/* Швидкий шар - questions */}
      <motion.div
        style={{ y: fastY }}
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

      {/* Повільний шар - tag */}
      <motion.div
        style={{ y: slowY }}
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

      {/* Швидкий шар - dropsDesk (desktop) */}
      <motion.div
        style={{ y: fastY }}
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

      {/* Швидкий шар - dropsMob (mobile) */}
      <motion.div
        style={{ y: slowY }}
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

      {/* Повільний шар - dropsBottom */}
      <motion.div
        style={{ y: slowY }}
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
      {/* Повільний шар - blur */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute -z-20 bottom-[-73px] lg:bottom-[109px] left-[-245px] lg:left-[-238px]"
      >
        <motion.div
          style={{ y: slowY }}
          className="w-[271px] lg:w-[448px] h-[273px] lg:h-[451px] rounded-full bg-[#0C96FA] supports-[backdrop-filter]:blur-[195px] lg:supports-[backdrop-filter]:blur-[323px] will-change-transform"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="hidden lg:block absolute -z-20 bottom-[226px] right-[-272px]"
      >
        <motion.div
          style={{ y: slowY }}
          className="w-[363px] h-[363px] rounded-full bg-[#9D5280] supports-[backdrop-filter]:blur-[163px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
