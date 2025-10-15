"use client";
import { useState } from "react";
import FourPointsStarIcon from "@/components/shared/icons/FourPointsStarIcon";
import * as motion from "motion/react-client";
import { listItemVariantsLeft } from "@/utils/animationVariants";

interface FaqItemProps {
  faqItem: { title: string; answer: string };
  idx: number;
}

export default function FaqItem({ faqItem, idx }: FaqItemProps) {
  const [isShownMore, setIsShownMore] = useState(false);
  const toggleShowMore = () => setIsShownMore(!isShownMore);

  const { title, answer } = faqItem;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariantsLeft}
      onClick={toggleShowMore}
      className={`relative cursor-pointer px-[18px] py-5 lg:py-9 lg:px-8 rounded-[8px] backdrop-blur-[5px] transition-[background-color,filter] duration-700 ease-in-out ${
        isShownMore ? "bg-white" : "xl:hover:brightness-125"
      }`}
    >
      <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
      <div
        className={`flex items-center gap-6 justify-between transition-colors duration-700 ease-in-out will-change-transform ${
          isShownMore ? "text-black" : "text-white"
        }`}
      >
        <h3
          className={`text-[14px] lg:text-[20px] font-semibold leading-[120%]`}
        >
          {title}
        </h3>
        <FourPointsStarIcon
          isShownMore={isShownMore}
          idx={idx}
          className={`size-5 lg:size-8 shrink-0 transition duration-300 ease-in-out will-change-transform ${
            isShownMore ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-700 will-change-transform ${
          isShownMore ? "max-h-[800px] ease-in" : "max-h-0 ease-out"
        }`}
      >
        <p
          className={`pt-8 text-[12px] lg:text-[16px] font-light leading-[120%] text-black`}
        >
          {answer}
        </p>
      </div>
    </motion.li>
  );
}
