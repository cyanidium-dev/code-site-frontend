import type { Metadata } from "next";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singleProjectQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/projectPage/hero/Hero";
import Content from "@/components/projectPage/content/Content";
import CTA from "@/components/articlePage/cta/CTA";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import Script from "next/script";
import { Project } from "@/types/project";

interface ProjectPageProps {
  params: Promise<{ project: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project, locale } = await params;

  const currentProject: Project = await fetchSanityData(singleProjectQuery, {
    slug: project,
    lang: locale,
  });

  const { name, description, mainImageDesktop, seo } = currentProject;

  // отримуємо рядок keywords із перекладу
  const keywordsString = seo?.keywords || "";

  // формуємо масив, обрізаючи пробіли навколо кожного слова
  const keywordsArray = keywordsString
    .split(",")
    .map((kw: string) => kw.trim())
    .filter(Boolean);

  return {
    title: seo?.title || name || (await getDefaultMetadata(locale)).title,
    description:
      seo?.subtitle ||
      description ||
      (await getDefaultMetadata(locale)).description,
    keywords: keywordsArray,
    openGraph: {
      images: [
        {
          url: mainImageDesktop?.url || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Code-site.art",
        },
      ],
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

  const { schemaOrg } = currentProject;

  let schemaData = null;

  if (schemaOrg) {
    const res = await fetch(schemaOrg);
    schemaData = await res.json();
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero
          name={currentProject.name}
          shortDescription={currentProject.shortDescription}
          clientName={currentProject.clientName}
          websiteUrl={currentProject.websiteUrl}
        />
        <Content project={currentProject} />
      </Suspense>

      {schemaData && (
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      )}
    </>
  );
}
