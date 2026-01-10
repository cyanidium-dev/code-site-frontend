"use client";
import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import type { ReviewBlock } from "@/types/project";
import ReviewBlockComponent from "./ReviewBlockComponent";
import { fadeInAnimation } from "@/utils/animationVariants";
import * as motion from "motion/react-client";
import ReviewDecorations from "./ReviewDecorations";
import { useRef } from "react";

interface ReviewProps {
  review: ReviewBlock["review"];
}

export default function Review({ review }: ReviewProps) {
  const t = useTranslations("projectPage.review");
  const title = t("title").split(" ");
  const authorNameRef = useRef<HTMLHeadingElement>(null);
  const isTextReview = review.contentType === "text";

  return (
    <section className="relative z-10 pt-20 lg:pt-[144px] bg-black">
      <ReviewDecorations
        authorNameRef={authorNameRef}
        isTextReview={isTextReview}
      />
      <Container className="flex flex-col md:flex-row md:items-center md:gap-[42px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ x: 50 })}
          className="md:hidden mb-8 font-actay flex flex-col text-[46px] font-bold leading-[110%] bg-[linear-gradient(90deg,#FF8ED2,#73C5FF)] bg-clip-text text-transparent uppercase"
        >
          {title[0]}
          <span className="text-white">{title[1]}</span>
        </motion.h2>
        <ReviewBlockComponent
          review={review}
          ref={authorNameRef}
          title={title}
        />
      </Container>
    </section>
  );
}
