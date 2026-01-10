import type { ReviewBlock } from "@/types/project";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import ReviewRating from "./ReviewRating";
import ReviewVideo from "./ReviewVideo";
import ReviewText from "./ReviewText";
import ReviewImage from "./ReviewImage";
import { forwardRef } from "react";

interface ReviewBlockComponentProps {
  review: ReviewBlock["review"];
}

const ReviewBlockComponent = forwardRef<
  HTMLHeadingElement,
  ReviewBlockComponentProps
>(({ review }, ref) => {
  const {
    id,
    authorName,
    videoUrl,
    contentType,
    rating,
    reviewText,
    reviewImage,
  } = review;

  return (
    <>
      {contentType === "video" && videoUrl && (
        <ReviewVideo
          id={id}
          authorName={authorName}
          videoUrl={videoUrl}
          className="mb-8 md:mb-0"
        />
      )}
      {contentType === "image" && reviewImage && (
        <ReviewImage
          id={id}
          authorName={authorName}
          reviewImage={reviewImage}
          className="mb-8 md:mb-0"
        />
      )}
      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
      >
        <h3
          ref={ref}
          className="mb-8 font-actay text-[20px] font-bold leading-[120%] uppercase"
        >
          {authorName.split(" ").map((name, index) => (
            <span key={index} className="block">
              {name}
            </span>
          ))}
        </h3>
      </motion.div>

      {rating && <ReviewRating rating={rating} className="mb-8" />}

      {contentType === "text" && reviewText && (
        <ReviewText reviewText={reviewText} className="mb-8" />
      )}
    </>
  );
});

ReviewBlockComponent.displayName = "ReviewBlockComponent";

export default ReviewBlockComponent;
