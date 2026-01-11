import { Project, ProjectBlock } from "@/types/project";
import Review from "../review/Review";
import TextBlock from "../textBlock/TextBlock";
import ImageBlock from "../imageBlock/ImageBlock";

interface ContentProps {
  project: Project;
}

function renderBlock(
  block: ProjectBlock,
  backgroundColor: string,
  textColor: string,
  index: number
) {
  if (block.type === "textBlock") {
    return (
      <TextBlock
        key={index}
        block={block}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  }

  if (block.type === "imageBlock") {
    return (
      <ImageBlock key={index} block={block} backgroundColor={backgroundColor} />
    );
  }

  return null;
}

export default function Content({ project }: ContentProps) {
  const { blocks, backgroundColor, textColor } = project;

  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {blocks.map((block, index) =>
        renderBlock(block, backgroundColor, textColor, index)
      )}
      {blocks.map(
        block =>
          block.type === "reviewBlock" && (
            <Review key={block.review.id} review={block.review} />
          )
      )}
    </div>
  );
}
