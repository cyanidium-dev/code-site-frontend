import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const BASE_URL = (SITE_URL || "https://www.code-site.art").replace(/\/$/, "");

/** Path segment to breadcrumb translation key */
const SEGMENT_TO_KEY: Record<string, string> = {
  blog: "blog",
  portfolio: "portfolio",
  services: "services",
  contacts: "contacts",
  policy: "policy",
  "public-contract": "publicContract",
  offer: "offer",
  legal: "legal",
};

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

function getSegmentLabel(
  segment: string,
  t: (key: string) => string
): string | null {
  const key = SEGMENT_TO_KEY[segment];
  if (!key) return null;
  try {
    return t(key);
  } catch {
    return null;
  }
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface GetBreadcrumbItemsOptions {
  /** Override name for the last (current page) segment, e.g. article or project title */
  lastItemName?: string | null;
}

/**
 * Build breadcrumb items for Schema.org BreadcrumbList.
 * Uses pathname and locale to build full chain with absolute URLs.
 */
export async function getBreadcrumbItems(
  pathname: string,
  locale: string,
  options: GetBreadcrumbItemsOptions = {}
): Promise<BreadcrumbItem[]> {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const segments = pathWithoutLocale.split("/").filter(Boolean);
  const t = await getTranslations("breadcrumbs");
  const localePrefix =
    locale === routing.defaultLocale ? "" : `/${locale}`;
  const items: BreadcrumbItem[] = [];

  // Home
  const homeUrl = `${BASE_URL}${localePrefix || "/"}`;
  items.push({ name: t("home"), item: homeUrl });

  if (segments.length === 0) {
    return items;
  }

  let pathSoFar = localePrefix || "";
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const isLast = i === segments.length - 1;
    pathSoFar += pathSoFar ? `/${segment}` : `/${segment}`;
    const itemUrl = `${BASE_URL}${pathSoFar}`;

    let name: string;
    if (isLast && options.lastItemName) {
      name = options.lastItemName;
    } else {
      const label = getSegmentLabel(segment, t);
      name = label ?? segment;
    }

    items.push({ name, item: itemUrl });
  }

  return items;
}

/**
 * Build Schema.org BreadcrumbList JSON-LD object.
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
