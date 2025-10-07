import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import PartnersMarquee from "@/components/shared/marquee/PartnersMarquee";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("homePage.partners");

  return (
    <section className="pt-[155px] lg:pt-[285px]">
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[305px] lg:max-w-[624px] mb-[42px] lg:mb-5 mx-auto lg:mx-0 text-center lg:text-left"
        >
          {t("title")}
        </SectionTitle>
      </Container>
      <PartnersMarquee />
    </section>
  );
}
