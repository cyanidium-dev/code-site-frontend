import BlogList from "@/components/blogPage/blogList/BlogList";
import Hero from "@/components/blogPage/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { allBlogsQuery } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { Suspense } from "react";
import type { Locale } from "next-intl";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { buildPagePathname } from "@/utils/getDefaultMetadata";

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  const blogList = await fetchSanityData(allBlogsQuery, {
    lang: locale,
  });

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
