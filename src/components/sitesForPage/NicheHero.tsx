import Container from "@/components/shared/container/Container";
import type { NicheHero as NicheHeroData } from "@/types/niche";
import MockupArt from "./MockupArt";

interface NicheHeroProps {
  data: NicheHeroData;
}

export default function NicheHero({ data }: NicheHeroProps) {
  return (
    <section className="pt-[120px] lg:pt-[180px] pb-[80px] lg:pb-[120px]">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,620px)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
          <div>
            <p className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[12px] lg:text-[14px] uppercase tracking-wider text-white/70">
              {data.eyebrow}
            </p>
            <h1 className="font-actay max-w-[620px] text-[30px] sm:text-[40px] lg:text-[52px] xl:text-[58px] font-bold leading-[1.08] uppercase text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#B5DAFF_93.04%)]">
              {data.h1}
            </h1>
            <p className="mt-6 max-w-[620px] text-[16px] lg:text-[18px] leading-[150%] text-white/80">
              {data.subtitle}
            </p>
            <ul className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 lg:gap-4">
              {data.facts.map((fact) => (
                <li
                  key={fact}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[13px] lg:text-[14px] text-white/85"
                >
                  ✓ {fact}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl bg-[radial-gradient(circle,_rgba(8,153,252,0.3)_0%,_rgba(255,73,184,0.15)_45%,_transparent_75%)]" />
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
              <MockupArt kind="modern" className="aspect-[16/11]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
