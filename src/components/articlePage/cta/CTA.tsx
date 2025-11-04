import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import CallBackApplication from "./CallBackApplication";

export default function CTA() {
  const t = useTranslations("articlePage.cta");

  return (
    <section>
      <Container className="pt-[153px] lg:pt-[310px] pb-[428px] lg:pb-[294px]">
        <SectionTitle
          variant="pink"
          className="max-w-[376px] mb-8 text-[44px] lg:text-[64px] font-bold leading-none"
        >
          {t("title")}
        </SectionTitle>
        <CallBackApplication />
      </Container>
    </section>
  );
}
