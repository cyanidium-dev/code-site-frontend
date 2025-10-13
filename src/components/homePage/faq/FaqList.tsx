import { useTranslations } from "next-intl";
import FaqItem from "./FaqItem";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";

export default function FaqList() {
  const t = useTranslations("homePage.faq");

  const faqList = [
    { title: t("questionOne.title"), answer: t("questionOne.answer") },
    { title: t("questionTwo.title"), answer: t("questionTwo.answer") },
    {
      title: t("questionThree.title"),
      answer: t("questionThree.answer"),
    },
    { title: t("questionFour.title"), answer: t("questionFour.answer") },
    { title: t("questionFive.title"), answer: t("questionFive.answer") },
    {
      title: t("questionSix.title"),
      answer: t("questionSix.answer"),
    },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.6 })}
      className="flex flex-col gap-4 lg:gap-6"
    >
      {faqList.map((faqItem, idx) => (
        <FaqItem key={idx} faqItem={faqItem} idx={idx} />
      ))}
    </motion.ul>
  );
}
