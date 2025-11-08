import { getTranslations } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";

export default async function OfferPage() {
  const t = await getTranslations("offerPage");

  const content = t("content");
  const paragraphs = content.split("\n\n").filter((p) => p.trim());

  return (
    <section className="py-20">
      <Container>
        <PageTitle className="mb-10">{t("title")}</PageTitle>
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
