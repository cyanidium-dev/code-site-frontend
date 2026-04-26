import Image from "next/image";
import type { BeforeAfterData } from "@/types/nicheExtras";
import MockupArt from "./MockupArt";

interface BeforeAfterSectionProps {
  data: BeforeAfterData;
}

export default function BeforeAfterSection({ data }: BeforeAfterSectionProps) {
  return (
    <section className="niche-case">
      <div className="niche-case-bg" />
      <div className="niche-case-inner">
        <header className="niche-case-header">
          <div>
            <div className="niche-case-eyebrow">
              <span className="niche-case-eyebrow-dot" />
              <span>{data.eyebrowLabel || "РЕАЛЬНИЙ КЕЙС"}</span>
              <span className="niche-case-eyebrow-sep">·</span>
              <span className="niche-case-eyebrow-em">
                {data.eyebrowEmphasis || data.eyebrow || ""}
              </span>
            </div>
            <h2
              className="niche-case-h2"
              dangerouslySetInnerHTML={{ __html: data.h2Html || data.h2 }}
            />
          </div>

          <div>
            <p
              className="niche-case-lede"
              dangerouslySetInnerHTML={{ __html: data.subtitleHtml || data.subtitle }}
            />
            {!!data.metaItems?.length && (
              <div className="niche-case-meta">
                {data.metaItems.map((item) => (
                  <div key={`${item.value}-${item.label}`} className="niche-case-meta-item">
                    <strong>{item.value}</strong>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="niche-case-grid">
          <BeforeAfterColumn variant="before" column={data.before} />
          <BeforeAfterColumn variant="after" column={data.after} />
        </div>

        {!!data.results?.length && (
          <div className="niche-case-results">
            {data.results.map((result) => (
              <div key={`${result.tag}-${result.value}`} className="niche-case-result">
                <div className="niche-case-result-tag">{result.tag}</div>
                <div className="niche-case-result-num">{result.value}</div>
                <div className="niche-case-result-lbl">{result.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="niche-case-cta">
          <div
            className="niche-case-cta-text"
            dangerouslySetInnerHTML={{
              __html: `<span class="niche-case-cta-arrow"></span><span>${
                data.ctaText ||
                "Хочете <strong>такий самий результат</strong>? Подивіться, як ми це робимо."
              }</span>`,
            }}
          />
          <a href={data.ctaLink?.url || "#cases"} className="niche-case-cta-btn">
            <span>{data.ctaLink?.text || "Подивитися кейси клінік"}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterColumn({
  variant,
  column,
}: {
  variant: "before" | "after";
  column: BeforeAfterData["before"];
}) {
  const isBefore = variant === "before";
  const listItems = column.itemsHtml?.length ? column.itemsHtml : column.items;

  return (
    <article className={`niche-case-card ${isBefore ? "niche-case-card-before" : "niche-case-card-after"}`}>
      <div className="niche-case-card-head">
        <span className={`niche-case-badge ${isBefore ? "niche-case-badge-before" : "niche-case-badge-after"}`}>
          <span className="niche-case-badge-dot" />
          <span>{column.label}</span>
        </span>
        {column.versionLabel ? <span className="niche-case-card-num">{column.versionLabel}</span> : null}
      </div>

      <div className="niche-case-shot">
        <div className="niche-case-shot-bar">
          <span className="niche-case-shot-dot" />
          <span className="niche-case-shot-dot" />
          <span className="niche-case-shot-dot" />
          {column.domain ? <span className="niche-case-shot-url">{column.domain}</span> : null}
        </div>
        <div className="niche-case-shot-img">
        {column.imagePath ? (
          <Image
            src={column.imagePath}
            alt={column.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            unoptimized
          />
        ) : column.mockup ? (
          <MockupArt kind={column.mockup} className="w-full h-full" />
        ) : null}
        </div>
      </div>

      {column.tagline ? (
        <h3 className="niche-case-tagline">
          <span className={`niche-case-tagline-icn ${column.taglineState === "good" ? "niche-case-tagline-icn-good" : "niche-case-tagline-icn-bad"}`}>
            {column.taglineState === "good" ? "✓" : "×"}
          </span>
          {column.tagline}
        </h3>
      ) : null}

      <ul className="niche-case-list">
        {listItems.map((item, index) => (
          <li key={`${column.label}-${index}`}>
            <span className={`niche-case-list-icn ${isBefore ? "niche-case-list-icn-bad" : "niche-case-list-icn-good"}`}>
              {isBefore ? "✕" : "✓"}
            </span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>

      {column.note ? (
        <p className="niche-case-card-foot">
          <strong>{isBefore ? "Примітка:" : "Бонус:"}</strong> {column.note}
        </p>
      ) : null}
    </article>
  );
}
