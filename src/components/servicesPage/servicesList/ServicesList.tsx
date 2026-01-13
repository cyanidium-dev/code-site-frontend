import { getTranslations } from "next-intl/server";
import ServiceCard from "./ServiceCard";
import { Service } from "@/types/service";
import { twMerge } from "tailwind-merge";
import Container from "@/components/shared/container/Container";

interface ServicesListProps {
  className?: string;
  servicesList: Service[];
}

export default async function ServicesList({
  className,
  servicesList,
}: ServicesListProps) {
  const t = await getTranslations("servicesPage");
  return (
    <section className={twMerge(className)}>
      <Container>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
