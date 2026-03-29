"use client";

import type { PtTableBlock } from "@/types/blogPost";

export default function PtTable({ value }: { value: PtTableBlock }) {
  const rows = value.rows ?? [];
  if (!rows.length) return null;

  const headerRow = value.hasHeaderRow ? rows[0] : null;
  const bodyRows = value.hasHeaderRow ? rows.slice(1) : rows;

  return (
    <figure className="my-4 w-full">
      {value.caption ? (
        <figcaption className="mb-3 text-[14px] font-light text-white/70">
          {value.caption}
        </figcaption>
      ) : null}
      <div className="w-full overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[480px] border-collapse text-left text-[14px] font-light leading-[150%]">
          {headerRow ? (
            <thead className="bg-white/5">
              <tr>
                {(headerRow.cells ?? []).map((cell, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="border-b border-white/10 px-4 py-3 font-actay font-semibold text-white"
                  >
                    {cell?.strong ? (
                      <strong className="font-bold">{cell?.text}</strong>
                    ) : (
                      cell?.text
                    )}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {bodyRows.map((row, ri) => (
              <tr key={ri} className="odd:bg-white/[0.02]">
                {(row.cells ?? []).map((cell, ci) => (
                  <td
                    key={ci}
                    className="border-b border-white/5 px-4 py-3 text-white/90"
                  >
                    {cell?.strong ? (
                      <strong className="font-semibold text-white">
                        {cell?.text}
                      </strong>
                    ) : (
                      cell?.text
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
