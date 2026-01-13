import { getTranslations } from "next-intl/server";
import { Service } from "@/types/service";
import ServicesList from "@/components/servicesPage/servicesList/ServicesList";
import ExtraInfoList from "@/components/servicesPage/extraInfo/ExtraInfoList";
import ComparisonTable from "@/components/servicesPage/comparisonTable/ComparisonTable";
import Hero from "@/components/servicesPage/hero/Hero";

interface ServicesPageProps {
  searchParams: Promise<{ design?: string }>;
}

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const t = await getTranslations("servicesPage");
  const servicesList = t.raw("servicesList") as Array<Service>;
  const params = await searchParams;
  const designType = (params.design === "wow" ? "wow" : "normal") as
    | "normal"
    | "wow";

  return (
    <>
      <Hero designType={designType} />
      <ServicesList servicesList={servicesList} designType={designType} />
      <ComparisonTable
        className="py-[122px] lg:py-[155px]"
        servicesList={servicesList}
      />
      <ExtraInfoList className="pb-[120px]" />
    </>
  );
}
