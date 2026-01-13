import { getTranslations } from "next-intl/server";
import type { ComparisonTable, Service } from "@/types/service";
import { twMerge } from "tailwind-merge";
import Container from "@/components/shared/container/Container";
import TickIcon from "@/components/shared/icons/TickIcon";
import FalseIcon from "@/components/shared/icons/FalseIcon";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

interface ComparisonTableProps {
  className?: string;
  servicesList: Service[];
}

const formatFeatureValue = (
  feature: { value: boolean | number | string; text?: string } | undefined
): React.ReactNode => {
  if (!feature) return "—";
  if (typeof feature.value === "boolean") {
    return feature.value ? (
      <TickIcon className="text-blue size-6" />
    ) : (
      <FalseIcon className="text-main-light size-6" />
    );
  }
  if (typeof feature.value === "number") {
    return feature.value.toString();
  }
  return feature.value.toString();
};

export default async function ComparisonTable({
  className,
  servicesList,
}: ComparisonTableProps) {
  const t = await getTranslations("servicesPage");
  const comparisonTable = t.raw("comparisonTable") as ComparisonTable;

  const formatFeatureText = (
    feature: { value: boolean | number | string; text?: string } | undefined
  ): string => {
    return feature?.text || "";
  };

  return (
    <section className={twMerge(className)}>
      <Container>
        <table className="w-full mb-10">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-4 py-3 border-r border-white/10 last:border-r-0">
                <p className="font-actay text-[16px] leading-[125%] uppercase font-bold">
                  {comparisonTable.title}
                  <span className="block text-[12px] leading-[108%] font-normal font-montserrat whitespace-nowrap">
                    {comparisonTable.description}
                  </span>
                </p>
              </th>
              {servicesList.map(service => (
                <th
                  key={service.title}
                  className="px-4 py-3 border-r border-white/10 last:border-r-0"
                >
                  <p className="font-actay text-[12px] leading-[125%] uppercase font-bold whitespace-nowrap">
                    {service.title}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[14px] leading-[122%]">
            {comparisonTable.table.map((rowHeading, rowIndex) => (
              <tr
                key={rowHeading}
                className="border-b border-white/10 last:border-b-0"
              >
                <td className="px-4 py-3 min-h-12 border-r border-white/10 last:border-r-0 grow-1">
                  <p>{rowHeading}</p>
                </td>
                {servicesList.map(service => {
                  const feature =
                    service.comparisonFeatures[rowIndex.toString()];
                  return (
                    <td
                      key={`${service.title}-${rowIndex}`}
                      className="px-4 py-3 border-r border-white/10 last:border-r-0"
                    >
                      <div className="flex flex-col items-center gap-2">
                        {formatFeatureValue(feature)}
                        {feature?.text && (
                          <span className="block whitespace-nowrap">
                            {formatFeatureText(feature)}
                          </span>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <SecondaryButton>{comparisonTable.buttonText}</SecondaryButton>
      </Container>
    </section>
  );
}
