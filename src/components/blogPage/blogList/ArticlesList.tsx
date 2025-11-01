"use client";

import { Blog } from "@/types/blog";
import ArticleCard from "./ArticleCard";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import Pagination from "@/components/shared/pagination/Pagination";
import { usePostsItemsPerPage } from "@/hooks/usePostItemsPerPage";

interface ArticlesListProps {
  blogList: Blog[];
}

const SECTION_ID = "blog-page-posts-list";

export default function ArticlesList({ blogList }: ArticlesListProps) {
  return (
    <Pagination
      items={blogList}
      scrollTargetId={SECTION_ID}
      useItemsPerPage={usePostsItemsPerPage}
      renderItems={(currentItems) => (
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants({
            staggerChildren: 0.3,
            delayChildren: 0.3,
          })}
          id={SECTION_ID}
          className="flex flex-col gap-5 xl:gap-y-12 sm:flex-row sm:flex-wrap"
        >
          {currentItems.map((post) => (
            <ArticleCard key={post.id} blog={post} />
          ))}
        </motion.ul>
      )}
    />
  );
}
