import { Blog } from "@/types/blog";
import { getReadingTime } from "@/lib/blog/getReadingTime";

export const calculateReadingTime = (
  article: Blog,
  wordsPerMinute: number = 200
): number => {
  return getReadingTime(article.content, wordsPerMinute);
};
