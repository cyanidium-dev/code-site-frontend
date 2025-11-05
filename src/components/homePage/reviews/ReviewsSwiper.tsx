"use client";
import { Review } from "@/types/review";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

interface ReviewsSwiperProps {
  reviewsList: Review[];
  variant?: string;
}

export default function ReviewsSwiper({
  reviewsList,
  variant = "",
}: ReviewsSwiperProps) {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      navigation={true}
      loop={true}
      speed={1000}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {reviewsList.map((review, idx) => (
        <SwiperSlide key={`${variant}-${idx}`}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
