import type { Metadata } from "next";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singlePostQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/articlePage/hero/Hero";
import FAQ from "@/components/articlePage/faq/FAQ";
import Content from "@/components/articlePage/content/Content";
import CTA from "@/components/articlePage/cta/CTA";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Blog } from "@/types/blog";
import Script from "next/script";

interface ArticlePageProps {
  params: Promise<{ article: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article, locale } = await params;

  const currentPost: Blog = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  const { name, description, mainImageDesktop, seo } = currentPost;

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article, locale } = await params;

  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  if (!currentArticle) return null;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero article={currentArticle} />
        <Content article={currentArticle} />
      </Suspense>
      <FAQ />
      <CTA />

      {currentArticle?.schemaOrg ? (
        <Script
          id="schema-org"
          type="application/ld+json"
          src={currentArticle?.schemaOrg}
        />
      ) : null}
    </>
  );
}
