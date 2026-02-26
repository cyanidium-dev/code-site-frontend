import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { buildPagePathname } from "@/utils/getDefaultMetadata";

export default async function LegalPage() {
  const locale = (await getLocale()) ?? "en";
  const t = await getTranslations("legalPage");

  return (
    <section className="py-20">
      <JsonLd pathname={buildPagePathname(locale, "legal")} />
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
