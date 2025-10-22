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

  const number = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value.includes(".") ? latest.toFixed(1) : Math.round(latest).toString()
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
      <p className="mb-[5px] xl:mb-4 font-guano-apes text-[50px] lg:text-[70px] xl:text-[90px] font-medium uppercase">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="font-actay text-[8px] lg:text-[10px] xl:text-[12px] font-bold uppercase text-center">
        {description}
      </p>
    </motion.li>
  );
}
