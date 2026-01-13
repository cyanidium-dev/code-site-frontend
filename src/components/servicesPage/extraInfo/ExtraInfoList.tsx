import { getTranslations } from "next-intl/server";
import { ExtraInfo } from "@/types/service";
import ExtraInfoCard from "./ExtraInfoCard";
import { twMerge } from "tailwind-merge";
import Container from "@/components/shared/container/Container";

interface ExtraInfoListProps {
  className?: string;
}

export default async function ExtraInfoList({ className }: ExtraInfoListProps) {
  const t = await getTranslations("servicesPage");
  const extraInfo = t.raw("extraInfo") as Array<ExtraInfo>;

  return (
    <section className={twMerge(className)}>
      <Container>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extraInfo.map(info => (
            <ExtraInfoCard key={info.title} extraInfo={info} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
