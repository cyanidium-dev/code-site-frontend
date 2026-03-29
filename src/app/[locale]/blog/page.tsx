import BlogList from "@/components/blogPage/blogList/BlogList";
import Hero from "@/components/blogPage/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { allBlogsQuery } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { Suspense } from "react";
import type { Locale } from "next-intl";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { buildPagePathname } from "@/utils/getDefaultMetadata";
import { mapBlogPostToListItem } from "@/lib/blog/mapBlogPostToListItem";
import type { BlogLocaleCode } from "@/types/blogPost";
import type { BlogPostListRow } from "@/lib/blog/mapBlogPostToListItem";

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
}

function asBlogLocale(locale: string): BlogLocaleCode {
  if (locale === "ru" || locale === "uk" || locale === "en") return locale;
  return "ru";
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const loc = asBlogLocale(locale);

  const rawList = await fetchSanityData(allBlogsQuery, {});
  const blogList = Array.isArray(rawList)
    ? rawList.map((row: BlogPostListRow) =>
        mapBlogPostToListItem(row, loc)
      )
    : [];

  return (
    <>
      <JsonLd pathname={buildPagePathname(locale, "blog")} />
      <Hero />
      <Suspense fallback={<Loader />}>
        <BlogList blogList={blogList} />
      </Suspense>
    </>
  );
}
