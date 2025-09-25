import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("homePage");

  return (
    <section className="pt-[25px] xl:pt-[26px] pb-[76px] xl:pb-[534px]">
      <Container className="md:flex justify-between">
        <PageTitle className="md:max-w-[420px] xl:max-w-[603px] mb-4 md:mb-0 mx-auto md:mx-0 text-[58px] xl:text-[124px] font-bold leading-none text-center md:text-left">
          {t("title")}
        </PageTitle>
        <div className="md:w-[249px]">
          <p className="mb-[321px] md:mb-8 text-[16px] font-light leading-[120%] text-center md:text-left text-purple-light">
            {t("description")}
          </p>
          <MainButton>{t("button")}</MainButton>
        </div>
      </Container>
    </section>
  );
}
