import Image from "next/image";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type {
  BenefitsBlock,
  BenefitsData,
  BenefitsHighlight,
} from "@/types/nicheExtras";
import MockupArt from "./MockupArt";

interface BenefitsSectionProps {
  data: BenefitsData;
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section className="py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[900px] mb-6 text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        <p className="max-w-[760px] mb-12 lg:mb-16 text-[15px] lg:text-[17px] leading-[150%] text-white/75">
          {data.subtitle}
        </p>

        {data.highlight ? <HighlightCard data={data.highlight} /> : null}

        <div className="flex flex-col gap-12 lg:gap-20">
          {data.blocks.map((block, idx) => (
            <BenefitsRow key={block.title} block={block} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function HighlightCard({ data }: { data: BenefitsHighlight }) {
  return (
    <article className="mb-12 lg:mb-16 p-6 lg:p-10 rounded-3xl border border-transparent bg-[linear-gradient(135deg,_rgba(8,153,252,0.18)_0%,_rgba(255,73,184,0.14)_100%)] grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 items-center">
      <div className="flex flex-col">
        <span className="font-actay text-[56px] sm:text-[72px] lg:text-[96px] font-bold leading-none text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#FFB5E6_93.04%)]">
          {data.metric}
        </span>
        {data.metricLabel ? (
          <span className="mt-2 max-w-[300px] text-[14px] lg:text-[16px] leading-[140%] text-white/85">
            {data.metricLabel}
          </span>
        ) : null}
      </div>
      <ul className="flex flex-col gap-3 lg:border-l lg:border-white/10 lg:pl-12">
        {data.extras.map((extra) => (
          <li
            key={extra}
            className="flex items-start gap-3 text-[15px] lg:text-[17px] leading-[145%] text-white/90"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-blue-light/25 text-blue-light text-[13px] font-bold"
            >
              ✓
            </span>
            <span>{extra}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BenefitsRow({
  block,
  index,
}: {
  block: BenefitsBlock;
  index: number;
}) {
  const imageOnRight = block.imageOnRight ?? index % 2 === 1;

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
        imageOnRight ? "" : "lg:[&>:first-child]:order-2"
      }`}
    >
      <div className="flex flex-col">
        <h3 className="font-actay text-[22px] sm:text-[26px] lg:text-[36px] font-bold leading-[1.15] uppercase text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#FFB5E6_93.04%)]">
          {block.title}
        </h3>
        <ul className="mt-6 lg:mt-8 flex flex-col gap-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[15px] lg:text-[16px] leading-[150%] text-white/85"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-blue-light/20 text-blue-light text-[12px] font-bold"
              >
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_-20px_rgba(8,153,252,0.18)] transition hover:bg-white/[0.05]">
        <div className="relative aspect-[4/3] w-full">
          {block.imagePath ? (
            <Image
              src={block.imagePath}
              alt={block.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : block.mockup ? (
            <MockupArt kind={block.mockup} className="w-full h-full" />
          ) : null}
        </div>
      </div>
    </article>
  );
}
