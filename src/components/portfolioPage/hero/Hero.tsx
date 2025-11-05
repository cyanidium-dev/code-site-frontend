import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("portfolioPage");

  return (
    <section>
      <Container className="flex flex-col lg:flex-row lg:justify-between gap-4 pt-[136px] lg:pt-[174px] pb-[286px] lg:pb-[112px]">
        <PageTitle
          variant="pink"
          className="max-w-[354px] lg:max-w-[700px] text-[40px] lg:text-[96px] font-bold leading-none"
        >
          {t("title")}
        </PageTitle>
        <p className="max-w-[354px] lg:max-w-[235px] text-[14px] lg:text-[16px] font-light leading-[120%]">
          {t("description")}
        </p>
      </Container>
    </section>
  );
}
