import BlogPortableTextRenderer from "@/components/blog/PortableTextRenderer";
import { Blog } from "@/types/blog";

interface ContentProps {
  article: Blog;
}

export default function Content({ article }: ContentProps) {
  const { content } = article;

  if (!content) return null;

  return (
    <section className="flex flex-col py-12 lg:py-14">
      <BlogPortableTextRenderer value={content} />
    </section>
  );
}
