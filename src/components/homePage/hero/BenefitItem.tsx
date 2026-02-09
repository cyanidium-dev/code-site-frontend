"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { listItemVariants } from "@/utils/animationVariants";

interface BenefitItemProps {
  benefit: {
    value: string;
    description: string;
  };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { value, description } = benefit;

  // Проверяем, содержит ли значение дефис или слэш (например, "7–14" или "24/7")
  const hasSpecialChars = /[–\/-]/.test(value);

  // Если есть специальные символы, просто отображаем значение как есть
  if (hasSpecialChars) {
    return (
      <motion.li
        variants={listItemVariants}
        className="flex flex-col justify-center items-center w-[calc(50%-5px)] lg:w-[186px] xl:w-[246px] pt-1.5 pb-3 lg:pb-[15px] px-4 rounded-[4px] lg:rounded-[6px] border-[1.5px] lg:border-2 border-white"
      >
        <p className="mb-[5px] xl:mb-4 font-guano-apes text-[50px] lg:text-[70px] xl:text-[90px] font-medium uppercase whitespace-nowrap">
          {value}
        </p>
        <p className="font-actay text-[8px] lg:text-[10px] xl:text-[12px] font-bold uppercase text-center">
          {description}
        </p>
      </motion.li>
    );
  }

  // Для обычных числовых значений используем анимацию
  const numericPart = value.replace(/[^\d.]/g, "");
  const number = parseFloat(numericPart);
  // Извлекаем суффикс, удаляя только числовую часть в начале строки (включая опциональную десятичную точку)
  const suffix = value.replace(/^\d+\.?\d*/, "");
  // Проверяем, содержит ли числовая часть десятичную точку между цифрами (например, "3.5" но не "1" в "1 yr.")
  // Используем регулярное выражение для проверки наличия точки между цифрами
  const hasDecimal = /^\d+\.\d+$/.test(numericPart);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    hasDecimal ? latest.toFixed(1) : Math.round(latest).toString()
  );

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, {
        duration: 3.8,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, count, number]);

  return (
    <motion.li
      ref={ref}
      variants={listItemVariants}
      className="flex flex-col justify-center items-center w-[calc(50%-5px)] lg:w-[186px] xl:w-[246px] pt-1.5 pb-3 lg:pb-[15px] px-4 rounded-[4px] lg:rounded-[6px] border-[1.5px] lg:border-2 border-white"
    >
      <p className="mb-[5px] xl:mb-4 font-guano-apes text-[50px] lg:text-[70px] xl:text-[90px] font-medium uppercase whitespace-nowrap">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="font-actay text-[8px] lg:text-[10px] xl:text-[12px] font-bold uppercase text-center">
        {description}
      </p>
    </motion.li>
  );
}
