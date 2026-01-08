import { Blog } from "@/types/blog";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ArticleCard from "@/components/blogPage/blogList/ArticleCard";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";

interface RecommendedPostsDesktopProps {
  posts: Blog[];
  uniqueKey: string;
}

export default function RecommendedPostsDesktop({
  posts,
  uniqueKey,
}: RecommendedPostsDesktopProps) {
  if (!posts || !posts?.length) return null;


  return (
    <section className="pt-20">
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={listVariants({
          staggerChildren: 0.3,
          delayChildren: 0.3,
        })}
        className="flex flex-col gap-6"
      >
        {posts.map((post) => (
          <ArticleCard key={`${uniqueKey}-${post?.slug}`} blog={post} className="w-full md:w-full lg:w-full" />
        ))}
      </motion.ul>
    </section>
  );
}
