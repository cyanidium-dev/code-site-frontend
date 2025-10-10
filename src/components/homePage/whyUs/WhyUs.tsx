import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import ReasonsList from "./ReasonsList";
import AnimatedGraph from "./AnimatedGraph";
import WhyUsDecorations from "./WhyUsDecorations";
import WhyUsImages from "./WhyUsImages";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";

export default function WhyUs() {
  const t = useTranslations("homePage.whyUs");

  return (
    <section className="relative pt-[181px] xl:pt-[187px]">
      <div className="relative xs:max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] pl-6 sm:px-6 lg:px-20 xl:px-30 mx-auto">
        <WhyUsDecorations />
        <SectionTitle className="max-w-[234px] lg:max-w-[457px] mb-25 lg:mb-[75px] lg:ml-auto lg:text-right">
          {t("title")}
        </SectionTitle>
        <ReasonsList />
      </div>
      <AnimatedGraph className="absolute z-[5] bottom-0 lg:bottom-[-32px] left-[-98px] md:left-[calc(50%+91px)] lg:left-[calc(50%+91px)] w-[973px] lg:w-[936px] h-auto lg:h-[289px] pointer-events-none" />
      <CodeSiteMarquee className="z-[15] mt-[116px] lg:mt-[137px] rotate-[1.464deg]" />
      <WhyUsImages />
    </section>
  );
}
