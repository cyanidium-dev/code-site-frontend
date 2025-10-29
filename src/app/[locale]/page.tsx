export const revalidate = 60;

import CTA from "@/components/homePage/cta/CTA";
import FAQ from "@/components/homePage/faq/FAQ";
import Founder from "@/components/homePage/founder/Founder";
import Hero from "@/components/homePage/hero/Hero";
import Partners from "@/components/homePage/partners/Partners";
import Reviews from "@/components/homePage/reviews/Reviews";
import SiteTypes from "@/components/homePage/siteTypes/SiteTypes";
import WhyUs from "@/components/homePage/whyUs/WhyUs";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allProjectsQuery, allReviewsQuery } from "@/lib/queries";
import Portfolio from "@/components/homePage/portfolio/Portfolio";

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
      <Portfolio projectsList={projectsList} />
      <Reviews reviewsList={reviewsList} />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}
