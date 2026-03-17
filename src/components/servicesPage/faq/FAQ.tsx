import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import FaqList from "@/components/shared/faqList/FaqList";

export default function ServicesFAQ() {
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
    <section className="pb-[120px]">
      <Container>
        <SectionTitle
          variant="pink"
          className="mb-8 lg:mb-10 text-[24px] lg:text-[32px] font-bold leading-none"
        >
          {t("title")}
        </SectionTitle>
        {t("description") && (
          <p className="mb-8 text-[14px] lg:text-[16px] font-light leading-[120%]">
            {t("description")}
          </p>
        )}
        <FaqList items={faqItems} />
      </Container>
    </section>
  );
}

