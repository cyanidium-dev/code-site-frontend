import Hero from "@/components/portfolioPage/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { allProjectsQuery } from "@/lib/queries";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { Locale } from "next-intl";
import { Suspense } from "react";
import PortfolioList from "@/components/portfolioPage/projectsList/PortfolioList";

interface PortfolioPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;

  const projectsList = await fetchSanityData(allProjectsQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <PortfolioList projectsList={projectsList} />
      </Suspense>
    </>
  );
}
