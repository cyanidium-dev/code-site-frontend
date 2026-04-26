import type { NichePainPoints as NichePainPointsData } from "@/types/niche";

interface NichePainPointsProps {
  data: NichePainPointsData;
}

export default function NichePainPoints({ data }: NichePainPointsProps) {
  return (
    <section id="pain-points" className="niche-reasons">
      <div className="niche-reasons-bg" />

      <div className="niche-reasons-inner">
        <header className="niche-reasons-header">
          <div>
            <div className="niche-reasons-eyebrow">
              <span className="niche-reasons-eyebrow-dot" />
              <span>{data.eyebrow || "ДІАГНОСТИКА"}</span>
              <span className="niche-reasons-eyebrow-num">
                / {data.eyebrowMeta || "03 ПУНКТИ"}
              </span>
            </div>
            <h2
              className="niche-reasons-h2"
              dangerouslySetInnerHTML={{ __html: data.h2Html || data.h2 }}
            />
          </div>

          {!!data.metaRows?.length && (
            <div className="niche-reasons-meta">
              {data.metaRows.map((row) => (
                <div key={row} className="niche-reasons-meta-row">
                  <span className="niche-reasons-meta-dash">-</span>
                  <span>{row}</span>
                </div>
              ))}
            </div>
          )}
        </header>

        <div className="niche-reasons-list">
          {data.items.map((item) => (
            <article className="niche-reason-row" key={item.number}>
              <div className="niche-reason-num-col">
                <div className="niche-reason-num">{item.number}</div>
                {item.tag ? (
                  <span className="niche-reason-num-tag">{item.tag}</span>
                ) : null}
              </div>

              <div className="niche-reason-body">
                <h3
                  className="niche-reason-title"
                  dangerouslySetInnerHTML={{
                    __html: item.titleHtml || item.title,
                  }}
                />
                <p
                  className="niche-reason-text"
                  dangerouslySetInnerHTML={{ __html: item.textHtml || item.text }}
                />
              </div>

              {item.stat ? (
                <div className="niche-reason-stat">
                  <div className="niche-reason-stat-num">{item.stat.value}</div>
                  <div className="niche-reason-stat-lbl">{item.stat.label}</div>
                  <div className="niche-reason-stat-src">{item.stat.source}</div>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="niche-reasons-foot">
          <div
            className="niche-reasons-foot-text"
            dangerouslySetInnerHTML={{
              __html:
                `<span class="niche-reasons-foot-arrow"></span><span>${
                  data.footerText ||
                  "Виправляємо <strong>всі три</strong> на запуску — без вашої участі."
                }</span>`,
            }}
          />
          <a
            href={data.footerCta?.url || "#project-form"}
            className="niche-reasons-foot-cta"
          >
            <span>{data.footerCta?.text || "Перевірити мій сайт"}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
