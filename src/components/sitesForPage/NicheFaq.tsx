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
    <section className="faq">
      <div className="faq-bg" />
      <div className="faq-inner">
        <h2 className="faq-h2">{data.h2}</h2>
        <div className="faq-list">
          {data.items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-q">{item.question}</span>
                <span className="faq-toggle">+</span>
              </summary>
              <div className="faq-a">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
