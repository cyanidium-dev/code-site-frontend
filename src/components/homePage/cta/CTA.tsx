import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CTA() {
  const t = useTranslations("homePage.cta");

  return (
    <section className="pt-[146px] lg:pt-[435px] pb-[127px] lg:pb-[139px]">
      <Container className="relative lg:flex justify-between">
        <SectionTitle
          variant="pink"
          className="lg:hidden mb-[83px] text-[28px] font-bold leading-[108%]"
        >
          {t("title")}
        </SectionTitle>

        <div className="w-fit mx-auto lg:absolute lg:left-[calc(50%-395px)] xl:left-[calc(50%-465px)] lg:top-[-200px] xl:top-[-250px]">
          <Image
            src="/images/homePage/cta/phone.png"
            alt="phone"
            width={721}
            height={820}
            className="w-[361px] lg:w-[671px] xl:w-[721px] h-auto"
          />
        </div>
        <div className="lg:max-w-[228px] lg:mt-[166px]">
          <h3 className="max-w-[198px] ml-auto lg:ml-0 mb-12 lg:mb-9 font-actay text-[20px] font-bold leading-[108%] text-right lg:text-left">
            {t("subtitle")}
          </h3>
          <p className="hidden lg:block text-[18px] font-light leading-[120%]">
            {t("description")}
          </p>
        </div>
        <div>
          <MainButton
            variant="blue"
            className="h-[58px] lg:w-[310px] xl:w-[418px] lg:mb-8 text-[13px] lg:text-[16px] font-bold leading-none"
          >
            {t("button")}
          </MainButton>
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
