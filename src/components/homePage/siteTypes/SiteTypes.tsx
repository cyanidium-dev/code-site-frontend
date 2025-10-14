import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import SiteTypesList from "./SiteTypesList";

export default function SiteTypes() {
  const t = useTranslations("homePage.siteTypes");

  return (
    <section className="pt-[289px] xl:pt-[285px]">
      <Container>
        <SectionTitle className="lg:max-w-[523px] lg:ml-[115px] mb-[432px] lg:mb-[95px] text-[64px] lg:text-[111px] font-bold leading-[108%] text-center lg:text-left">
          {t("title")}
        </SectionTitle>
        <SiteTypesList />
      </Container>
    </section>
  );
}
