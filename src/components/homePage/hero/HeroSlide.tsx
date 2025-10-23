"use client";
import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import BenefitsList from "./BenefitsList";
import HeroSlideDecorations from "./HeroSlideDecorations";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";
import ClientApplication from "@/components/shared/clientApplication/ClientApplication";

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
      bottomBlurColor: string;
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
  isActive: boolean;
}

export default function HeroSlide({ slide, idx, isActive }: HeroSlideProps) {
  const t = useTranslations("homePage.hero");
  const slideRef = useRef<HTMLDivElement>(null);

  const { variant, title, description, list, subtitle, mainImage } = slide;
  const { colorMain, textColor, counterColor, marquee, buttonGradient } =
    variant;

  // Простий підхід з transition та природною висотою
  const getAnimationClasses = () => {
    const baseClasses = "pt-25 lg:pt-[157px] overflow-hidden";
    const opacityClass = isActive ? "opacity-100" : "opacity-0";
    const transitionClass = "transition-opacity duration-[3000ms] ease-in-out";

    return `${baseClasses} ${opacityClass} ${transitionClass}`;
  };

  return (
    <div
      ref={slideRef}
      className={getAnimationClasses()}
      style={{
        backgroundColor: colorMain,
        zIndex: isActive ? 10 : 1,
        position: isActive ? "relative" : "absolute",
        top: isActive ? "auto" : 0,
        left: isActive ? "auto" : 0,
        right: isActive ? "auto" : 0,
        bottom: isActive ? "auto" : 0,
      }}
    >
      <Container className="relative">
        <HeroSlideDecorations
          variant={variant}
          mainImage={mainImage}
          idx={idx}
        />
        {idx === 0 ? (
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20 })}
            className="relative z-10 mb-5 lg:mb-8 max-w-[286px] md:max-w-[340px] lg:max-w-[425px] font-actay text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[107%] uppercase"
            style={{ color: textColor }}
          >
            {title}
          </motion.h1>
        ) : (
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 20 })}
            className="relative z-10 mb-5 lg:mb-8 max-w-[286px] md:max-w-[340px] lg:max-w-[425px] font-actay text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[107%] uppercase"
            style={{ color: textColor }}
          >
            {title}
          </motion.h2>
        )}
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.4 })}
          className="relative z-10 max-w-[223px] lg:max-w-[372px] mb-[263px] md:mb-[163px] lg:mb-10 text-[14px] lg:text-[16px] font-light leading-[120%]"
          style={{ color: textColor }}
        >
          {description}
        </motion.p>
        <ClientApplication
          buttonText={t("freeConsultation")}
          variant="gradient"
          buttonClassName={`relative md:max-w-[291px] h-14 ${buttonGradient}`}
          className="relative z-10"
          variants={fadeInAnimation({
            delay: 1.2,
            scale: 0.85,
          })}
        />
        <BenefitsList
          list={list}
          subtitle={subtitle}
          counterColor={counterColor}
        />
      </Container>
      <CodeSiteMarquee
        className={`z-10 mt-6 lg:-mt-1 ${marquee.gradient} rotate-0`}
      />
    </div>
  );
}
