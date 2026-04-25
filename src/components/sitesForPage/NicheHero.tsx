import Container from "@/components/shared/container/Container";
import Image from "next/image";
import type { NicheHero as NicheHeroData } from "@/types/niche";

interface NicheHeroProps {
  data: NicheHeroData;
}

export default function NicheHero({ data }: NicheHeroProps) {
  return (
    <section className="pt-[120px] sm:pt-[140px] lg:pt-[180px] pb-[60px] md:pb-[80px] lg:pb-[120px]">
      <Container>
        <div className="relative isolate grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,620px)_minmax(0,1fr)] gap-8 md:gap-6 lg:gap-10 xl:gap-0 items-center">
          <div className="relative z-10 order-2 md:order-1 max-w-[620px]">
            <p className="inline-block mb-4 lg:mb-6 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/5 border border-white/10 text-[11px] lg:text-[14px] uppercase tracking-wider text-white/70">
              {data.eyebrow}
            </p>
            <h1 className="font-actay text-[24px] sm:text-[26px] md:text-[22px] lg:text-[30px] xl:text-[39px] font-bold leading-[1.1] uppercase text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#B5DAFF_93.04%)]">
              {data.h1}
            </h1>
            <p className="mt-4 lg:mt-6 max-w-[620px] text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px] leading-[150%] text-white/80">
              {data.subtitle}
            </p>
            <ul className="mt-6 lg:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-2 lg:gap-3">
              {data.facts.map((fact) => (
                <li
                  key={fact}
                  className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/5 border border-white/10 text-[12px] lg:text-[14px] text-white/85"
                >
                  ✓ {fact}
                </li>
              ))}
            </ul>
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href={data.ctaPrimary.url}
                className="inline-flex items-center justify-center h-[46px] lg:h-[52px] px-5 sm:px-6 lg:px-8 rounded-full bg-main-light text-white font-actay font-bold text-[12px] sm:text-[13px] lg:text-[14px] uppercase whitespace-nowrap transition hover:opacity-90"
              >
                {data.ctaPrimary.text}
              </a>
              <a
                href={data.ctaSecondary.url}
                className="inline-flex items-center justify-center h-[46px] lg:h-[52px] px-5 sm:px-6 lg:px-8 rounded-full border border-white/40 text-white font-actay font-bold text-[12px] sm:text-[13px] lg:text-[14px] uppercase whitespace-nowrap transition hover:bg-white/5"
              >
                {data.ctaSecondary.text}
              </a>
            </div>
          </div>

          <div className="pointer-events-none relative z-0 order-1 md:order-2 md:-ml-[35%] md:w-[160%] lg:-ml-[40%] lg:w-[175%] xl:-ml-[42%] xl:w-[188%]">
            <div className="absolute inset-0 -z-10 blur-3xl bg-[radial-gradient(circle,_rgba(8,153,252,0.22)_0%,_rgba(255,73,184,0.12)_45%,_transparent_75%)]" />
            <div className="relative overflow-hidden">
              <Image
                src="/images/sitesForPage/medicine/efedra.png"
                alt="Приклад сайту медичної клініки"
                width={1024}
                height={768}
                className="w-full h-auto md:max-w-none"
                priority
              />
              <div className="hidden md:block absolute inset-y-0 left-0 w-[35%] lg:w-[28%] xl:w-[20%] bg-gradient-to-r from-[#121212] via-[#121212]/85 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
