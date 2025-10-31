import BlogList from "@/components/blogPage/blogList/BlogList";
import Hero from "@/components/blogPage/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { allBlogsQuery } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { Suspense } from "react";

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
      <Hero />
      <Suspense fallback={<Loader />}>
        <BlogList blogList={blogList} />
      </Suspense>
    </>
  );
}
