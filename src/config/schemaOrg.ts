/**
 * Static Organization and site data for Schema.org JSON-LD.
 * sameAs can be overridden via env NEXT_PUBLIC_SOCIAL_LINKS (JSON array of URLs).
 */

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.code-site.art"
).replace(/\/$/, "");

/**
 * Dedicated ImageObject for the site logo, used by Organization.logo
 * and exposed with a stable @id for sitelinks / rich results.
 */
export const LOGO_IMAGE_OBJECT = {
  "@id": `${BASE_URL}/#logo`,
  "@type": "ImageObject" as const,
  url: `${BASE_URL}/logo.png`,
};

export const ORGANIZATION_SCHEMA = {
  "@id": `${BASE_URL}/#organization`,
  "@type": "Organization" as const,
  name: "Code-site.art",
  url: BASE_URL,
  logo: {
    "@id": LOGO_IMAGE_OBJECT["@id"],
  },
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
