import Image from "next/image";
import Container from "@/components/shared/container/Container";
import type { TestimonialData } from "@/types/nicheExtras";
import MockupArt from "./MockupArt";

interface TestimonialSectionProps {
  data: TestimonialData;
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  const initials = getInitials(data.authorName);

  return (
    <section className="py-[80px] lg:py-[120px]">
      <Container>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_-20px_rgba(8,153,252,0.18)]">
            <div className="relative aspect-[4/3] w-full">
              {data.imagePath ? (
                <Image
                  src={data.imagePath}
                  alt={data.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : data.mockup ? (
                <MockupArt kind={data.mockup} className="w-full h-full" />
              ) : null}
            </div>
          </div>

          <div className="flex flex-col">
            {data.eyebrow ? (
              <p className="inline-block self-start mb-5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] lg:text-[13px] uppercase tracking-wider text-white/70">
                {data.eyebrow}
              </p>
            ) : null}
            <span
              aria-hidden="true"
              className="font-actay text-[72px] lg:text-[96px] leading-none text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_22.37%,_#FFB5E6_93.04%)] -mb-2"
            >
              “
            </span>
            <blockquote className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[145%] text-white/90 font-light">
              {data.quote}
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[linear-gradient(125deg,_#0899FC_0%,_#FF49B8_100%)] font-actay font-bold text-white text-[16px]">
                {initials}
              </span>
              <div>
                <p className="font-actay text-[15px] lg:text-[16px] font-bold uppercase text-white">
                  {data.authorName}
                </p>
                <p className="text-[13px] lg:text-[14px] text-white/65">
                  {data.authorRole}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

function getInitials(fullName: string): string {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
