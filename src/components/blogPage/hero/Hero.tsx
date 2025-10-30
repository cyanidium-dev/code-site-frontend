import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("blogPage");

  return (
    <section className="pt-[135px] lg:pt-[149px] pb-[479px] lg:pb-[330px]">
      <Container className="flex flex-col lg:flex-row-reverse gap-[9px] lg:justify-between lg:items-center">
        <PageTitle className="max-w-[195px] lg:max-w-[295px] text-[64px] lg:text-[96px] leading-none">
          {t("title")}
        </PageTitle>
        <p className="max-w-[248px] text-[14px] lg:text-[16px] font-light leading-[120%]">
          {t("description")}
        </p>
      </Container>
    </section>
  );
}
