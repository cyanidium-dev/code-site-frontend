import type { Metadata } from "next";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { limitedBlogsQuery, singlePostQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/articlePage/hero/Hero";
import FAQ from "@/components/articlePage/faq/FAQ";
import Content from "@/components/articlePage/content/Content";
import CTA from "@/components/articlePage/cta/CTA";
import { getDefaultMetadata, getCanonicalUrl } from "@/utils/getDefaultMetadata";
import { Blog } from "@/types/blog";
import { routing } from "@/i18n/routing";
import Script from "next/script";
import Container from "@/components/shared/container/Container";
import RecommendedPostsDesktop from "@/components/articlePage/recommendedPosts/RecommendedPostsDesktop";
import RecommendedPostsMobile from "@/components/articlePage/recommendedPosts/RecommendedPostsMobile";

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

  const blogPosts = await fetchSanityData(limitedBlogsQuery, {
    limit: 5,
    lang: locale,
  });

  if (!currentArticle) return null;

  const { schemaOrg, name, description, mainImageDesktop, author, createdAt, updatedAt } = currentArticle;

  const pathname =
    locale === routing.defaultLocale
      ? `/blog/${article}`
      : `/${locale}/blog/${article}`;
  const articleUrl = getCanonicalUrl(pathname);

  let schemaData: Record<string, unknown> | null = null;

  if (schemaOrg) {
    try {
      const res = await fetch(schemaOrg);
      schemaData = await res.json();
    } catch {
      schemaData = null;
    }
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description: description ?? undefined,
    image: mainImageDesktop?.url ? [mainImageDesktop.url] : undefined,
    url: articleUrl,
    author: {
      "@type": "Person",
      name: author || "code-site.art",
    },
    ...(createdAt && { datePublished: createdAt }),
    ...(updatedAt && { dateModified: updatedAt }),
  };

  const mergedSchema = schemaData
    ? { ...schemaData, ...articleJsonLd }
    : articleJsonLd;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero article={currentArticle} />
        <Container className="lg:flex lg:gap-8">
          <div>
            <Content article={currentArticle} />
            <FAQ />
            <RecommendedPostsMobile
              posts={blogPosts}
              uniqueKey={`blog-${currentArticle.slug}-recommended-posts-mobile`}
            />
          </div>
          <div className="hidden lg:block w-[333px] shrink-0">
            <RecommendedPostsDesktop
              posts={blogPosts}
              uniqueKey={`blog-${currentArticle.slug}-recommended-posts-mobile`}
            />
          </div>
        </Container>
      </Suspense>
      <CTA />

      <Script
        id="schema-org-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mergedSchema),
        }}
      />
    </>
  );
}
