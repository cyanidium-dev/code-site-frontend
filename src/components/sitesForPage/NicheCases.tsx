import Link from "next/link";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NicheCases as NicheCasesData } from "@/types/niche";

interface NicheCasesProps {
  data: NicheCasesData;
}

function hasRealCases(caseIds: string[]): boolean {
  if (!caseIds.length) return false;
  return !caseIds.some((id) => id.startsWith("PLACEHOLDER-"));
}

export default function NicheCases({ data }: NicheCasesProps) {
  const showReal = hasRealCases(data.caseIds);

  return (
    <section id="cases" className="py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="blue"
          className="max-w-[900px] mb-6 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        <p className="max-w-[760px] mb-12 lg:mb-16 text-[15px] lg:text-[17px] leading-[150%] text-white/75">
          {data.subtitle}
        </p>

        {showReal ? (
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
        ) : (
          <div className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-white/[0.03] text-center">
            <p className="text-[16px] lg:text-[18px] font-actay font-bold uppercase mb-3">
              Готуємо детальні кейси для цієї ніші
            </p>
            <p className="max-w-[560px] mx-auto text-[14px] lg:text-[16px] text-white/70 leading-[150%]">
              Слідкуйте за оновленнями — додамо реальні цифри і скриншоти
              інтерфейсів. А поки що можемо показати загальне портфоліо або
              надіслати приклади у листуванні.
            </p>
            <Link
              href="/portfolio"
              className="mt-6 inline-flex items-center justify-center h-[48px] px-8 rounded-full border border-white/40 text-white font-actay font-bold text-[14px] uppercase transition hover:bg-white/5"
            >
              Подивитися все портфоліо
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
