import { getTranslations } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import DesignToggle from "@/components/servicesPage/designToggle/DesignToggle";
import ServicesList from "@/components/servicesPage/servicesList/ServicesList";
import ExtraInfoList from "@/components/servicesPage/extraInfo/ExtraInfoList";
import ComparisonTable from "@/components/servicesPage/comparisonTable/ComparisonTable";
import { Service } from "@/types/service";

export default async function ServicesPage() {
  const t = await getTranslations("servicesPage");
  const servicesList = t.raw("servicesList") as Array<Service>;
  return (
    <section className="py-20">
      <Container>
        <PageTitle className="mb-10">{t("title")}</PageTitle>
        <p className="text-[16px] font-light leading-[150%]">
          {t("description")}
        </p>
        <DesignToggle className="mb-10" />
        <ServicesList className="mb-10" servicesList={servicesList} />
        <ComparisonTable className="mb-10" servicesList={servicesList} />
        <ExtraInfoList />
      </Container>
    </section>
  );
}
