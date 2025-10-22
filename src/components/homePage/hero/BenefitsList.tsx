import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import BenefitItem from "./BenefitItem";

interface BenefitsListProps {
  list: { value: string; description: string }[];
  subtitle: string;
  counterColor: string;
}

export default function BenefitsList({
  list,
  subtitle,
  counterColor,
}: BenefitsListProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 1.2 })}
      className="relative z-10 flex flex-wrap md:flex-nowrap gap-2.5 lg:gap-[15px] mt-4 lg:mt-18"
    >
      {list.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
      <li className="flex flex-col justify-center w-[calc(50%-5px)] lg:w-[210px] lg:mt-[-61px] lg:ml-[45px]">
        <p className="lg:mb-4 xl:mb-9 font-actay text-[12px] lg:text-[16px] leading-[120%] font-bold uppercase">
          {subtitle}
        </p>
        <ul className="hidden lg:flex gap-[15px] text-[19px] font-normal leading-none">
          <li
            className="flex justify-center items-center size-12 rounded-full border-2 benefit-highlight-1"
            style={{ color: counterColor, borderColor: counterColor }}
          >
            01
          </li>
          <li
            className="flex justify-center items-center size-12 rounded-full border-2 benefit-highlight-2"
            style={{ color: counterColor, borderColor: counterColor }}
          >
            02
          </li>
          <li
            className="flex justify-center items-center size-12 rounded-full border-2 benefit-highlight-3"
            style={{ color: counterColor, borderColor: counterColor }}
          >
            03
          </li>
        </ul>
      </li>
    </motion.ul>
  );
}
