import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import ReasonsList from "./ReasonsList";
import AnimatedGraph from "./AnimatedGraph";
import WhyUsDecorations from "./WhyUsDecorations";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";
import Image from "next/image";

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
      <div
        className="absolute z-20 bottom-[-35px] lg:bottom-[-115px] right-[-78px] lg:right-[-82px] w-[164px] lg:w-[251px] h-[164px] lg:h-[251px] rounded-full"
        style={{
          background: `
            radial-gradient(89.1% 89.1% at 40.3% 3.43%, #001EFF 0%, #B8C6FF 18.19%, #74B5FF 37.1%, #046AF8 58.61%, #B8DAFF 80.46%, #0451F8 100%),
            conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 58.85deg, #FFFFFF 109.04deg, #000000 147.12deg, #FFFFFF 193.85deg, #000000 245.77deg, #FFFFFF 295.96deg, #000000 337.5deg, #FFFFFF 360deg),
            conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 43.27deg, #FFFFFF 86.54deg, #000000 129.81deg, #FFFFFF 174.81deg, #000000 212.88deg, #FFFFFF 256.15deg, #000000 297.69deg, #FFFFFF 337.5deg, #FFFFFF 360deg)
          `,
        }}
      >
        <Image
          src="/images/homePage/whyUs/compact-disk.svg"
          alt="compact disk"
          width="164"
          height="164"
          className="w-full h-full mix-blend-screen"
        />
      </div>
      <div className="absolute z-10 bottom-[-32px] lg:bottom-[-249px] right-[-91px] lg:right-[-242px] w-[190px] lg:w-[469px] h-[207px] lg:h-[512px] rounded-full bg-pink-bright supports-[backdrop-filter]:blur-[66px] lg:supports-[backdrop-filter]:blur-[164px] will-change-transform" />
    </section>
  );
}
