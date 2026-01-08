"use client";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ArticleCard from "@/components/blogPage/blogList/ArticleCard";
import { Blog } from "@/types/blog";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";

interface RecommendedPostsMobileProps {
  posts: Blog[];
  uniqueKey: string;
}

export default function RecommendedPostsMobile({
  posts,
  uniqueKey,
}: RecommendedPostsMobileProps) {
  if (!posts || !posts?.length) return null;

  return (
    <section className="w-full overflow-visible lg:hidden mt-20">
      <div className="w-full overflow-x-auto overflow-y-hidden">
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
          className="inline-flex gap-4 pb-4"
        >
          {posts.map((post) => (
            <ArticleCard
              key={`${uniqueKey}-${post.id}`}
              blog={post}
              className="w-[calc(100vw-48px-30px)] sm:w-[333px] flex-shrink-0"
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
