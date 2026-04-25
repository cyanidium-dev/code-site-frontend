import type { Metadata } from "next";
import type { Locale } from "next-intl";

import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/navigation";
import { loadAllNiches } from "@/lib/niche/loader";
import {
  buildPagePathname,
  getAlternateLanguages,
  getCanonicalUrl,
  getDefaultMetadata,
} from "@/utils/getDefaultMetadata";

interface SitesForOverviewPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: SitesForOverviewPageProps): Promise<Metadata> {
  const { locale } = await params;
  const pathname = buildPagePathname(locale, "sites-for");
  const canonicalUrl = getCanonicalUrl(pathname);
  const languages = getAlternateLanguages(pathname);
  const defaultMeta = await getDefaultMetadata(locale);

  const title = "Сайти для бізнесу — 6 ніш | Code-site.art";
  const description =
    "Робимо сайти для медицини, ремонту, e-commerce, юриспруденції, нерухомості та B2B. Експертиза в кожній ніші — кейси, інтеграції, готові рішення.";

  return {
    ...defaultMeta,
    title,
    description,
    alternates: { canonical: canonicalUrl, languages },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      locale:
        locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Code-site.art",
    },
  };
}

export default async function SitesForOverviewPage() {
  const niches = await loadAllNiches();

  return (
    <main>
      <section className="pt-[120px] lg:pt-[180px] pb-[60px] lg:pb-[100px]">
        <Container>
          <SectionTitle
            variant="blue"
            className="max-w-[1100px] text-[36px] sm:text-[48px] lg:text-[80px] leading-[1.05]"
          >
            Сайти для бізнесу — 6 ніш, у кожній є кейси
          </SectionTitle>
          <p className="mt-6 lg:mt-8 max-w-[760px] text-[16px] lg:text-[18px] leading-[150%] text-white/80">
            Знаємо специфіку кожної галузі. Приходимо з готовими рішеннями, а не
            вчимося на вашому проєкті.
          </p>
        </Container>
      </section>

      <section className="pb-[80px] lg:pb-[140px]">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {niches.map((niche) => (
              <li key={niche.meta.slug}>
                <Link
                  href={`/sites-for/${niche.meta.slug}`}
                  className="group flex flex-col h-full p-6 lg:p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  <p className="mb-4 text-[12px] lg:text-[13px] uppercase tracking-wider text-white/55">
                    {niche.hero.eyebrow}
                  </p>
                  <h2 className="font-actay text-[20px] lg:text-[26px] font-bold leading-[1.15] uppercase">
                    {niche.hero.h1}
                  </h2>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] lg:text-[14px] font-actay font-bold uppercase tracking-wider text-blue-light group-hover:gap-3 transition-all">
                    Дивитися нішу →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
