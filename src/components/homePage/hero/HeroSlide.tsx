import ClientApplication from "@/components/shared/clientApplication/ClientApplication";
import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import BenefitsList from "./BenefitsList";

interface HeroSlideProps {
  slide: {
    variant: {
      name: string;
      colorMain: string;
      colorSecondary: string;
      textColor: string;
      colorLogo: string;
      counterColor: string;
      graph: {
        colorOne: string;
        colorTwo: string;
        colorThree: string;
        colorFour: string;
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

  const { variant, title, description, list, subtitle } = slide;
  const { colorMain, textColor, counterColor } = variant;
  return (
    <div
      className="pt-25 lg:pt-[157px] pb-6 lg:pb-0 h-auto"
      style={{ backgroundColor: colorMain }}
    >
      <Container>
        {idx === 0 ? (
          <h1
            className="mb-5 lg:mb-8 max-w-[286px] md:max-w-[340px] lg:max-w-[425px] font-actay text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[107%] uppercase"
            style={{ color: textColor }}
          >
            {title}
          </h1>
        ) : (
          <h2
            className="mb-5 lg:mb-8 max-w-[286px] md:max-w-[340px] lg:max-w-[425px] font-actay text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[107%] uppercase"
            style={{ color: textColor }}
          >
            {title}
          </h2>
        )}
        <p
          className="max-w-[372px] mb-[263px] lg:mb-10 text-[14px] lg:text-[16px] font-light leading-[120%]"
          style={{ color: textColor }}
        >
          {description}
        </p>
        <ClientApplication
          buttonText={t("freeConsultation")}
          variant="gradient"
          buttonClassName="md:max-w-[291px]"
        />
        <BenefitsList
          list={list}
          subtitle={subtitle}
          counterColor={counterColor}
        />
      </Container>
    </div>
  );
}
