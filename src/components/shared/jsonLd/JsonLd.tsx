import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl } from "@/utils/getDefaultMetadata";
import {
  getBreadcrumbItems,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/utils/getBreadcrumbItems";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singlePostQuery, singleProjectQuery } from "@/lib/queries";
import { routing } from "@/i18n/routing";
import { ORGANIZATION_SCHEMA } from "@/config/schemaOrg";

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.code-site.art"
).replace(/\/$/, "");

type PageType =
  | "home"
  | "services"
  | "portfolio"
  | "portfolioItem"
  | "blog"
  | "blogArticle"
  | "contacts"
  | "policy"
  | "offer"
  | "publicContract"
  | "legal"
  | "webpage";

function sanitizeSchemaOrg(value: unknown, keyHint?: string): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeSchemaOrg(item, keyHint));
  }
  if (value && typeof value === "object") {
    // Special handling for keywords: convert localized fields into a simple array of strings
    if (keyHint === "keywords") {
      const obj = value as Record<string, unknown>;
      const collected: string[] = [];
      for (const [key, v] of Object.entries(obj)) {
        if (
          typeof v === "string" &&
          (key === "ru" || key === "uk" || key === "en")
        ) {
          collected.push(v);
        }
      }
      return collected.length ? collected : undefined;
    }

    // Normalize unsupported @type values
    if (
      "@type" in (value as Record<string, unknown>) &&
      (value as Record<string, unknown>)["@type"] === "CaseStudy"
    ) {
      (value as Record<string, unknown>)["@type"] = "Project";
    }

    const entries = Object.entries(value).filter(
      ([key]) => key !== "uk" && key !== "ru" && key !== "en"
    );
    return Object.fromEntries(
      entries.map(([key, v]) => [key, sanitizeSchemaOrg(v, key)])
    );
  }
  return value;
}

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

function getPageType(pathWithoutLocale: string): PageType {
  if (pathWithoutLocale === "/") return "home";
  const segments = pathWithoutLocale.slice(1).split("/").filter(Boolean);
  const first = segments[0];
  if (first === "services") return "services";
  if (first === "portfolio") return segments.length > 1 ? "portfolioItem" : "portfolio";
  if (first === "blog") return segments.length > 1 ? "blogArticle" : "blog";
  if (first === "contacts") return "contacts";
  if (first === "policy") return "policy";
  if (first === "offer") return "offer";
  if (first === "public-contract") return "publicContract";
  if (first === "legal") return "legal";
  return "webpage";
}

const METADATA_PAGE_KEYS: Record<string, string> = {
  home: "home",
  services: "services",
  portfolio: "portfolio",
  blog: "blog",
  contacts: "contacts",
  policy: "policy",
  offer: "offer",
  publicContract: "publicContract",
  legal: "legal",
};

interface JsonLdProps {
  /** Current page pathname (e.g. "/uk/blog" or "/blog"). Required when used from pages. */
  pathname: string;
}

export default async function JsonLd({ pathname: pathnameProp }: JsonLdProps) {
  const pathname = pathnameProp;
  const locale = (await getLocale()) ?? routing.defaultLocale;
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const pageType = getPageType(pathWithoutLocale);
  const segments = pathWithoutLocale === "/" ? [] : pathWithoutLocale.slice(1).split("/");

  const url = getCanonicalUrl(pathname);
  const graph: Record<string, unknown>[] = [];

  // —— Organization (always first) ——
  graph.push({
    "@context": "https://schema.org",
    ...ORGANIZATION_SCHEMA,
  });

  // —— Fetch page-specific data ——
  let title = "";
  let description = "";
  let image: string | undefined;
  let headline: string | undefined;
  let sanitySchema: Record<string, unknown> | null = null;
  let articleAuthor: string | undefined;
  let datePublished: string | undefined;
  let dateModified: string | undefined;
  let lastItemName: string | null = null;

  const tMetadata = await getTranslations("metadataPages");
  const tMetadataBase = await getTranslations("metadata");

  if (pageType === "blogArticle" && segments[1]) {
    try {
      const post = await fetchSanityData(singlePostQuery, {
        slug: segments[1],
        lang: locale,
      });
      if (post) {
        title = post.seo?.title || post.name || "";
        description = post.seo?.subtitle || post.description || "";
        image = post.mainImageDesktop?.url;
        headline = post.name;
        articleAuthor = post.author || "code-site.art";
        datePublished = post.datePublished ?? undefined;
        dateModified = post.updatedAt ?? undefined;
        lastItemName = post.name;
        if (post.schemaOrg) {
          try {
            const res = await fetch(post.schemaOrg);
            sanitySchema = await res.json();
          } catch {
            // ignore
          }
        }
      }
    } catch {
      // fallback below
    }
  } else if (pageType === "portfolioItem" && segments[1]) {
    try {
      const project = await fetchSanityData(singleProjectQuery, {
        slug: segments[1],
        lang: locale,
      });
      if (project) {
        title = project.seo?.title || project.name || "";
        description = project.seo?.subtitle || project.shortDescription || "";
        image = project.mainImageDesktop?.url;
        headline = project.name;
        lastItemName = project.name;
        if (project.schemaOrg) {
          try {
            const res = await fetch(project.schemaOrg);
            sanitySchema = await res.json();
          } catch {
            // ignore
          }
        }
      }
    } catch {
      // fallback below
    }
  }

  if (!title || !description) {
    const key = METADATA_PAGE_KEYS[pageType];
    try {
      if (key && !title) title = tMetadata(`${key}.title`);
      if (key && !description) description = tMetadata(`${key}.description`);
    } catch {
      // ignore
    }
    if (!title) title = tMetadataBase("title");
    if (!description) description = tMetadataBase("description");
  }

  if (!image) image = `${BASE_URL}/opengraph-image.jpg`;

  // —— mainEntityOfPage ——
  let mainEntity: Record<string, unknown> = {
    "@type": "WebPage",
    name: title,
    description: description || undefined,
    url,
    primaryImageOfPage: image ? { "@type": "ImageObject", url: image } : undefined,
  };

  if (pageType === "home") {
    mainEntity = {
      "@type": "WebSite",
      name: title,
      description: description || undefined,
      url: BASE_URL + (locale === routing.defaultLocale ? "/" : `/${locale}`),
    };
  } else if (pageType === "services") {
    mainEntity = {
      "@type": "Service",
      name: title,
      description: description || undefined,
      url,
    };
  } else if (pageType === "portfolio" || pageType === "portfolioItem") {
    mainEntity = {
      "@type": pageType === "portfolioItem" ? "Project" : "CollectionPage",
      "@id": url,
      name: headline || title,
      description: description || undefined,
      url,
      image: image ? [image] : undefined,
    };
  } else if (pageType === "blog" || pageType === "blogArticle") {
    if (pageType === "blogArticle") {
      mainEntity = {
        "@type": "Article",
        headline: headline || title,
        name: title,
        description: description || undefined,
        image: image ? [image] : undefined,
        url,
        author: {
          "@type": "Person",
          name: articleAuthor || "code-site.art",
        },
        datePublished: datePublished ?? undefined,
        dateModified: dateModified ?? undefined,
        publisher: {
          "@id": `${ORGANIZATION_SCHEMA["@id"]}`,
        },
      };
    } else {
      mainEntity = {
        "@type": "CollectionPage",
        name: title,
        description: description || undefined,
        url,
      };
    }
  }

  if (sanitySchema && typeof sanitySchema === "object") {
    const cleaned = sanitizeSchemaOrg(
      sanitySchema
    ) as Record<string, unknown>;
    mainEntity = { ...cleaned, ...mainEntity };
  }

  graph.push({
    "@context": "https://schema.org",
    ...mainEntity,
  });

  // —— Breadcrumbs ——
  const breadcrumbItems: BreadcrumbItem[] = await getBreadcrumbItems(
    pathname,
    locale,
    { lastItemName }
  );
  graph.push(buildBreadcrumbSchema(breadcrumbItems));

  // —— FAQ (home + blog article) ——
  const faqPages = ["home", "blogArticle"];
  if (faqPages.includes(pageType)) {
    try {
      const tFaq = await getTranslations("homePage.faq");
      const questions = ["One", "Two", "Three", "Four", "Five", "Six"] as const;
      const faqEntries = questions.map((q) => ({
        "@type": "Question" as const,
        name: tFaq(`question${q}.title`),
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: tFaq(`question${q}.answer`),
        },
      }));
      graph.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqEntries,
      });
    } catch {
      // no FAQ if translations missing
    }
  }

  // —— Table (services page) ——
  if (pageType === "services") {
    try {
      const tTable = await getTranslations("servicesPage");
      const raw = tTable.raw("comparisonTable") as {
        title?: string;
        description?: string;
        table?: string[];
      };
      if (raw?.table?.length) {
        graph.push({
          "@context": "https://schema.org",
          "@type": "Table",
          about: raw.title || title,
          name: raw.title || "Comparison",
          description: raw.description || undefined,
        });
      }
    } catch {
      // ignore
    }
  }

  const output = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(output) }}
    />
  );
}
