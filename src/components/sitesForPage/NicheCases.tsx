import Link from "next/link";
import Container from "@/components/shared/container/Container";
import NicheSectionHeading from "./NicheSectionHeading";
import type { NicheCases as NicheCasesData } from "@/types/niche";

interface NicheCasesProps {
  data: NicheCasesData;
}

function hasRealCases(caseIds: string[]): boolean {
  if (!caseIds.length) return false;
  return !caseIds.some((id) => id.startsWith("PLACEHOLDER-"));
}

export default function NicheCases({ data }: NicheCasesProps) {
  if (!hasRealCases(data.caseIds)) return null;

  return (
    <section id="cases" className="py-[56px] sm:py-[80px] lg:py-[120px]">
      <Container>
        <NicheSectionHeading variant="blue" className="max-w-[900px] mb-6">
          {data.h2}
        </NicheSectionHeading>
        <p className="max-w-[760px] mb-8 lg:mb-16 text-[15px] lg:text-[17px] leading-[150%] text-white/75">
          {data.subtitle}
        </p>

        <div className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-white/[0.03] text-center">
          <p className="text-[15px] lg:text-[17px] text-white/75">
            Кейси цієї ніші доступні у портфоліо.
          </p>
          <Link
            href={data.ctaUrl}
            className="mt-6 inline-flex items-center justify-center h-[48px] px-8 rounded-full bg-main-light text-white font-actay font-bold text-[14px] uppercase transition hover:opacity-90"
          >
            {data.ctaText}
          </Link>
        </div>
      </Container>
    </section>
  );
}
