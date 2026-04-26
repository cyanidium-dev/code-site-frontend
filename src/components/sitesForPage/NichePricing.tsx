import type { NichePricing as NichePricingData } from "@/types/niche";

interface NichePricingProps {
  data: NichePricingData;
}

export default function NichePricing({ data }: NichePricingProps) {
  return (
    <section className="cmp">
      <div className="cmp-bg" />
      <div className="cmp-inner">
        <h2 className="cmp-h2">{data.h2}</h2>

        <div className="cmp-pricing-grid">
          {data.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`cmp-tier ${tier.highlighted ? "cmp-tier-pop" : ""}`}
            >
              {tier.highlighted ? (
                <span className="cmp-tier-badge">
                  Популярно
                </span>
              ) : null}

              <h3 className="cmp-tier-name">
                {tier.name}
              </h3>
              <div className="cmp-tier-price">
                {tier.displayPrice}
              </div>
              <div className="cmp-tier-meta">
                {tier.duration}
              </div>

              {tier.includesPrevious ? (
                <p className="cmp-tier-section-h good">
                  {tier.includesPrevious}
                </p>
              ) : null}

              <ul className="cmp-tier-list">
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className="tier-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {tier.notIncluded && tier.notIncluded.length > 0 ? (
                <div>
                  <div className="cmp-tier-divider" />
                  <p className="cmp-tier-section-h">
                    Не входить
                  </p>
                  <ul className="cmp-tier-list muted">
                    {tier.notIncluded.map((item) => (
                      <li key={item}>
                        <span className="tier-x" aria-hidden="true">
                          ×
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <a
                href={tier.ctaUrl ?? "#project-form"}
                className={`cmp-tier-btn inline-flex items-center justify-center ${tier.name.toLowerCase().includes("преміум") ? "cmp-tier-btn-ghost" : ""}`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
