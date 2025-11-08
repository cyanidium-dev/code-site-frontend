import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";

export default async function NotFound() {
  const t = await getTranslations("notFoundPage");

  return (
    <section className="py-20 min-h-[60vh] flex items-center">
      <Container className="flex flex-col items-center justify-center gap-8">
        <PageTitle className="text-center">{t("title")}</PageTitle>
        <p className="text-[16px] font-light leading-[150%] text-center">
          {t("description")}
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-light text-white font-actay text-[14px] font-bold uppercase rounded-lg hover:bg-blue-light/90 transition duration-300 ease-in-out"
        >
          {t("button")}
        </Link>
      </Container>
    </section>
  );
}

