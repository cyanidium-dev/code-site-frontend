import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singlePostQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/articlePage/hero/Hero";
import FAQ from "@/components/articlePage/faq/FAQ";
import Content from "@/components/articlePage/content/Content";
import CTA from "@/components/articlePage/cta/CTA";

interface ArticlePageProps {
  params: Promise<{ article: string; locale: Locale }>;
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
    </>
  );
}
