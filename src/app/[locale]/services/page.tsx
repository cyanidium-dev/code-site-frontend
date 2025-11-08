import { getTranslations } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";

export default async function ServicesPage() {
  const t = await getTranslations("servicesPage");

  return (
    <section className="py-20">
      <Container>
        <PageTitle className="mb-10">{t("title")}</PageTitle>
        <p className="text-[16px] font-light leading-[150%]">
          {t("description")}
        </p>
      </Container>
    </section>
  );
}
