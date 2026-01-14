import { getTranslations } from "next-intl/server";
import { ExtraInfo } from "@/types/service";
import ExtraInfoCard from "./ExtraInfoCard";
import { twMerge } from "tailwind-merge";
import Container from "@/components/shared/container/Container";
import ExtraInfoListClient from "./ExtraInfoListClient";
import ExtraInfoDecorations from "./ExtraInfoDecorations";

interface ExtraInfoListProps {
  className?: string;
}

export default async function ExtraInfoList({ className }: ExtraInfoListProps) {
  const t = await getTranslations("servicesPage");
  const extraInfo = t.raw("extraInfo") as Array<ExtraInfo>;

  return (
    <section className={twMerge(className, "relative")}>
      <ExtraInfoDecorations />
      <Container>
        <ExtraInfoListClient>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {extraInfo.map((info, idx) => (
              <ExtraInfoCard
                key={info.title}
                extraInfo={info}
                delay={idx * 0.1}
                variant={idx % 2 === 0 ? "odd" : "even"}
              />
            ))}
          </ul>
        </ExtraInfoListClient>
      </Container>
    </section>
  );
}
