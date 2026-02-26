import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Service } from "@/types/service";
import ServicesList from "@/components/servicesPage/servicesList/ServicesList";
import ExtraInfoList from "@/components/servicesPage/extraInfo/ExtraInfoList";
import ComparisonTable from "@/components/servicesPage/comparisonTable/ComparisonTable";
import Hero from "@/components/servicesPage/hero/Hero";
import JsonLd from "@/components/shared/jsonLd/JsonLd";
import { buildPagePathname } from "@/utils/getDefaultMetadata";

export default async function ServicesPage() {
  const locale = (await getLocale()) ?? "en";
  const t = await getTranslations("servicesPage");
  const servicesList = t.raw("servicesList") as Array<Service>;

  return (
    <>
      <JsonLd pathname={buildPagePathname(locale, "services")} />
      <Hero />
      <ServicesList servicesList={servicesList} />
      <ComparisonTable
        className="py-[122px] lg:py-[155px]"
        servicesList={servicesList}
      />
      <ExtraInfoList className="pb-[120px]" />
    </>
  );
}
