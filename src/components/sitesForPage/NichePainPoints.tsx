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
      className="relative py-[56px] sm:py-[80px] lg:py-[120px] bg-black"
    >
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[900px] mb-8 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>
        <ol className="flex flex-col gap-6 lg:gap-12">
          {data.items.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-2 lg:gap-10 pb-6 lg:pb-12 border-b border-white/10 last:border-b-0"
            >
              <span className="font-actay text-[44px] lg:text-[96px] font-bold leading-none text-transparent bg-clip-text bg-[linear-gradient(112deg,_#FFB5E6_0%,_#FF49B8_100%)]">
                {item.number}
              </span>
              <div className="max-w-[720px]">
                <h3 className="mb-2 lg:mb-4 font-actay text-[20px] lg:text-[32px] font-bold leading-[1.15] uppercase">
                  {item.title}
                </h3>
                <p className="text-[14px] lg:text-[17px] leading-[150%] text-white/75">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 lg:mt-16 flex justify-center">
          <ScrollDownLink targetId="features" label={data.scrollLabel} />
        </div>
      </Container>
    </section>
  );
}
