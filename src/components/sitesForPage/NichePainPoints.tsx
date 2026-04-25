import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NichePainPoints as NichePainPointsData } from "@/types/niche";
import ScrollDownLink from "./ScrollDownLink";

interface NichePainPointsProps {
  data: NichePainPointsData;
}

export default function NichePainPoints({ data }: NichePainPointsProps) {
  return (
    <section
      id="pain-points"
      className="relative py-[80px] lg:py-[120px] bg-black"
    >
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[900px] mb-12 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        <ol className="flex flex-col gap-8 lg:gap-12">
          {data.items.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-4 lg:gap-10 pb-8 lg:pb-12 border-b border-white/10 last:border-b-0"
            >
              <span className="font-actay text-[60px] lg:text-[96px] font-bold leading-none text-transparent bg-clip-text bg-[linear-gradient(112deg,_#FFB5E6_0%,_#FF49B8_100%)]">
                {item.number}
              </span>
              <div className="max-w-[720px]">
                <h3 className="mb-3 lg:mb-4 font-actay text-[22px] lg:text-[32px] font-bold leading-[1.1] uppercase">
                  {item.title}
                </h3>
                <p className="text-[15px] lg:text-[17px] leading-[150%] text-white/75">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 lg:mt-16">
          <ScrollDownLink targetId="features" label={data.scrollLabel} />
        </div>
      </Container>
    </section>
  );
}
