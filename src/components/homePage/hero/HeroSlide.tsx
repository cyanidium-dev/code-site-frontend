import ClientApplication from "@/components/shared/clientApplication/ClientApplication";
import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import BenefitsList from "./BenefitsList";
import HeroSlideDecorations from "./HeroSlideDecorations";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";

interface HeroSlideProps {
  slide: {
    variant: {
      name: string;
      colorMain: string;
      colorSecondary: string;
      textColor: string;
      colorLogo: string;
      counterColor: string;
      buttonGradient: string;
      graph: {
        colorOne: string;
        colorTwo: string;
        colorThree: string;
        colorFour: string;
      };
      drops: {
        colorOne: string;
        colorTwo: string;
      };
      marquee: {
        gradient: string;
      };
    };
    mainImage: string;
    title: string;
    description: string;
    button: string;
    subtitle: string;
    list: { value: string; description: string }[];
  };
  idx: number;
}

export default function HeroSlide({ slide, idx }: HeroSlideProps) {
  const t = useTranslations("homePage.hero");

  const { variant, title, description, list, subtitle, mainImage } = slide;
  const { colorMain, textColor, counterColor, marquee, buttonGradient } =
    variant;
  return (
    <div className="relative pt-25 lg:pt-[157px] h-auto overflow-hidden">
      <div
        className="absolute inset-0 -z-50"
        style={{ backgroundColor: colorMain }}
      />
      <Container className="relative">
        <HeroSlideDecorations
          variant={variant}
          mainImage={mainImage}
          idx={idx}
        />
        {idx === 0 ? (
          <h1
            className="relative z-10 mb-5 lg:mb-8 max-w-[286px] md:max-w-[340px] lg:max-w-[425px] font-actay text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[107%] uppercase"
            style={{ color: textColor }}
          >
            {title}
          </h1>
        ) : (
          <h2
            className="relative z-10 mb-5 lg:mb-8 max-w-[286px] md:max-w-[340px] lg:max-w-[425px] font-actay text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[107%] uppercase"
            style={{ color: textColor }}
          >
            {title}
          </h2>
        )}
        <p
          className="relative z-10 max-w-[223px] lg:max-w-[372px] mb-[263px] md:mb-[163px] lg:mb-10 text-[14px] lg:text-[16px] font-light leading-[120%]"
          style={{ color: textColor }}
        >
          {description}
        </p>
        <ClientApplication
          buttonText={t("freeConsultation")}
          variant="gradient"
          buttonClassName={`relative md:max-w-[291px] h-14 ${buttonGradient}`}
          className="relative z-10"
        />
        <BenefitsList
          list={list}
          subtitle={subtitle}
          counterColor={counterColor}
          textColor={textColor}
        />
      </Container>
      <CodeSiteMarquee
        className={`z-10 mt-6 lg:-mt-1 ${marquee.gradient} rotate-0`}
      />
    </div>
  );
}
