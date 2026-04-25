import Image from "next/image";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type {
  BeforeAfterArchitecture,
  BeforeAfterData,
} from "@/types/nicheExtras";
import MockupArt from "./MockupArt";

interface BeforeAfterSectionProps {
  data: BeforeAfterData;
}

export default function BeforeAfterSection({ data }: BeforeAfterSectionProps) {
  return (
    <section className="py-[56px] sm:py-[80px] lg:py-[120px]">
      <Container>
        {data.eyebrow ? (
          <p className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] lg:text-[13px] uppercase tracking-wider text-white/70">
            {data.eyebrow}
          </p>
        ) : null}
        <SectionTitle
          variant="blue"
          className="max-w-[900px] mb-3 lg:mb-4 text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        {data.caption ? (
          <p className="mb-6 text-[12px] lg:text-[14px] uppercase tracking-wider text-white/50">
            {data.caption}
          </p>
        ) : null}
        <p className="max-w-[820px] mb-8 lg:mb-16 text-[15px] lg:text-[17px] leading-[150%] text-white/75">
          {data.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <BeforeAfterColumn variant="before" column={data.before} />
          <BeforeAfterColumn variant="after" column={data.after} />
        </div>

        <p className="mx-auto mt-8 lg:mt-16 max-w-[720px] text-center text-[15px] lg:text-[18px] leading-[150%] text-white/85">
          {data.conclusion}
        </p>

        {data.architecture ? (
          <ArchitectureBlock data={data.architecture} />
        ) : null}
      </Container>
    </section>
  );
}

function BeforeAfterColumn({
  variant,
  column,
}: {
  variant: "before" | "after";
  column: BeforeAfterData["before"];
}) {
  const isBefore = variant === "before";
  const labelClasses = isBefore
    ? "bg-white/[0.06] border border-white/15 text-white/70"
    : "bg-[linear-gradient(125deg,_#0899FC_0%,_#FF49B8_100%)] border border-transparent text-white";
  const cardClasses = isBefore
    ? "border-white/10 bg-white/[0.02]"
    : "border-transparent bg-[linear-gradient(180deg,_rgba(255,73,184,0.10)_0%,_rgba(8,153,252,0.06)_100%)]";

  return (
    <article
      className={`flex flex-col p-5 lg:p-6 rounded-3xl border ${cardClasses} transition hover:bg-white/[0.05]`}
    >
      <div className="flex items-center justify-between mb-5">
        <span
          className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full font-actay text-[12px] lg:text-[13px] font-bold uppercase tracking-wider ${labelClasses}`}
        >
          {column.label}
        </span>
      </div>

      <div className="relative aspect-square w-full mb-6 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
        {column.imagePath ? (
          <Image
            src={column.imagePath}
            alt={column.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : column.mockup ? (
          <MockupArt kind={column.mockup} className="w-full h-full" />
        ) : null}
      </div>

      <ul className="flex flex-col gap-2.5">
        {column.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[14px] lg:text-[15px] leading-[145%] text-white/80"
          >
            <span
              aria-hidden="true"
              className={`mt-0.5 inline-flex items-center justify-center shrink-0 w-5 h-5 rounded-full text-[12px] font-bold ${
                isBefore
                  ? "bg-white/10 text-white/60"
                  : "bg-blue-light/20 text-blue-light"
              }`}
            >
              {isBefore ? "✕" : "✓"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {column.note ? (
        <p className="mt-5 pt-5 border-t border-white/10 text-[12px] lg:text-[13px] italic leading-[145%] text-white/55">
          {column.note}
        </p>
      ) : null}
    </article>
  );
}

function ArchitectureBlock({ data }: { data: BeforeAfterArchitecture }) {
  return (
    <article className="mt-10 lg:mt-24 p-5 sm:p-6 lg:p-10 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,_rgba(8,153,252,0.08)_0%,_rgba(255,73,184,0.06)_100%)]">
      <h3 className="font-actay text-[22px] sm:text-[26px] lg:text-[36px] font-bold leading-[1.15] uppercase text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#B5DAFF_93.04%)]">
        {data.h3}
      </h3>
      <p className="mt-5 max-w-[820px] text-[15px] lg:text-[17px] leading-[150%] text-white/80">
        {data.intro}
      </p>

      <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        <div>
          <p className="mb-4 font-actay text-[13px] lg:text-[14px] font-bold uppercase tracking-wider text-white/55">
            {data.stepsLabel}
          </p>
          <ul className="flex flex-col gap-3">
            {data.steps.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 text-[14px] lg:text-[16px] leading-[150%] text-white/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light"
                />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-actay text-[13px] lg:text-[14px] font-bold uppercase tracking-wider text-white/55">
            {data.outcomesLabel}
          </p>
          <ul className="flex flex-col gap-3">
            {data.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3 text-[14px] lg:text-[16px] leading-[150%] text-white/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-blue-light/20 text-blue-light text-[12px] font-bold"
                >
                  ✓
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
