import Container from "@/components/shared/container/Container";
import ArticlesList from "./ArticlesList";
import { Blog } from "@/types/blog";

interface BlogListProps {
  blogList: Blog[];
}

const SECTION_ID = "blog-page-posts-list";

export default function BlogList({ blogList }: BlogListProps) {
  if (!blogList || !blogList?.length) return null;

  console.log(blogList);

  return (
    <section id={SECTION_ID} className="relative z-10">
      <Container className="pt-[50px] lg:pt-0 pb-[413px] lg:pb-[431px]">
        <ArticlesList blogList={blogList} />
      </Container>
    </section>
  );
}
