"use client";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import ClientApplication from "@/components/shared/clientApplication/ClientApplication";
import CTAPhone from "./CTAPhone";
import CTAHeartBlue from "./CTAHeartBlue";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export default function CTA() {
  const t = useTranslations("homePage.cta");
  const { isIos } = useIosDevice();

  const subtitleVariants = isIos
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 }, exit: { opacity: 1 } }
    : fadeInAnimation({
        delay: 0.4,
        scale: 0.85,
        x: -20,
        y: 20,
      });

  const clientAppVariants = isIos
    ? {}
    : fadeInAnimation({
        delay: 0.8,
        scale: 0.85,
      });

  return (
    <section className="relative pt-[146px] lg:pt-[435px] pb-[127px] lg:pb-[243px]">
      <div
        className="absolute -z-40 top-0 lg:top-[258px] left-0 w-full h-[1024px] lg:h-[755px] opacity-30"
        style={{
          backgroundImage: "url(/images/homePage/cta/texture.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "left top",
        }}
      />
      <div className="absolute -z-30 top-[-84px] left-[calc(-22.7%)] lg:left-[-3.6%] w-[233%] lg:w-[122%] h-[191px] lg:h-[479px] rounded-full bg-black supports-[backdrop-filter]:blur-[25px]" />
      <div className="absolute -z-30 bottom-[-180px] lg:bottom-[-106px] left-[calc(-21.4%)] lg:left-[-12.3%] w-[146%] lg:w-[132.5%] h-[337px] lg:h-[334px] rounded-t-full bg-black supports-[backdrop-filter]:blur-[73px]" />
      <Container className="relative lg:flex justify-between">
        <CTAHeartBlue />
        <SectionTitle
          variant="pink"
          className="lg:hidden max-w-[386px] mb-[603px] text-[28px] font-bold leading-[108%]"
        >
          {t("title")}
        </SectionTitle>

        <CTAPhone />
        <motion.div
          initial={isIos ? "visible" : "hidden"}
          whileInView={isIos ? undefined : "visible"}
          exit="exit"
          viewport={isIos ? undefined : { once: true, amount: 0.1 }}
          variants={subtitleVariants}
          className="lg:max-w-[228px] lg:mt-[166px]"
        >
          <h3 className="max-w-[198px] ml-auto lg:ml-0 mb-12 lg:mb-9 font-actay text-[20px] font-bold leading-[108%] text-right lg:text-left">
            {t("subtitle")}
          </h3>
          <p className="hidden lg:block text-[18px] font-light leading-[120%]">
            {t("description")}
          </p>
        </motion.div>
        <div>
          <ClientApplication
            buttonText={t("button")}
            variant="blue"
            buttonClassName="h-[58px] lg:w-[310px] xl:w-[418px] lg:mb-8 text-[13px] lg:text-[16px] font-bold leading-none"
            variants={clientAppVariants}
          />
          <SectionTitle
            variant="pink"
            className="hidden lg:block lg:max-w-[326px] xl:max-w-[436px] lg:text-[32px] xl:text-[43px] font-bold leading-[108%]"
          >
            {t("title")}
          </SectionTitle>
        </div>
      </Container>
    </section>
  );
}
