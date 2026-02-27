import type { Metadata } from "next";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singleProjectQuery } from "@/lib/queries";
import type { Project } from "@/types/project";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/projectPage/hero/Hero";
import Content from "@/components/projectPage/content/Content";
import CTA from "@/components/projectPage/cta/CTA";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { getDefaultMetadata, getCanonicalUrl, getAlternateLanguages, buildPagePathname } from "@/utils/getDefaultMetadata";

interface ProjectPageProps {
  params: Promise<{ project: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project, locale } = await params;

  const currentProject: Project | null = await fetchSanityData(
    singleProjectQuery,
    {
      slug: project,
      lang: locale,
    }
  );

  // If project not found, return default metadata with canonical for current path
  if (!currentProject) {
    const defaultMetadata = await getDefaultMetadata(locale);
    const pathname = buildPagePathname(locale, "portfolio", project);
    const canonicalUrl = getCanonicalUrl(pathname);
    const languages = getAlternateLanguages(pathname);
    return {
      ...defaultMetadata,
      alternates: { canonical: canonicalUrl, languages },
      openGraph: {
        ...defaultMetadata.openGraph,
        url: canonicalUrl,
        type: "website",
      },
      twitter: {
        card: "summary_large_image" as const,
        title: defaultMetadata.title ?? undefined,
        description: defaultMetadata.description ?? undefined,
      },
    };
  }

  const { name, description, mainImageDesktop, seo } = currentProject;

  // отримуємо рядок keywords із перекладу
  const keywordsString = seo?.keywords || "";

  // формуємо масив, обрізаючи пробіли навколо кожного слова
  const keywordsArray = keywordsString
    .split(",")
    .map((kw: string) => kw.trim())
    .filter(Boolean);

  const pathname = buildPagePathname(locale, "portfolio", project);
  const canonicalUrl = getCanonicalUrl(pathname);
  const languages = getAlternateLanguages(pathname);
  const defaultMeta = await getDefaultMetadata(locale);

  const title = seo?.title || name || defaultMeta.title;
  const desc =
    seo?.subtitle ||
    description ||
    defaultMeta.description;

  return {
    title,
    description: desc,
    keywords: keywordsArray,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: title ?? undefined,
      description: desc ?? undefined,
      images: [
        {
          url: mainImageDesktop?.url || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Code-site.art",
        },
      ],
      locale: locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Code-site.art",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? undefined,
      description: desc ?? undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project, locale } = await params;

  const currentProject = await fetchSanityData(singleProjectQuery, {
    slug: project,
    lang: locale,
  });

  if (!currentProject) return null;

  return (
    <>
      <JsonLd pathname={buildPagePathname(locale, "portfolio", project)} />
      <Suspense fallback={<Loader />}>
        <Hero
          name={currentProject.name}
          shortDescription={currentProject.shortDescription}
          clientName={currentProject.clientName}
          websiteUrl={currentProject.websiteUrl}
        />
        <Content project={currentProject} />
      </Suspense>
      <CTA />
    </>
  );
}
