import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { blogPostBySlugQuery, limitedBlogsQuery } from "@/lib/queries";
import { resolveBlogLocaleContent } from "@/lib/blog/resolveBlogLocaleContent";
import {
  mapBlogPostToListItem,
  type BlogPostListRow,
} from "@/lib/blog/mapBlogPostToListItem";
import type { BlogPostDocument } from "@/types/blogPost";
import type { BlogLocaleCode } from "@/types/blogPost";
import { slugFromBlogPost } from "@/lib/blog/slugFromBlogPost";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import Loader from "@/components/shared/loader/Loader";
import FAQ from "@/components/articlePage/faq/FAQ";
import CTA from "@/components/articlePage/cta/CTA";
import RecommendedPostsDesktop from "@/components/articlePage/recommendedPosts/RecommendedPostsDesktop";
import RecommendedPostsMobile from "@/components/articlePage/recommendedPosts/RecommendedPostsMobile";
import Container from "@/components/shared/container/Container";
import Hero from "@/components/articlePage/hero/Hero";
import Content from "@/components/articlePage/content/Content";
import type { Blog } from "@/types/blog";
import {
  getCanonicalUrl,
  buildPagePathname,
  getAlternateLanguages,
  BASE_URL,
  getDefaultMetadata,
} from "@/utils/getDefaultMetadata";

function asBlogLocale(locale: string): BlogLocaleCode {
  if (locale === "ru" || locale === "uk" || locale === "en") return locale;
  return "ru";
}

interface BlogPostPageProps {
  params: Promise<{ slug: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const loc = asBlogLocale(locale);

  const post = await fetchSanityData(blogPostBySlugQuery, { slug });
  const defaultMeta = await getDefaultMetadata(locale);

  if (!post) {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
    };
  }

  const resolved = resolveBlogLocaleContent(post as BlogPostDocument, loc);

  const title =
    resolved.seo.metaTitle?.trim() ||
    resolved.title ||
    (typeof defaultMeta.title === "string" ? defaultMeta.title : "Blog");

  const description =
    resolved.seo.metaDescription?.trim() ||
    resolved.excerpt ||
    (typeof defaultMeta.description === "string"
      ? defaultMeta.description
      : "");

  const ogTitle =
    resolved.seo.ogTitle?.trim() ||
    resolved.seo.metaTitle?.trim() ||
    resolved.title ||
    "";

  const ogDescription =
    resolved.seo.ogDescription?.trim() ||
    resolved.seo.metaDescription?.trim() ||
    resolved.excerpt ||
    "";

  const pathname = buildPagePathname(locale, "blog", slug);
  const canonicalUrl = getCanonicalUrl(pathname);
  const languages = getAlternateLanguages(pathname);

  const cover =
    (post as BlogPostDocument).coverImage?.asset?.url ||
    `${BASE_URL}/opengraph-image.jpg`;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
          alt: resolved.title || "Blog",
        },
      ],
      publishedTime: (post as BlogPostDocument).publishedAt ?? undefined,
      locale:
        locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Code-site.art",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const loc = asBlogLocale(locale);

  const post = await fetchSanityData(blogPostBySlugQuery, { slug });
  if (!post) notFound();

  const resolved = resolveBlogLocaleContent(post as BlogPostDocument, loc);

  const rawList = await fetchSanityData(limitedBlogsQuery, { limit: 5 });
  const blogPosts = Array.isArray(rawList)
    ? rawList.map((row: BlogPostListRow) =>
        mapBlogPostToListItem(row, loc)
      )
    : [];

  const doc = post as BlogPostDocument;
  const sanitySlug = slugFromBlogPost(doc.slug);
  const coverUrl = doc.coverImage?.asset?.url ?? "";
  const coverAlt = doc.coverImage?.alt ?? "";

  const article: Blog = {
    id: doc._id,
    slug: sanitySlug || slug,
    name: resolved.title ?? "",
    description: resolved.excerpt ?? "",
    content: resolved.body ?? [],
    mainImageMobile: coverUrl
      ? { url: coverUrl, alt: coverAlt }
      : undefined,
    mainImageDesktop: coverUrl
      ? { url: coverUrl, alt: coverAlt }
      : undefined,
    previewImage: coverUrl
      ? { url: coverUrl, alt: coverAlt }
      : undefined,
  };

  return (
    <>
      <JsonLd pathname={buildPagePathname(locale, "blog", slug)} />
      <Suspense fallback={<Loader />}>
        <Hero article={article} />
        <Container className="lg:flex lg:gap-8">
          <div>
            <Content article={article} />
            <FAQ />
            <RecommendedPostsMobile
              posts={blogPosts}
              uniqueKey={`blog-${slug}-recommended-mobile`}
            />
          </div>
          <div className="hidden w-[333px] shrink-0 lg:block">
            <RecommendedPostsDesktop
              posts={blogPosts}
              uniqueKey={`blog-${slug}-recommended-desktop`}
            />
          </div>
        </Container>
      </Suspense>
      <CTA />
    </>
  );
}
