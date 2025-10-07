import { useTranslations } from "next-intl";
import FaqItem from "./FaqItem";

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
    <ul className="flex flex-col gap-4 lg:gap-6">
      {faqList.map((faqItem, idx) => (
        <FaqItem key={idx} faqItem={faqItem} idx={idx} />
      ))}
    </ul>
  );
}
