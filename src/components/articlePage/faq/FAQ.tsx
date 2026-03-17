import FaqList from "@/components/shared/faqList/FaqList";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("servicesPage.faq");
  const tQuestions = useTranslations("servicesPage.faq.questions");

  const faqItems = [
    {
      title: tQuestions("questionOne.title"),
      answer: tQuestions("questionOne.answer"),
    },
    {
      title: tQuestions("questionTwo.title"),
      answer: tQuestions("questionTwo.answer"),
    },
    {
      title: tQuestions("questionThree.title"),
      answer: tQuestions("questionThree.answer"),
    },
    {
      title: tQuestions("questionFour.title"),
      answer: tQuestions("questionFour.answer"),
    },
    {
      title: tQuestions("questionFive.title"),
      answer: tQuestions("questionFive.answer"),
    },
    {
      title: tQuestions("questionSix.title"),
      answer: tQuestions("questionSix.answer"),
    },
    {
      title: tQuestions("questionSeven.title"),
      answer: tQuestions("questionSeven.answer"),
    },
    {
      title: tQuestions("questionEight.title"),
      answer: tQuestions("questionEight.answer"),
    },
    {
      title: tQuestions("questionNine.title"),
      answer: tQuestions("questionNine.answer"),
    },
  ];

  return (
    <section>
      <SectionTitle
        variant="pink"
        className="mb-8 lg:mb-10 text-[24px] lg:text-[32px] font-bold leading-none"
      >
        {t("title")}
      </SectionTitle>
      <FaqList items={faqItems} />
    </section>
  );
}
