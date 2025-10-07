"use client";
import { useState } from "react";
import FourPointsStarIcon from "@/components/shared/icons/FourPointsStarIcon";

interface FaqItemProps {
  faqItem: { title: string; answer: string };
  idx: number
}

export default function FaqItem({ faqItem, idx }: FaqItemProps) {
  const [isShownMore, setIsShownMore] = useState(false);
  const toggleShowMore = () => setIsShownMore(!isShownMore);

  const { title, answer } = faqItem;

  return (
    <li
      onClick={toggleShowMore}
      className={`relative cursor-pointer px-[18px] py-8 lg:px-8 rounded-[8px] backdrop-blur-[5px] transition duration-700 ease-in-out ${
        isShownMore ? "bg-white" : "xl:hover:brightness-125"
      }`}
    >
      <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
      <div
        className={`flex items-center gap-6 justify-between transition duration-700 ease-in-out will-change-transform ${
          isShownMore ? "text-black" : "text-white"
        }`}
      >
        <p
          className={`text-[14px] lg:text-[20px] font-semibold leading-[120%]`}
        >
          {title}
        </p>
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
          isShownMore ? "max-h-[600px] ease-in" : "max-h-0 ease-out"
        }`}
      >
        <p
          className={`pt-8 text-[12px] lg:text-[16px] font-light leading-[120%] text-black`}
        >
          {answer}
        </p>
      </div>
    </li>
  );
}
