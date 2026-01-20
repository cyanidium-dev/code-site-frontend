"use client";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface ReviewTextProps {
  reviewText: string;
  className?: string;
}
export default function ReviewText({ reviewText, className }: ReviewTextProps) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ delay: 0.5, duration: 0.5, y: 20 })}
      className={`text-[16px] font-light leading-[108%] ${className}`}
    >
      {reviewText}
    </motion.p>
  );
}
