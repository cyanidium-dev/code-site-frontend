import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import FaqList from "@/components/shared/faqList/FaqList";
import type { NicheFaq as NicheFaqData } from "@/types/niche";

interface NicheFaqProps {
  data: NicheFaqData;
}

export default function NicheFaq({ data }: NicheFaqProps) {
  if (!data.items.length) return null;

  const faqItems = data.items.map((item) => ({
    title: item.question,
    answer: item.answer,
  }));

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
    <section className="py-[56px] sm:py-[80px] lg:py-[120px]">
      <Container>
        <SectionTitle
          variant="pink"
          className="max-w-[900px] mb-8 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.05]"
        >
          {data.h2}
        </SectionTitle>

        <FaqList items={faqItems} />
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
