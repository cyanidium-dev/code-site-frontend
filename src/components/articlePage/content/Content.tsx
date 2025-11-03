import Container from "@/components/shared/container/Container";
import PortableTextRenderer from "@/components/shared/portableTextRenderer/PortableTextRenderer";
import { Blog } from "@/types/blog";

interface ContentProps {
  article: Blog;
}

export default function Content({ article }: ContentProps) {
  const { content } = article;

  if (!content) return null;

  return (
    <section>
      <Container className="flex flex-col gap-15 py-20">
        <PortableTextRenderer value={content} />
      </Container>
    </section>
  );
}
