"use client";
import * as motion from "motion/react-client";
import { listVariants, listItemVariantsLeft } from "@/utils/animationVariants";
import BenefitItem from "./BenefitItem";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface BenefitsListProps {
  list: { value: string; description: string }[];
  subtitle: string;
  counterColor: string;
}

const noAnimationVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 1 },
};

const noAnimationItemVariants = {
  hidden: { opacity: 1, x: 0, scale: 1 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 1 },
};

export default function BenefitsList({
  list,
  subtitle,
  counterColor,
}: BenefitsListProps) {
  const { isIos } = useIosDevice();
  const delayChildren = 0;

  const listVariantsConfig = isIos
    ? noAnimationVariants
    : listVariants({ staggerChildren: 0.3, delayChildren });
  const itemVariants = isIos ? noAnimationItemVariants : listItemVariantsLeft;

  return (
    <motion.ul
      key="benefits"
      initial={isIos ? "visible" : "hidden"}
      whileInView={isIos ? undefined : "visible"}
      exit="exit"
      viewport={isIos ? undefined : { once: true, amount: 0.2 }}
      variants={listVariantsConfig}
      className="relative z-10 flex flex-wrap md:flex-nowrap gap-2.5 lg:gap-[15px] mt-4 lg:mt-18"
    >
      {list.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
      <motion.li
        variants={itemVariants}
        className="flex flex-col justify-center w-[calc(50%-5px)] lg:w-[210px] lg:mt-[-61px] lg:ml-[45px]"
      >
        <p className="flex items-center lg:mb-4 xl:mb-9 font-actay text-[12px] lg:text-[16px] leading-[120%] font-bold uppercase min-h-[8lh]">
          {subtitle}
        </p>
        <ul className="hidden lg:flex gap-[15px] text-[19px] font-normal leading-none">
          <li
            className="flex justify-center items-center size-12 rounded-full border-2 benefit-highlight-1"
            style={{
              color: counterColor,
              borderColor: counterColor,
              animationDelay: "0s",
            }}
          >
            01
          </li>
          <li
            className="flex justify-center items-center size-12 rounded-full border-2 benefit-highlight-2"
            style={{
              color: counterColor,
              borderColor: counterColor,
              animationDelay: "0s",
            }}
          >
            02
          </li>
          <li
            className="flex justify-center items-center size-12 rounded-full border-2 benefit-highlight-3"
            style={{
              color: counterColor,
              borderColor: counterColor,
              animationDelay: "0s",
            }}
          >
            03
          </li>
        </ul>
      </motion.li>
    </motion.ul>
  );
}
