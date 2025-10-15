"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Post } from "@/types/post";
// import BlogCard from "./BlogCard";

interface BlogSwiperProps {
  // postsList: Post[];
}

export default function BlogSwiper({ postsList }: BlogSwiperProps) {
  if (!postsList) return null;

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      navigation={true}
      loop={true}
      speed={1000}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className={``}
    >
      {postsList.map((post, idx) => (
        <SwiperSlide key={idx}>
          {/* <BlogCard post={post} idx={idx} /> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
