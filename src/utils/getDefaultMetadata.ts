import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const BASE_URL = (SITE_URL || "https://www.code-site.art").replace(/\/$/, "");

/** Build absolute self-referencing canonical URL for the current page (locale-aware). */
export function getCanonicalUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${BASE_URL}${path}`;
}

/**
 * Get path without locale prefix (for building alternate locale URLs).
 * With localePrefix "as-needed", default locale has no prefix in the path.
 */
function getPathWithoutLocale(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  for (const locale of routing.locales) {
    if (locale === routing.defaultLocale) continue;
    const prefix = `/${locale}`;
    if (path === prefix || path.startsWith(prefix + "/")) {
      return path.slice(prefix.length) || "/";
    }
  }
  return path;
}

/**
 * Build absolute alternate URLs for each locale (hreflang).
 * Returns object suitable for metadata.alternates.languages.
 */
export function getAlternateLanguages(pathname: string): Record<string, string> {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    const path =
      locale === routing.defaultLocale
        ? pathWithoutLocale
        : pathWithoutLocale === "/"
          ? `/${locale}`
          : `/${locale}${pathWithoutLocale}`;
    languages[locale] = `${BASE_URL}${path}`;
  }

  languages["x-default"] =
    languages[routing.defaultLocale] ?? `${BASE_URL}/`;

  return languages;
}

export async function getDefaultMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations("metadata");

  // отримуємо рядок keywords із перекладу
  const keywordsString = t("keywords");

  // формуємо масив, обрізаючи пробіли навколо кожного слова
  const keywordsArray = keywordsString
    .split(",")
    .map((kw) => kw.trim())
    .filter(Boolean);

  return {
    title: t("title"),
    description: t("description"),
    keywords: keywordsArray,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      images: [
        {
          url: `${BASE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Code-site.art",
        },
      ],
      type: "website",
      locale: locale === "uk" ? "uk_UA" : locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Code-site.art",
    },
  };
}
