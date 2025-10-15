import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import SiteTypesList from "./SiteTypesList";
import SiteTypesDecorations from "./SiteTypesDecorations";

export default function SiteTypes() {
  const t = useTranslations("homePage.siteTypes");

  return (
    <section className="relative z-10 pt-[289px] xl:pt-[285px]">
      <div className="absolute -z-50 -top-6 left-0 inset-0 bg-black" />
      <Container className="relative">
        <SiteTypesDecorations />
        <SectionTitle className="max-w-[325px] md:max-w-[523px] mx-auto md:mr-0 md:ml-[115px] mb-[432px] md:mb-[95px] text-[64px] md:text-[80px] lg:text-[111px] font-bold leading-[108%] text-center md:text-left">
          {t("title")}
        </SectionTitle>
        <SiteTypesList />
      </Container>
    </section>
  );
}
