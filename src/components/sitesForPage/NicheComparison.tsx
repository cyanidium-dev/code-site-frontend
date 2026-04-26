import Link from "next/link";
import type { NicheComparison as NicheComparisonData } from "@/types/niche";

interface NicheComparisonProps {
  data: NicheComparisonData;
}

export default function NicheComparison({ data }: NicheComparisonProps) {
  if (!data.rows.length) return null;

  return (
    <section className="cmp">
      <div className="cmp-bg" />
      <div className="cmp-inner">
        <h2 className="cmp-h2">{data.h2}</h2>

        <div className="cmp-table-wrap">
          <table className="cmp-table">
            <thead>
              <tr>
                {data.columns.map((col, i) => (
                  <th
                    key={col}
                    className={i === data.highlightColumnIndex ? "cmp-th-good" : ""}
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
                      data-label={data.columns[cIdx]}
                      className={
                        cIdx === 0
                          ? "cmp-td-param"
                          : cIdx === data.highlightColumnIndex
                            ? "cmp-td-good"
                            : "cmp-td-bad"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cmp-table-cta">
          <Link
            href={data.ctaPrimary.url}
            className="cmp-btn-primary inline-flex items-center justify-center"
          >
            {data.ctaPrimary.text}
          </Link>
          <Link
            href={data.ctaSecondary.url}
            className="cmp-btn-ghost inline-flex items-center justify-center"
          >
            {data.ctaSecondary.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
