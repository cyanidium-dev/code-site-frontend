import { getTranslations } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";

export default async function LegalPage() {
  const t = await getTranslations("legalPage");

  return (
    <section className="py-20">
      <Container>
        <PageTitle className="mb-10 text-[24px]">{t("title")}</PageTitle>
        <div className="flex flex-col gap-4 text-[16px] font-light leading-[150%]">
          <p>
            <strong>{t("fopName")}</strong>
          </p>
          <p>{t("iban")}</p>
          <p>{t("taxId")}</p>
          <p>{t("bankName")}</p>
          <p>{t("bankMfo")}</p>
          <p>{t("bankEdrpou")}</p>
        </div>
      </Container>
    </section>
  );
}
