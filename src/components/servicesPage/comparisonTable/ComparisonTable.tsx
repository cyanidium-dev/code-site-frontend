import { getTranslations } from "next-intl/server";
import type { ComparisonTable, Service } from "@/types/service";
import MainButton from "@/components/shared/buttons/MainButton";
import { twMerge } from "tailwind-merge";

interface ComparisonTableProps {
  className?: string;
  servicesList: Service[];
}

export default async function ComparisonTable({
  className,
  servicesList,
}: ComparisonTableProps) {
  const t = await getTranslations("servicesPage");
  const comparisonTable = t.raw("comparisonTable") as ComparisonTable;

  const formatFeatureValue = (
    feature: { value: boolean | number | string; text?: string } | undefined
  ): string => {
    if (!feature) return "—";
    
    if (typeof feature.value === "boolean") {
      return feature.value ? "✓" : "—";
    }
    
    if (typeof feature.value === "number") {
      return feature.value.toString();
    }
    
    return feature.value.toString();
  };

  const formatFeatureText = (
    feature: { value: boolean | number | string; text?: string } | undefined
  ): string => {
    return feature?.text || "";
  };

  return (
    <div className={twMerge(className)}>
      <h2>{comparisonTable.title}</h2>
      <table>
        <thead>
          <tr>
            <th>{comparisonTable.description}</th>
            {servicesList.map(service => (
              <th key={service.title}>{service.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonTable.table.map((rowHeading, rowIndex) => (
            <tr key={rowHeading}>
              <td>{rowHeading}</td>
              {servicesList.map(service => {
                const feature = service.comparisonFeatures[rowIndex.toString()];
                return (
                  <td key={`${service.title}-${rowIndex}`}>
                    <div>
                      <span>{formatFeatureValue(feature)}</span>
                      {feature?.text && (
                        <span className="text-sm opacity-75">
                          {" "}
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
      <MainButton>{comparisonTable.buttonText}</MainButton>
    </div>
  );
}
