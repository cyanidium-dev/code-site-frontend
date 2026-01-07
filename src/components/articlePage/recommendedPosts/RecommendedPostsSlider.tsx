"use client";
import ArticleCard from "@/components/blogPage/blogList/ArticleCard";
import { Blog } from "@/types/blog";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";

interface RecommendedPostsSliderProps {
  posts: Blog[];
  uniqueKey: string;
}

export default function RecommendedPostsSlider({
  posts,
  uniqueKey,
}: RecommendedPostsSliderProps) {
  return (
    <motion.ul
      key={`${uniqueKey}-recommended-posts-scroll`}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({
        staggerChildren: 0.3,
        delayChildren: 0.3,
      })}
      className="flex gap-4 overflow-x-auto pb-4 -mx-6 lg:-mx-20 xl:-mx-30 px-6 lg:px-20 xl:px-30 scrollbar-hide [&>li]:!w-[calc(100vw-48px-30px)] [&>li]:!sm:w-[calc(100vw-48px-30px)] [&>li]:!lg:w-[calc(100vw-160px-30px)] [&>li]:!xl:w-[calc(100vw-240px-30px)] [&>li]:flex-shrink-0"
      style={{ width: "max-content" }}
    >
      {posts.map((post) => (
        <ArticleCard key={`${uniqueKey}-${post.id}`} blog={post} />
      ))}
    </motion.ul>
  );
}
