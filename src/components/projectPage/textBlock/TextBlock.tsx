import Container from "@/components/shared/container/Container";
import type { TextBlock } from "@/types/project";
import { fadeInAnimation } from "@/utils/animationVariants";
import { motion } from "motion/react";

interface TextBlockProps {
  block: TextBlock;
  backgroundColor: string;
  textColor: string;
}

export default function TextBlock({
  block,
  backgroundColor,
  textColor,
}: TextBlockProps) {
  const { firstParagraph, secondParagraph } = block;

  return (
    <section
      className="py-10"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20 })}
          className="text-[16px] font-light leading-[150%]"
        >
          {firstParagraph}
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20 })}
          className="text-[16px] font-light leading-[150%]"
        >
          {secondParagraph}
        </motion.p>
      </Container>
    </section>
  );
}
