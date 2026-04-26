import Image from "next/image";
import type { NicheHero as NicheHeroData } from "@/types/niche";

interface NicheHeroProps {
  data: NicheHeroData;
}

export default function NicheHero({ data }: NicheHeroProps) {
  const h1Lines = data.h1Lines?.length ? data.h1Lines : [data.h1];
  const features = data.featuresDetailed?.length
    ? data.featuresDetailed
    : data.facts.map((fact) => ({ label: fact, sub: "" }));
  const stats = data.stats ?? [];
  const tickerItems = data.tickerItems ?? [];
  const floatingTags = data.floatingTags ?? [];
  const accentLabelLines = data.h1Accent?.label
    ? (data.h1Accent.label.includes("\n")
        ? data.h1Accent.label
        : data.h1Accent.label.replace(" на ", "\nна ")
      ).split("\n")
    : [];

  return (
    <section className="relative overflow-hidden pt-[120px] sm:pt-[140px] lg:pt-[170px] pb-[36px] sm:pb-[56px] lg:pb-[80px]">
      <div className="niche-hero-bg" />
      <div className="niche-hero-grain" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-[18px] sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] items-center gap-7 lg:gap-12">
          <div className="order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/75 mb-5 sm:mb-7">
              <span className="size-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
              {data.eyebrow}
            </p>

            <h1 className="font-['Manrope'] text-white font-bold leading-[0.96] tracking-[-0.035em] text-[40px] sm:text-[52px] lg:text-[68px] mb-5 sm:mb-7">
              {h1Lines.map((line, idx) => (
                <span key={`${line}-${idx}`} className="block">
                  {idx === h1Lines.length - 1 ? (
                    <em className="font-normal italic text-transparent bg-clip-text bg-[linear-gradient(180deg,oklch(0.7_0.14_295)_0%,oklch(0.55_0.18_295)_100%)]">
                      {line}
                    </em>
                  ) : (
                    line
                  )}
                </span>
              ))}
              {data.h1Accent ? (
                <span className="mt-1 flex items-end gap-3">
                  <span className="leading-[0.85] text-[1.34em] font-extrabold text-transparent bg-clip-text bg-[linear-gradient(180deg,oklch(0.7_0.14_295)_0%,oklch(0.55_0.18_295)_100%)]">
                    {data.h1Accent.value}
                  </span>
                  <span className="pb-2 text-[0.32em] leading-[1.15] tracking-normal font-medium text-white/75">
                    {accentLabelLines.map((line, index) => (
                      <span key={`${line}-${index}`} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              ) : null}
            </h1>

            <p className="text-white/80 text-[14px] sm:text-[16px] leading-[1.6] mb-6 sm:mb-8">
              {data.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6 sm:mb-8">
              {features.map((feature) => (
                <div
                  key={`${feature.label}-${feature.sub}`}
                  className="flex items-center gap-3"
                >
                  <span className="flex size-[24px] shrink-0 items-center justify-center rounded-full border border-fuchsia-300/35 bg-fuchsia-300/15 text-fuchsia-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12l5 5L20 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-tight">
                    <span className="block text-white text-[12px] sm:text-[13px] font-semibold">
                      {feature.label}
                    </span>
                    {feature.sub ? (
                      <span className="block text-white/50 text-[10px] sm:text-[11px] mt-0.5">
                        {feature.sub}
                      </span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
              <a
                href={data.ctaPrimary.url}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-[13px] sm:text-[14px] font-semibold transition hover:-translate-y-0.5"
              >
                <span>{data.ctaPrimary.text}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={data.ctaSecondary.url}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-[13px] sm:text-[14px] text-white font-medium transition hover:bg-white/5"
              >
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-fuchsia-300/15 text-[8px] text-fuchsia-200">
                  ▶
                </span>
                <span>{data.ctaSecondary.text}</span>
              </a>
            </div>

            {stats.length ? (
              <div className="grid grid-cols-3 gap-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5">
                {stats.map((stat, idx) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className={`px-2 sm:px-4 ${idx !== stats.length - 1 ? "border-r border-white/10" : ""}`}
                  >
                    <p className="text-white font-['Manrope'] font-bold text-[22px] sm:text-[28px] leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.08em] text-white/50 leading-[1.3]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="order-1 lg:order-2 relative h-[320px] sm:h-[460px] lg:h-[640px]">
            <div className="absolute inset-[-10%] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,oklch(0.55_0.18_295_/_0.18),transparent_70%)] blur-3xl" />
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_70%)] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={
                  data.imagePath || "/images/sitesForPage/medicine/efedra.png"
                }
                alt={data.imageAlt || data.h1}
                width={2573}
                height={1715}
                sizes="(min-width: 1024px) 960px, 100vw"
                quality={100}
                unoptimized
                className="w-[130%] max-w-[130%] h-auto object-contain drop-shadow-[0_50px_60px_rgba(0,0,0,0.55)]"
                priority
              />
            </div>

            {floatingTags[0] ? (
              <div className="hidden sm:inline-flex absolute top-[8%] left-[-2%] niche-hero-tag niche-hero-tag-delay-0">
                <span className="niche-hero-tag-dot" />
                <span>{floatingTags[0].label}</span>
                {floatingTags[0].value ? (
                  <span className="niche-hero-tag-mini">
                    {floatingTags[0].value}
                  </span>
                ) : null}
              </div>
            ) : null}
            {floatingTags[1] ? (
              <div className="hidden lg:inline-flex absolute top-[4%] right-[8%] niche-hero-tag niche-hero-tag-delay-2">
                <span>{floatingTags[1].label}</span>
                {floatingTags[1].value ? (
                  <span className="niche-hero-tag-mini">
                    {floatingTags[1].value}
                  </span>
                ) : null}
              </div>
            ) : null}
            {floatingTags[2] ? (
              <div className="hidden sm:inline-flex absolute bottom-[18%] right-[-2%] niche-hero-tag niche-hero-tag-delay-4">
                <span>{floatingTags[2].label}</span>
                {floatingTags[2].value ? (
                  <span className="niche-hero-tag-mini niche-hero-tag-mini-good">
                    {floatingTags[2].value}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {tickerItems.length ? (
        <div className="relative z-[2] mt-6 sm:mt-10 border-y border-white/10 py-3 sm:py-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex whitespace-nowrap animate-hero-marquee">
            {[0, 1].map((repeatIndex) => (
              <div
                key={repeatIndex}
                className="flex items-center pr-8 sm:pr-10 gap-4 sm:gap-8 text-white/80 font-['Manrope'] font-semibold text-[14px] sm:text-[24px] tracking-[-0.02em]"
              >
                {tickerItems.map((item, itemIndex) => (
                  <span
                    key={`${item}-${itemIndex}`}
                    className="inline-flex items-center gap-4 sm:gap-8"
                  >
                    <span>{item}</span>
                    <span className="text-fuchsia-300">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
