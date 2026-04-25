import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NicheIntegrations as NicheIntegrationsData } from "@/types/niche";

interface NicheIntegrationsProps {
  data: NicheIntegrationsData;
}

export default function NicheIntegrations({ data }: NicheIntegrationsProps) {
  if (!data.logos.length) return null;

  return (
    <section className="py-[56px] sm:py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="blue"
          className="max-w-[900px] mb-6 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        <p className="max-w-[760px] mb-8 lg:mb-16 text-[15px] lg:text-[17px] leading-[150%] text-white/75">
          {data.description}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {data.logos.map((logo) => (
            <li
              key={logo.name}
              className="flex items-center justify-center h-[80px] px-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
              title={logo.name}
            >
              <span className="font-actay text-[14px] lg:text-[16px] font-bold uppercase tracking-wider text-white/80 text-center">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
