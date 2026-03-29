"use client";

import type { QuoteBlockBlock } from "@/types/blogPost";

export default function QuoteBlock({ value }: { value: QuoteBlockBlock }) {
  if (!value.quote?.trim()) return null;

  return (
    <blockquote className="my-4 border-l-4 border-main pl-5 pr-2 py-1">
      <p className="text-[17px] font-light italic leading-[160%] text-white/95">
        {value.quote}
      </p>
      {(value.author || value.role) && (
        <footer className="mt-4 text-[14px] font-normal not-italic text-white/65">
          {value.author ? (
            <span className="font-actay font-semibold text-white/85">
              {value.author}
            </span>
          ) : null}
          {value.author && value.role ? (
            <span className="text-white/50">, </span>
          ) : null}
          {value.role ? <span>{value.role}</span> : null}
        </footer>
      )}
    </blockquote>
  );
}
