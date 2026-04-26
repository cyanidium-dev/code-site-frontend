import type { NicheFeatures as NicheFeaturesData } from "@/types/niche";
import NicheIcon from "./NicheIcon";

interface NicheFeaturesProps {
  data: NicheFeaturesData;
}

export default function NicheFeatures({ data }: NicheFeaturesProps) {
  if (!data.groups.length) return null;

  return (
    <section id="features" className="services">
      <div className="services-bg" />
      <div className="services-inner">
        <header className="svc-header">
          <h2 className="svc-h2">{data.h2}</h2>
          <p className="svc-sub">{data.subtitle}</p>
        </header>
        <div className="feature-grid">
          {data.groups.map((group) => (
            <article key={group.title} className="feature-card">
              <div className="feature-card-bg" />
              <div className="feature-icon">
                <NicheIcon name={group.icon} className="w-6 h-6" />
              </div>
              <h3 className="feature-card-h">
                {group.title}
              </h3>
              <ul className="feature-card-list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="feature-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
