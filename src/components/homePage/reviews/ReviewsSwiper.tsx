"use client";
import { Review } from "@/types/review";
import dynamic from "next/dynamic";
import ReviewCard from "./ReviewCard";
import Loader from "@/components/shared/loader/Loader";

// Lazy load Swiper для зменшення initial bundle size
const SwiperWrapper = dynamic(
  async () => {
    // Dynamic import Swiper та модулів
    const [{ Swiper, SwiperSlide }, { Pagination }] = await Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
    ]);

    // Створюємо wrapper компонент
    return function SwiperWrapper({
      reviewsList,
      variant,
    }: {
      reviewsList: Review[];
      variant: string;
    }) {
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
              <ReviewCard review={review} uniqueKey={`${variant}-${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    };
  },
  {
    ssr: false,
    loading: () => <Loader />, // Placeholder під час завантаження
  }
);

// CSS завантажуємо статично для кращої продуктивності
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ReviewsSwiperProps {
  reviewsList: Review[];
  variant?: string;
}

export default function ReviewsSwiper({
  reviewsList,
  variant = "",
}: ReviewsSwiperProps) {
  return <SwiperWrapper reviewsList={reviewsList} variant={variant} />;
}
