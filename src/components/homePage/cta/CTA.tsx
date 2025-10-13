import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ClientApplication from "@/components/shared/clientApplication/ClientApplication";

export default function CTA() {
  const t = useTranslations("homePage.cta");

  return (
    <section className="relative pt-[146px] lg:pt-[435px] pb-[77px] lg:pb-[143px] mb-[50px] lg:mb-[100px]">
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
      <div className="absolute -z-30 bottom-[-130px] lg:bottom-[-340px] left-[calc(-21.4%)] lg:left-[-12.3%] w-[146%] lg:w-[132.5%] h-[337px] lg:h-[668px] rounded-full bg-black supports-[backdrop-filter]:blur-[73px]" />
      <Container className="relative lg:flex justify-between">
        <div className="hidden lg:block absolute -z-[15] top-[-136px] right-[-196px] w-[390px] h-auto aspect-[390/377]">
          <Image
            src="/images/homePage/cta/heart-blue.png"
            alt="heart"
            width={390}
            height={377}
            className="w-[390px] h-auto"
          />
        </div>
        <SectionTitle
          variant="pink"
          className="lg:hidden max-w-[386px] mb-[603px] text-[28px] font-bold leading-[108%]"
        >
          {t("title")}
        </SectionTitle>

        <div
          className="absolute left-[calc(50%-233px)] lg:left-[calc(50%-395px)] xl:left-[calc(50%-465px)] top-[203px] lg:top-[-200px] 
        xl:top-[-250px] w-[467px] lg:w-[671px] xl:w-[721px] aspect-[721/820]"
        >
          <Image
            src="/images/homePage/cta/phone.png"
            alt="phone"
            width={721}
            height={820}
            className="w-[467px] lg:w-[671px] xl:w-[721px] h-auto"
          />
          <div className="hidden lg:block absolute -z-10 top-[-66px] left-[55px] w-[291px] h-[301px]">
            {" "}
            <Image
              src="/images/homePage/cta/drops.svg"
              alt="drops"
              width="291"
              height="301"
              className="w-[291px] h-auto"
            />
          </div>

          <div className="absolute -z-20 left-[calc(50%-126px)] lg:left-[-114px] top-[-22px] lg:top-[204px] w-[613px] lg:w-[1300px] h-auto aspect-[2711/347]">
            <Image
              src="/images/homePage/cta/code-site.png"
              alt="code-site.art"
              width={2711}
              height={347}
              className="w-[613px] lg:w-[1300px] h-auto"
            />
          </div>
          <div className="absolute -z-10 top-[-27px] lg:top-0 right-[64px] lg:right-[23px] w-[180px] lg:w-[341px] h-auto aspect-[341/300]">
            <Image
              src="/images/homePage/cta/tag.svg"
              alt="tag"
              width="341"
              height="300"
              className="w-[209px] lg:w-[341px] h-auto"
            />
          </div>
          <div className="lg:hidden absolute -z-20 top-[71px] left-[calc(50%-203px)] w-[390px] h-auto aspect-[781/755]">
            <Image
              src="/images/homePage/cta/heart-pink.png"
              alt="heart"
              width={781}
              height={755}
              className="w-[390px] h-auto"
            />
          </div>
          <div className="absolute -z-40 top-[131px] lg:top-[255px] left-[calc(50%-100px)] lg:left-[284px] w-[196px] lg:w-[282px] h-[273px] lg:h-[393px] rounded-full bg-main supports-[backdrop-filter]:blur-[105px] lg:supports-[backdrop-filter]:blur-[114px]" />
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
          <ClientApplication
            buttonText={t("button")}
            variant="blue"
            buttonClassName="h-[58px] lg:w-[310px] xl:w-[418px] lg:mb-8 text-[13px] lg:text-[16px] font-bold leading-none"
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
