import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { notFound } from "next/navigation";

import NicheLanding from "@/components/sitesForPage/NicheLanding";
import { getAllNicheSlugs, loadNicheData } from "@/lib/niche/loader";
import {
  buildPagePathname,
  getAlternateLanguages,
  getCanonicalUrl,
  getDefaultMetadata,
} from "@/utils/getDefaultMetadata";

interface NichePageProps {
  params: Promise<{ slug: string; locale: Locale }>;
}

// Parent layout metadata reads request headers, so this route cannot be fully static.
// Force dynamic rendering to avoid DYNAMIC_SERVER_USAGE 500 in production.
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getAllNicheSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NichePageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const data = await loadNicheData(slug);

  const pathname = buildPagePathname(locale, "sites-for", slug);
  const canonicalUrl = getCanonicalUrl(pathname);
  const languages = getAlternateLanguages(pathname);
  const defaultMeta = await getDefaultMetadata(locale);

  if (!data) {
    return {
      ...defaultMeta,
      alternates: { canonical: canonicalUrl, languages },
    };
  }

  const title = data.meta.title;
  const description = data.meta.description;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl, languages },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: data.meta.ogImage || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale:
        locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Code-site.art",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function NichePage({ params }: NichePageProps) {
  const { slug } = await params;
  const data = await loadNicheData(slug);

  if (!data) notFound();

  return <NicheLanding data={data} />;
}
