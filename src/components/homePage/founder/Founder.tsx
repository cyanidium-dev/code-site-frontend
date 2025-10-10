"use client";
import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BenefitsList from "./BenefitsList";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import FounderDecorations from "./FounderDecorations";

export default function Founder() {
  const t = useTranslations("homePage.founder");
  const sectionRef = useRef<HTMLElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Швидкий параллакс для drops (рухається швидше)
  const fastY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Повільний параллакс для figure (рухається повільніше)
  const slowY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={sectionRef} className="pt-[45px] xl:pt-[271px]">
      <Container className="relative flex flex-col md:flex-row gap-12 md:gap-5">
        <FounderDecorations fastY={fastY} slowY={slowY} />

        {/* Основний контент - рухається зі звичайною швидкістю (без параллаксу) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: -20 })}
          className="relative rounded-[8px] overflow-hidden w-full md:w-[calc(100%-19px-334px)] h-[514px]"
        >
          <Image
            src="/images/homePage/founder/founder.webp"
            alt="founder"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="md:w-[333px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95 })}
            className="mb-8 font-actay text-[22px] font-bold leading-[108%] uppercase"
          >
            {t("actualSolutions")}
          </motion.h2>
          <BenefitsList />
        </div>
      </Container>
    </section>
  );
}
