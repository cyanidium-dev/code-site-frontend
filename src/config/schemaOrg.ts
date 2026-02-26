/**
 * Static Organization and site data for Schema.org JSON-LD.
 * sameAs can be overridden via env NEXT_PUBLIC_SOCIAL_LINKS (JSON array of URLs).
 */

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.code-site.art"
).replace(/\/$/, "");

export const ORGANIZATION_SCHEMA = {
  "@type": "Organization" as const,
  name: "Code-site.art",
  url: BASE_URL,
  logo: `${BASE_URL}/opengraph-image.jpg`,
  sameAs: (() => {
    try {
      const env = process.env.NEXT_PUBLIC_SOCIAL_LINKS;
      if (env) return JSON.parse(env) as string[];
    } catch {
      // ignore
    }
    return [
      "https://www.instagram.com/cyanidium/",
      "https://t.me/fedirdev",
      "https://www.linkedin.com/in/fediralpatov/",
      "https://www.tiktok.com/@cyanidium.dev",
    ];
  })(),
};
