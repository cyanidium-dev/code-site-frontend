"use client";

import type { PtCtaBlock } from "@/types/blogPost";
import { Link } from "@/i18n/navigation";
import { buildInternalDocumentHref } from "@/lib/blog/internalDocumentHref";
import { twMerge } from "tailwind-merge";

const variantClass: Record<string, string> = {
  pink: "bg-main-light text-white shadow-[0_0_24px_rgba(248,4,152,0.35)] hover:bg-main",
  outline:
    "border-2 border-white/40 bg-transparent text-white hover:border-white/80 hover:bg-white/5",
  white: "bg-white text-black hover:bg-white/90",
  gradient:
    "bg-[linear-gradient(90deg,#0899FC_0%,#FF49B8_116.67%)] text-white hover:opacity-95",
  default: "bg-main-light text-white hover:bg-main",
};

const sizeClass: Record<string, string> = {
  sm: "min-h-10 px-4 text-[12px]",
  md: "min-h-11 px-6 text-[13px]",
  lg: "min-h-12 px-8 text-[14px]",
  default: "min-h-11 px-6 text-[13px]",
};

export default function PtCta({ value }: { value: PtCtaBlock }) {
  const label = value.label?.trim() || "…";
  const v = value.variant ?? "default";
  const s = value.size ?? "default";
  const base =
    "inline-flex w-full max-w-md items-center justify-center rounded-full font-actay font-bold uppercase tracking-wide transition duration-300 sm:w-auto";

  const className = twMerge(
    base,
    variantClass[v] ?? variantClass.default,
    sizeClass[s] ?? sizeClass.default
  );

  const external = value.externalUrl?.trim();
  if (external) {
    return (
      <div className="my-4 flex w-full justify-center sm:justify-start">
        <a
          href={external}
          target={value.openInNewTab ? "_blank" : undefined}
          rel={
            value.openInNewTab ? "noopener noreferrer" : undefined
          }
          className={className}
        >
          {label}
        </a>
      </div>
    );
  }

  const internalPath = buildInternalDocumentHref(value.internalReference);
  if (internalPath) {
    return (
      <div className="my-4 flex w-full justify-center sm:justify-start">
        <Link href={internalPath} className={className}>
          {label}
        </Link>
      </div>
    );
  }

  return null;
}
