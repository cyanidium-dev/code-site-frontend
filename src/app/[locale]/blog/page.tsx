import Hero from "@/components/blogPage/hero/Hero";
import { allBlogsQuery } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";

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
    </>
  );
}
