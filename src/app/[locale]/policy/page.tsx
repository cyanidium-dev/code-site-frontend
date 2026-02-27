import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { buildPagePathname } from "@/utils/getDefaultMetadata";

export default async function PrivacyPage() {
  const locale = (await getLocale()) ?? "en";
  const t = await getTranslations("policyPage");

  const content = t("content");
  const paragraphs = content.split("\n\n").filter((p) => p.trim());

  return (
    <section className="py-20">
      <JsonLd pathname={buildPagePathname(locale, "policy")} />
      <Container>
        <PageTitle className="mb-10 text-[22px] lg:text-[48px] xl:text-[64px]">{t("title")}</PageTitle>
        <div className="flex flex-col gap-6 text-[16px] font-light leading-[150%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
