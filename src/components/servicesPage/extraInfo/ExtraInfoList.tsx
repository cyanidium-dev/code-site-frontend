import { getTranslations } from "next-intl/server";
import { ExtraInfo } from "@/types/service";
import ExtraInfoCard from "./ExtraInfoCard";
import { twMerge } from "tailwind-merge";

interface ExtraInfoListProps {
  className?: string;
}

export default async function ExtraInfoList({ className }: ExtraInfoListProps) {
  const t = await getTranslations("servicesPage");
  const extraInfo = t.raw("extraInfo") as Array<ExtraInfo>;

  return (
    <ul className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {extraInfo.map(info => (
        <ExtraInfoCard key={info.title} extraInfo={info} />
      ))}
    </ul>
  );
}
