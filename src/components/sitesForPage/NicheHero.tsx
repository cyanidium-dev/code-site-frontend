import Container from "@/components/shared/container/Container";
import type { NicheHero as NicheHeroData } from "@/types/niche";

interface NicheHeroProps {
  data: NicheHeroData;
}

export default function NicheHero({ data }: NicheHeroProps) {
  return (
    <section className="pt-[120px] lg:pt-[180px] pb-[80px] lg:pb-[120px]">
      <Container>
        <p className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[12px] lg:text-[14px] uppercase tracking-wider text-white/70">
          {data.eyebrow}
        </p>
        <h1 className="font-actay max-w-[1100px] text-[36px] sm:text-[48px] lg:text-[72px] xl:text-[88px] font-bold leading-[1.05] uppercase text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#B5DAFF_93.04%)]">
          {data.h1}
        </h1>
        <p className="mt-6 lg:mt-8 max-w-[760px] text-[16px] lg:text-[18px] leading-[150%] text-white/80">
          {data.subtitle}
        </p>
        <ul className="mt-8 lg:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 lg:gap-4">
          {data.facts.map((fact) => (
            <li
              key={fact}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[13px] lg:text-[14px] text-white/85"
            >
              ✓ {fact}
            </li>
          ))}
        </ul>
        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={data.ctaPrimary.url}
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-main-light text-white font-actay font-bold text-[14px] uppercase transition hover:opacity-90"
          >
            {data.ctaPrimary.text}
          </a>
          <a
            href={data.ctaSecondary.url}
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-white/40 text-white font-actay font-bold text-[14px] uppercase transition hover:bg-white/5"
          >
            {data.ctaSecondary.text}
          </a>
        </div>
      </Container>
    </section>
  );
}
