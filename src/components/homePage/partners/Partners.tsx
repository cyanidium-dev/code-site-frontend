import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import PartnersMarquee from "@/components/shared/marquee/PartnersMarquee";
import { useTranslations } from "next-intl";
import PartnersDecorations from "./PartnersDecorations";

export default function Partners() {
  const t = useTranslations("homePage.partners");

  return (
    <section className="relative z-10 pt-[155px] lg:pt-[285px]">
      <Container className="relative">
        <PartnersDecorations />
        <SectionTitle
          variant="pink"
          className="mb-[42px] lg:mb-5 mx-auto lg:mx-0 text-center lg:text-left text-[45px]"
        >
          {t("title")}
        </SectionTitle>
      </Container>
      <PartnersMarquee />
    </section>
  );
}
