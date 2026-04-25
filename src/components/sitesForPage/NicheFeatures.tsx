import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NicheFeatures as NicheFeaturesData } from "@/types/niche";
import NicheIcon from "./NicheIcon";

interface NicheFeaturesProps {
  data: NicheFeaturesData;
}

export default function NicheFeatures({ data }: NicheFeaturesProps) {
  if (!data.groups.length) return null;

  return (
    <section id="features" className="py-[56px] sm:py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="blue"
          className="max-w-[900px] mb-6 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        <p className="max-w-[760px] mb-8 lg:mb-16 text-[15px] lg:text-[17px] leading-[150%] text-white/75">
          {data.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {data.groups.map((group) => (
            <article
              key={group.title}
              className="p-6 lg:p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[linear-gradient(125deg,_#0899FC_0%,_#FF49B8_100%)] text-white">
                <NicheIcon name={group.icon} className="w-6 h-6" />
              </div>
              <h3 className="mb-4 font-actay text-[18px] lg:text-[22px] font-bold leading-[1.15] uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[14px] lg:text-[15px] leading-[145%] text-white/80"
                  >
                    <span className="mt-1 text-blue-light" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
