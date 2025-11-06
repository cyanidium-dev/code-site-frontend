export const revalidate = 60;

import Hero from "@/components/homePage/hero/Hero";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allProjectsQuery, allReviewsQuery } from "@/lib/queries";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/shared/loader/Loader";

// Lazy load компоненти, які не критичні для LCP
const Founder = dynamic(() => import("@/components/homePage/founder/Founder"), {
  ssr: true,
});
const WhyUs = dynamic(() => import("@/components/homePage/whyUs/WhyUs"), {
  ssr: true,
});
const SiteTypes = dynamic(() => import("@/components/homePage/siteTypes/SiteTypes"), {
  ssr: true,
});
const Portfolio = dynamic(() => import("@/components/homePage/portfolio/Portfolio"), {
  ssr: true,
});
const Reviews = dynamic(() => import("@/components/homePage/reviews/Reviews"), {
  ssr: true,
});
const Partners = dynamic(() => import("@/components/homePage/partners/Partners"), {
  ssr: true,
});
const FAQ = dynamic(() => import("@/components/homePage/faq/FAQ"), {
  ssr: true,
});
const CTA = dynamic(() => import("@/components/homePage/cta/CTA"), {
  ssr: true,
});

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  const reviewsList = await fetchSanityData(allReviewsQuery, {
    lang: locale,
  });

  const projectsList = await fetchSanityData(allProjectsQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Founder />
      <WhyUs />
      <SiteTypes />
      <Suspense fallback={<Loader />}>
        <Portfolio projectsList={projectsList} />
        <Reviews reviewsList={reviewsList} />
      </Suspense>
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}
