import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import ReasonsList from "./ReasonsList";

export default function WhyUs() {
  const t = useTranslations("homePage.whyUs");

  return (
    <section className="pt-[181px] xl:pt-[187px]">
      <Container>
        <SectionTitle className="max-w-[234px] lg:max-w-[457px] mb-25 lg:mb-[75px] lg:ml-auto lg:text-right">
          {t("title")}
        </SectionTitle>
        <ReasonsList />
      </Container>
    </section>
  );
}
