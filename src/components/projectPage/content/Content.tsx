import { Project, ProjectBlock } from "@/types/project";
import Review from "../review/Review";
import TextBlock from "../textBlock/TextBlock";
import ImageBlock from "../imageBlock/ImageBlock";

interface ContentProps {
  project: Project;
}

function renderBlock(block: ProjectBlock, index: number) {
  if (block.type === "textBlock") {
    return <TextBlock key={index} block={block} />;
  }

  if (block.type === "imageBlock") {
    return <ImageBlock key={index} block={block} />;
  }

  return null;
}

export default function Content({ project }: ContentProps) {
  const { blocks } = project;

  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-15 py-20">
      {blocks.map((block, index) => renderBlock(block, index))}
      {blocks.map(
        block =>
          block.type === "reviewBlock" && (
            <Review key={block.review.id} review={block.review} />
          )
      )}
    </section>
  );
}
