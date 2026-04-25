import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NichePricing as NichePricingData } from "@/types/niche";

interface NichePricingProps {
  data: NichePricingData;
}

export default function NichePricing({ data }: NichePricingProps) {
  return (
    <section className="py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[900px] mb-12 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {data.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col p-6 lg:p-8 rounded-3xl border ${
                tier.highlighted
                  ? "border-transparent bg-[linear-gradient(180deg,_rgba(255,73,184,0.12)_0%,_rgba(8,153,252,0.08)_100%)] lg:scale-[1.03]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-main-light text-white text-[11px] font-bold uppercase tracking-wider">
                  Популярно
                </span>
              ) : null}

              <h3 className="font-actay text-[18px] lg:text-[22px] font-bold leading-[1.15] uppercase">
                {tier.name}
              </h3>
              <div className="mt-4 font-actay text-[28px] lg:text-[36px] font-bold leading-none text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#FFB5E6_93.04%)]">
                {tier.displayPrice}
              </div>
              <div className="mt-2 text-[13px] lg:text-[14px] text-white/60">
                {tier.duration}
              </div>

              {tier.includesPrevious ? (
                <p className="mt-5 text-[13px] lg:text-[14px] font-bold uppercase text-blue-light">
                  {tier.includesPrevious}
                </p>
              ) : null}

              <ul className="mt-5 mb-8 flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[14px] lg:text-[15px] leading-[145%] text-white/80"
                  >
                    <span className="mt-1 text-blue-light" aria-hidden="true">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#lead-magnet"
                className="mt-auto inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-main-light text-white font-actay font-bold text-[13px] uppercase transition hover:opacity-90"
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
