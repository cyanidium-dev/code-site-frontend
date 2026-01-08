import Container from "@/components/shared/container/Container";
import FaqList from "@/components/shared/faqList/FaqList";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("homePage.faq");

  return (
    <section>
        <SectionTitle
          variant="pink"
          className="mb-8 lg:mb-10 text-[24px] lg:text-[32px] font-bold leading-none"
        >
          {t("title")}
        </SectionTitle>
        <FaqList />
    </section>
  );
}
