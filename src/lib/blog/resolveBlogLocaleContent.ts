import type {
  BlogLocaleCode,
  BlogPostDocument,
  BlogPostLocaleFields,
  BlogPostSeo,
  ResolvedBlogLocale,
} from "@/types/blogPost";

function hasTitleAndBody(block: BlogPostLocaleFields | null | undefined): boolean {
  if (!block) return false;
  const titleOk =
    typeof block.title === "string" && block.title.trim().length > 0;
  const body = block.body;
  const bodyOk = Array.isArray(body) && body.length > 0;
  return titleOk && bodyOk;
}

function emptySeo(): BlogPostSeo {
  return {};
}

function mergeSeo(
  primary: BlogPostSeo | null | undefined,
  fallback: BlogPostSeo | null | undefined
): BlogPostSeo {
  const a = primary ?? emptySeo();
  const b = fallback ?? emptySeo();
  return {
    metaTitle: a.metaTitle?.trim() || b.metaTitle || undefined,
    metaDescription: a.metaDescription?.trim() || b.metaDescription || undefined,
    ogTitle: a.ogTitle?.trim() || b.ogTitle || undefined,
    ogDescription: a.ogDescription?.trim() || b.ogDescription || undefined,
  };
}

/**
 * Picks localized fields for the requested locale with safe fallback to RU.
 * SEO fields are merged so missing strings in the active locale fall back to RU.
 */
export function resolveBlogLocaleContent(
  post: BlogPostDocument,
  locale: BlogLocaleCode
): ResolvedBlogLocale {
  const ru = post.ru ?? undefined;
  const uk = post.uk ?? undefined;
  const en = post.en ?? undefined;

  let sourceLocale: BlogLocaleCode = "ru";
  let selected: BlogPostLocaleFields = ru ?? {
    title: "",
    excerpt: "",
    body: [],
    seo: {},
  };

  if (locale === "en" && hasTitleAndBody(en)) {
    sourceLocale = "en";
    selected = en!;
  } else if (locale === "uk" && hasTitleAndBody(uk)) {
    sourceLocale = "uk";
    selected = uk!;
  } else if (hasTitleAndBody(ru)) {
    sourceLocale = "ru";
    selected = ru!;
  } else {
    /** Last resort: any locale that has at least a title */
    const firstWithTitle = [en, uk, ru].find(
      (b) => b && typeof b.title === "string" && b.title.trim().length > 0
    );
    if (firstWithTitle) {
      selected = firstWithTitle;
      if (firstWithTitle === en) sourceLocale = "en";
      else if (firstWithTitle === uk) sourceLocale = "uk";
      else sourceLocale = "ru";
    }
  }

  const seo = mergeSeo(selected.seo, ru?.seo);

  return {
    ...selected,
    title: selected.title ?? "",
    excerpt: selected.excerpt ?? "",
    body: Array.isArray(selected.body) ? selected.body : [],
    seo,
    sourceLocale,
  };
}
