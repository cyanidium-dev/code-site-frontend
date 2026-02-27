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
import { getDefaultMetadata, getCanonicalUrl, buildPagePathname, getAlternateLanguages, BASE_URL } from "@/utils/getDefaultMetadata";
import { Blog } from "@/types/blog";
import Container from "@/components/shared/container/Container";
import RecommendedPostsDesktop from "@/components/articlePage/recommendedPosts/RecommendedPostsDesktop";
import RecommendedPostsMobile from "@/components/articlePage/recommendedPosts/RecommendedPostsMobile";
import JsonLd from "@/components/shared/jsonLd/JsonLd";

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

  const {
    name,
    description,
    mainImageDesktop,
    seo,
    datePublished,
    updatedAt,
  } = currentPost;

  // отримуємо рядок keywords із перекладу
  const keywordsString = seo?.keywords || "";

  // формуємо масив, обрізаючи пробіли навколо кожного слова
  const keywordsArray = keywordsString
    .split(",")
    .map((kw: string) => kw.trim())
    .filter(Boolean);

  const pathname = buildPagePathname(locale, "blog", article);
  const canonicalUrl = getCanonicalUrl(pathname);
  const languages = getAlternateLanguages(pathname);

  const defaultMeta = await getDefaultMetadata(locale);

  return {
    title: seo?.title || name || defaultMeta.title,
    description:
      seo?.subtitle ||
      description ||
      defaultMeta.description,
    keywords: keywordsArray,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: seo?.title || name,
      description: seo?.subtitle || description,
      images: [
        {
          url: mainImageDesktop?.url || `${BASE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Code-site.art",
        },
      ],
      publishedTime: datePublished ?? undefined,
      modifiedTime: updatedAt ?? undefined,
      locale: locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Code-site.art",
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title || name,
      description: seo?.subtitle || description,
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

  return (
    <>
      <JsonLd pathname={buildPagePathname(locale, "blog", article)} />
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
    </>
  );
}
