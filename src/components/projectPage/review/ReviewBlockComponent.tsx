import type { ReviewBlock } from "@/types/project";
import * as motion from "motion/react-client";
import { fadeInAnimation, listItemVariants } from "@/utils/animationVariants";
import ReviewRating from "./ReviewRating";
import ReviewVideo from "./ReviewVideo";
import ReviewText from "./ReviewText";
import ReviewImage from "./ReviewImage";
import { forwardRef } from "react";

interface ReviewBlockComponentProps {
  review: ReviewBlock["review"];
  title: string[];
}

const ReviewBlockComponent = forwardRef<
  HTMLHeadingElement,
  ReviewBlockComponentProps
>(({ review, title }, ref) => {
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

      <div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 50 })}
          className="hidden md:flex mb-[79px] font-actay flex-col text-[46px] font-bold leading-[110%] bg-[linear-gradient(90deg,#FF8ED2,#73C5FF)] bg-clip-text text-transparent uppercase"
        >
          {title[0]}
          <span className="text-white">{title[1]}</span>
        </motion.h2>
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
      </div>
    </>
  );
});

ReviewBlockComponent.displayName = "ReviewBlockComponent";

export default ReviewBlockComponent;
