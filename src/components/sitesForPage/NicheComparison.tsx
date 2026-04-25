import Link from "next/link";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NicheComparison as NicheComparisonData } from "@/types/niche";

interface NicheComparisonProps {
  data: NicheComparisonData;
}

export default function NicheComparison({ data }: NicheComparisonProps) {
  if (!data.rows.length) return null;

  return (
    <section className="py-[56px] sm:py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="blue"
          className="max-w-[1000px] mb-8 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                {data.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`px-4 lg:px-6 py-4 lg:py-5 font-actay text-[13px] lg:text-[15px] font-bold uppercase tracking-wider ${
                      i === data.highlightColumnIndex
                        ? "text-white bg-[linear-gradient(180deg,_rgba(255,73,184,0.30)_0%,_rgba(8,153,252,0.20)_100%)] border-x border-[#FF49B8]/40"
                        : "text-white/70 bg-white/[0.04]"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="border-t border-white/10 last:border-b-0"
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 lg:px-6 py-4 lg:py-5 text-[14px] lg:text-[15px] leading-[145%] ${
                        cIdx === data.highlightColumnIndex
                          ? "text-white font-semibold bg-[linear-gradient(180deg,_rgba(255,73,184,0.10)_0%,_rgba(8,153,252,0.06)_100%)] border-x border-[#FF49B8]/30"
                          : "text-white/75"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href={data.ctaPrimary.url}
            className="inline-flex items-center justify-center h-[48px] px-8 rounded-full bg-main-light text-white font-actay font-bold text-[14px] uppercase transition hover:opacity-90"
          >
            {data.ctaPrimary.text}
          </Link>
          <Link
            href={data.ctaSecondary.url}
            className="inline-flex items-center justify-center h-[48px] px-8 rounded-full border border-white/40 text-white font-actay font-bold text-[14px] uppercase transition hover:bg-white/5"
          >
            {data.ctaSecondary.text}
          </Link>
        </div>
      </Container>
    </section>
  );
}
