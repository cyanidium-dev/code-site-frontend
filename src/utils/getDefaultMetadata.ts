import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const BASE_URL = (SITE_URL || "https://www.code-site.art").replace(/\/$/, "");

/** Build absolute self-referencing canonical URL for the current page (locale-aware). */
export function getCanonicalUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  // With localePrefix "as-needed", default locale has no prefix in the canonical URL.
  const pathForCanonical =
    path === `/${routing.defaultLocale}` || path.startsWith(`/${routing.defaultLocale}/`)
      ? path.slice(`/${routing.defaultLocale}`.length) || "/"
      : path;
  return `${BASE_URL}${pathForCanonical}`;
}

export function getPathWithoutLocale(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  for (const locale of routing.locales) {
    const prefix = `/${locale}`;
    if (path === prefix || path.startsWith(prefix + "/")) {
      return path.slice(prefix.length) || "/";
    }
  }
  return path;
}

/**
 * Build pathname for a page from locale and route segments (for per-page JsonLd).
 * Uses localePrefix "as-needed": default locale has no prefix.
 */
export function buildPagePathname(locale: string, ...segments: string[]): string {
  const pathWithoutLocale =
    segments.length === 0 ? "/" : `/${segments.join("/")}`;
  return locale === routing.defaultLocale
    ? pathWithoutLocale
    : `/${locale}${pathWithoutLocale}`;
}
export type PageTypeForMetadata =
  | "home"
  | "services"
  | "portfolio"
  | "blog"
  | "contacts"
  | "policy"
  | "offer"
  | "publicContract"
  | "legal"
  | "webpage";

export const METADATA_PAGE_KEYS: Record<PageTypeForMetadata, string | undefined> = {
  home: "home",
  services: "services",
  portfolio: "portfolio",
  blog: "blog",
  contacts: "contacts",
  policy: "policy",
  offer: "offer",
  publicContract: "publicContract",
  legal: "legal",
  webpage: undefined,
};

export function getPageTypeFromPathname(pathname: string): PageTypeForMetadata {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  if (pathWithoutLocale === "/") return "home";
  const segments = pathWithoutLocale.slice(1).split("/").filter(Boolean);
  const first = segments[0];
  if (first === "services") return "services";
  if (first === "portfolio") return "portfolio";
  if (first === "blog") return "blog";
  if (first === "contacts") return "contacts";
  if (first === "policy") return "policy";
  if (first === "offer") return "offer";
  if (first === "public-contract") return "publicContract";
  if (first === "legal") return "legal";
  return "webpage";
}

function getPathWithoutLocaleInternal(pathname: string): string {
  return getPathWithoutLocale(pathname);
}

/**
 * Build absolute alternate URLs for each locale (hreflang).
 * Returns object suitable for metadata.alternates.languages.
 */
export function getAlternateLanguages(pathname: string): Record<string, string> {
  const pathWithoutLocale = getPathWithoutLocaleInternal(pathname);
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
