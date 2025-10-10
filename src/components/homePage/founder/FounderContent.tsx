"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import BenefitsList from "./BenefitsList";

interface FounderContentProps {
  actualSolutionsText: string;
}

export default function FounderContent({
  actualSolutionsText,
}: FounderContentProps) {
  return (
    <>
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
          {actualSolutionsText}
        </motion.h2>
        <BenefitsList />
      </div>
    </>
  );
}
