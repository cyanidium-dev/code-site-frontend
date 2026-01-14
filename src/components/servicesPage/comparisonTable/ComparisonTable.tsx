import { getTranslations } from "next-intl/server";
import type { ComparisonTable, Service } from "@/types/service";
import { twMerge } from "tailwind-merge";
import Container from "@/components/shared/container/Container";
import TickIcon from "@/components/shared/icons/TickIcon";
import FalseIcon from "@/components/shared/icons/FalseIcon";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { fadeInAnimation } from "@/utils/animationVariants";
import * as motion from "motion/react-client";
import ComparisonTableDecorations from "./ComparisonTableDecorations";
import ClientApplicationWrapper from "@/components/shared/clientApplication/ClientApplicationWrapper";

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
    <section className={twMerge(className, "relative")}>
      <ComparisonTableDecorations />
      <Container>
        <div className="relative -mx-4 md:-mx-6 lg:-mx-8 mb-10 lg:mb-0">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thin-mobile scrollbar-thumb-white/20 scrollbar-track-transparent scrollbar-thumb-rounded-full">
            <div className="relative pr-4 md:pr-6 lg:pr-8">
              <table className="min-w-full">
                <thead>
                  <motion.tr
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInAnimation({ x: 20, delay: 0.2 })}
                    className="border-b border-white/10"
                  >
                    <th className="text-left px-4 py-3 sticky left-0 z-10 bg-black md:bg-transparent w-[160px] min-w-[160px] lg:w-[270px] lg:min-w-[270px] lg:max-w-[270px] after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-px after:bg-white/10 after:z-20 shadow-[2px_0_4px_rgba(0,0,0,0.3)]">
                      <p className="font-actay text-[16px] lg:text-[22px] leading-[125%] uppercase font-bold">
                        {comparisonTable.title}
                        <span className="block text-[12px] lg:text-[14px] leading-[108%] font-normal font-montserrat whitespace-nowrap">
                          {comparisonTable.description}
                        </span>
                      </p>
                    </th>
                    {servicesList.map(service => (
                      <th
                        key={service.title}
                        className="px-4 py-3 border-r border-white/10 last:border-r-0 w-[152px] min-w-[152px] max-w-[152px]"
                      >
                        <p className="font-actay text-[12px] leading-[125%] uppercase font-bold lg:text-left mb-3">
                          {service.title}
                        </p>
                        <ClientApplicationWrapper
                          source={`comparison-table-header-${service.title}`}
                        >
                          <SecondaryButton className="hidden lg:block w-full h-[39px] text-[12px] leading-[123%] uppercase font-bold">
                            {service.wantIt}
                          </SecondaryButton>
                        </ClientApplicationWrapper>
                      </th>
                    ))}
                  </motion.tr>
                </thead>
                <tbody className="text-[14px] leading-[122%]">
                  {comparisonTable.table.map((rowHeading, rowIndex) => (
                    <motion.tr
                      key={rowHeading}
                      initial="hidden"
                      whileInView="visible"
                      exit="exit"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInAnimation({
                        x: 20,
                        delay: 0.2 + rowIndex * 0.1,
                      })}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <td className="px-4 py-3 min-h-12 sticky left-0 z-10 bg-black md:bg-transparent w-[160px] min-w-[160px] lg:w-[270px] lg:min-w-[270px] lg:max-w-[270px] after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-px after:bg-white/10 after:z-20 shadow-[2px_0_4px_rgba(0,0,0,0.3)]">
                        <p>{rowHeading}</p>
                      </td>
                      {servicesList.map(service => {
                        const feature =
                          service.comparisonFeatures[rowIndex.toString()];
                        return (
                          <td
                            key={`${service.title}-${rowIndex}`}
                            className="px-4 py-3 border-r border-white/10 last:border-r-0 w-[152px] min-w-[152px] max-w-[152px]"
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
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 20, delay: 0.2 })}
        >
          <ClientApplicationWrapper source="comparison-table-mobile">
            <SecondaryButton className="lg:hidden">
              {comparisonTable.buttonText}
            </SecondaryButton>
          </ClientApplicationWrapper>
        </motion.div>
      </Container>
    </section>
  );
}
