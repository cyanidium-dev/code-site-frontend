import Container from "@/components/shared/container/Container";
import ArticlesList from "./ArticlesList";
import { Blog } from "@/types/blog";
import BlogListDecorations from "./BlogListDecorations";

interface BlogListProps {
  blogList: Blog[];
}

const SECTION_ID = "blog-page-posts-list";

export default function BlogList({ blogList }: BlogListProps) {
  if (!blogList || !blogList?.length) return null;

  return (
    <section id={SECTION_ID} className="relative z-10">
      <Container className="relative pt-[50px] lg:pt-0 pb-[413px] lg:pb-[431px]">
        <BlogListDecorations />
        <ArticlesList blogList={blogList} />
      </Container>
    </section>
  );
}
