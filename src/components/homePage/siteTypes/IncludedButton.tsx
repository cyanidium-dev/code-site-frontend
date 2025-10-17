"use client";

import { useState, useRef, useEffect } from "react";
import MainButton from "@/components/shared/buttons/MainButton";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { modalVariants } from "@/utils/animationVariants";
import StarIcon from "@/components/shared/icons/StarIcon";

interface IncludedButtonProps {
  list: string[];
}

export default function IncludedButton({ list }: IncludedButtonProps) {
  const t = useTranslations("homePage.siteTypes");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <MainButton
        onClick={() => setIsOpen(true)}
        variant="pink"
        className="mb-3 md:mb-6 px-5 text-[10px] md:text-[12px]"
      >
        <div className="flex items-center justify-between w-full">
          {t("button")}
          <Image
            src="/images/homePage/siteTypes/star.svg"
            alt="star"
            width={21}
            height={21}
            className="inline-block mb-1 rotate-45"
          />
        </div>
      </MainButton>
      {/* Модалка */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="absolute z-[100] top-15 left-0 rounded-[6px] bg-white w-full p-5 shadow-sm"
          >
            <ul className="flex flex-col gap-3">
              {list.map((listItem, idx) => (
                <li key={idx} className="flex items-center gap-3 text-black">
                  <StarIcon className="size-4 shrink-0" />
                  <p className="text-[12px] md:text-[14px] font-light leading-[122%]">
                    {listItem}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
