import Image from "next/image";
import type {
  BenefitsBlock,
  BenefitsData,
  BenefitsHighlight,
} from "@/types/nicheExtras";
import MockupArt from "./MockupArt";

interface BenefitsSectionProps {
  data: BenefitsData;
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section className="niche-outcome">
      <div className="niche-outcome-bg" />
      <div className="niche-outcome-inner">
        <div className="niche-recap-pull">
          <div className="niche-recap-pull-mark">
            <span className="niche-recap-pull-mark-dot" />
            <span>{data.recapLabel || "РЕЗУЛЬТАТ ЧЕРЕЗ 6 МІСЯЦІВ"}</span>
          </div>
          <p
            className="niche-recap-pull-text"
            dangerouslySetInnerHTML={{
              __html: data.recapTextHtml || data.recapText || "",
            }}
          />
        </div>

        <article className="niche-directions">
          <div className="niche-directions-eyebrow">
            {data.architectureLabel || "SOLUTION · ARCHITECTURE"}
          </div>
          <h3
            className="niche-directions-h3"
            dangerouslySetInnerHTML={{
              __html: data.architectureH3Html || data.architectureH3 || "",
            }}
          />
          <p
            className="niche-directions-lede"
            dangerouslySetInnerHTML={{
              __html: data.architectureIntroHtml || data.architectureIntro || "",
            }}
          />

          <div className="niche-directions-cols">
            <div className="niche-directions-col">
              <h4 className="niche-directions-col-h">
                <span className="niche-directions-col-h-dot" />
                {data.architectureLeftTitle || "Замість цього"}
              </h4>
              <ul className="niche-directions-list">
                {(data.architectureLeftItemsHtml || data.architectureLeftItems || []).map(
                  (item, idx) => (
                    <li key={`left-${idx}`}>
                      <span className="niche-directions-bullet">●</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="niche-directions-col">
              <h4 className="niche-directions-col-h">
                <span className="niche-directions-col-h-dot" />
                {data.architectureRightTitle || "Це дозволило"}
              </h4>
              <ul className="niche-directions-list">
                {(data.architectureRightItemsHtml ||
                  data.architectureRightItems ||
                  []).map((item, idx) => (
                  <li key={`right-${idx}`}>
                    <span className="niche-directions-check">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <header className="niche-benefits-header">
          <h2
            className="niche-benefits-h2"
            dangerouslySetInnerHTML={{ __html: data.h2Html || data.h2 }}
          />
          <p
            className="niche-benefits-sub"
            dangerouslySetInnerHTML={{ __html: data.subtitleHtml || data.subtitle }}
          />
        </header>

        {data.highlight ? <HighlightCard data={data.highlight} /> : null}

        {data.blocks.map((block, idx) => (
          <BenefitsRow key={block.title} block={block} index={idx} />
        ))}
      </div>
    </section>
  );
}

function HighlightCard({ data }: { data: BenefitsHighlight }) {
  return (
    <article className="niche-benefit-hero">
      <div className="niche-benefit-hero-stat">
        <div className="niche-benefit-hero-num">{data.metric}</div>
        {data.metricLabel ? (
          <div className="niche-benefit-hero-lbl">{data.metricLabel}</div>
        ) : null}
        {data.metricNote ? (
          <div className="niche-benefit-hero-src">{data.metricNote}</div>
        ) : null}
      </div>

      <ul className="niche-benefit-hero-list">
        {(data.extrasHtml || data.extras).map((extra, idx) => (
          <li key={`extra-${idx}`}>
            <span className="niche-directions-check">✓</span>
            <span dangerouslySetInnerHTML={{ __html: extra }} />
          </li>
        ))}
      </ul>
    </article>
  );
}

function BenefitsRow({
  block,
  index,
}: {
  block: BenefitsBlock;
  index: number;
}) {
  const imageOnRight = block.imageOnRight ?? index % 2 === 1;
  const listItems = block.itemsHtml?.length ? block.itemsHtml : block.items;

  return (
    <article className={`niche-benefit-row ${imageOnRight ? "niche-benefit-row-reverse" : ""}`}>
      <div className="niche-benefit-visual">
        <div className="niche-benefit-visual-bar">
          <span />
          <span />
          <span />
          {block.visualUrl ? <span className="url">{block.visualUrl}</span> : null}
        </div>
        <div className="niche-benefit-visual-content">
          {block.imagePath ? (
            <Image
              src={block.imagePath}
              alt={block.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              unoptimized
            />
          ) : block.mockup ? (
            <MockupArt kind={block.mockup} className="w-full h-full" />
          ) : null}
        </div>
      </div>

      <div className="niche-benefit-text">
        {block.featureLabel ? (
          <div className="niche-benefit-row-num">{block.featureLabel}</div>
        ) : null}
        <h3
          className="niche-benefit-h3"
          dangerouslySetInnerHTML={{ __html: block.titleHtml || block.title }}
        />
        <ul className="niche-benefit-list">
          {listItems.map((item, idx) => (
            <li key={`item-${idx}`}>
              <span className="niche-directions-check">✓</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
