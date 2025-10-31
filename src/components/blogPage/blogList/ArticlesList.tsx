import { Blog } from "@/types/blog";
import ArticleCard from "./ArticleCard";

interface ArticlesListProps {
  blogList: Blog[];
}

export default function ArticlesList({ blogList }: ArticlesListProps) {
  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-5 lg:gap-y-12">
      {blogList.map((blog, idx) => (
        <ArticleCard key={idx} blog={blog} />
      ))}
    </ul>
  );
}
