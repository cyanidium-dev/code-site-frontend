import FaqItem from "./FaqItem";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";

interface FaqListItem {
  title: string;
  answer: string;
}

interface FaqListProps {
  items: FaqListItem[];
}

export default function FaqList({ items }: FaqListProps) {

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.6 })}
      className="flex flex-col gap-4 lg:gap-6"
    >
      {items.map((faqItem, idx) => (
        <FaqItem key={idx} faqItem={faqItem} idx={idx} />
      ))}
    </motion.ul>
  );
}
