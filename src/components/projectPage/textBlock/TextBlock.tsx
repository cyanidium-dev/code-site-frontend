import type { TextBlock } from "@/types/project";

interface TextBlockProps {
  block: TextBlock;
}

export default function TextBlock({ block }: TextBlockProps) {
  const { firstParagraph, secondParagraph } = block;

  return <div>TextBlock</div>;
}
