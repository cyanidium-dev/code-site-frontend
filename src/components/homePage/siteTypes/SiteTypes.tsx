import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import SiteTypesList from "./SiteTypesList";

export default function SiteTypes() {
  const t = useTranslations("homePage.siteTypes");

  return (
    <section className="relative z-10 pt-[289px] xl:pt-[285px]">
      <div className="absolute -z-50 -top-3 left-0 inset-0 bg-black" />
      <div
        className="hidden lg:block absolute -z-40 -top-3 left-0 w-full h-[1024px] lg:h-[755px] opacity-30"
        style={{
          backgroundImage: "url(/images/homePage/cta/texture.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "left top",
        }}
      />
      <Container>
        <SectionTitle className="lg:max-w-[523px] lg:ml-[115px] mb-[432px] lg:mb-[95px] text-[64px] lg:text-[111px] font-bold leading-[108%] text-center lg:text-left">
          {t("title")}
        </SectionTitle>
        <SiteTypesList />
      </Container>
    </section>
  );
}
