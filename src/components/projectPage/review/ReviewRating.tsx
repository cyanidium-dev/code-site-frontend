import { listItemVariants } from "@/utils/animationVariants";
import * as motion from "motion/react-client";
import Image from "next/image";

interface ReviewRatingProps {
  rating: number;
  className?: string;
}

export default function ReviewRating({ rating, className }: ReviewRatingProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Array.from({ length: rating }).map((_, index) => (
        <motion.div
          key={`review-rating-${index}`}
          viewport={{ once: true, amount: 0.2 }}
          variants={listItemVariants}
          className="size-[49px] flex items-center justify-center"
        >
          <Image
            src="/images/projectPage/review/star.svg"
            alt="star"
            width={49}
            height={49}
          />
        </motion.div>
      ))}
    </div>
  );
}
