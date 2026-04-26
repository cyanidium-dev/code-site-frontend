import type { NicheIntegrations as NicheIntegrationsData } from "@/types/niche";

interface NicheIntegrationsProps {
  data: NicheIntegrationsData;
}

export default function NicheIntegrations({ data }: NicheIntegrationsProps) {
  if (!data.logos.length) return null;

  return (
    <section className="services">
      <div className="services-bg" />
      <div className="services-inner">
        <header className="svc-header integrations-header">
          <h2 className="svc-h2">{data.h2}</h2>
          <p className="svc-sub">{data.description}</p>
        </header>
        <ul className="integrations-grid">
          {data.logos.map((logo) => (
            <li key={logo.name} className="integration" title={logo.name}>
              <span>
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
