import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import type { NicheFaq as NicheFaqData } from "@/types/niche";

interface NicheFaqProps {
  data: NicheFaqData;
}

export default function NicheFaq({ data }: NicheFaqProps) {
  if (!data.items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[900px] mb-12 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>

        <ul className="flex flex-col gap-3 lg:gap-4">
          {data.items.map((item, idx) => (
            <li key={idx}>
              <details className="group rounded-2xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.05]">
                <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none font-actay text-[15px] lg:text-[18px] font-bold leading-[1.3]">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[14px] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-[14px] lg:text-[16px] leading-[150%] text-white/75">
                  {item.answer}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
