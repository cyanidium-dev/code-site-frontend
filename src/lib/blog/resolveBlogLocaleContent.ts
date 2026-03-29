import type {
  BlogLocaleCode,
  BlogPostDocument,
  BlogPostLocaleFields,
  BlogPostSeo,
  ResolvedBlogLocale,
} from "@/types/blogPost";

/**
 * Достаточно данных для отображения локали: заголовок + (тело статьи или лид).
 * Списки без `body` в GROQ опираются на `excerpt`; страница статьи передаёт полный `body`.
 */
function hasUsableLocaleContent(
  block: BlogPostLocaleFields | null | undefined
): boolean {
  if (!block) return false;
  const titleOk =
    typeof block.title === "string" && block.title.trim().length > 0;
  if (!titleOk) return false;
  const body = block.body;
  const bodyOk = Array.isArray(body) && body.length > 0;
  const excerptOk =
    typeof block.excerpt === "string" && block.excerpt.trim().length > 0;
  return bodyOk || excerptOk;
}

function localePriority(locale: BlogLocaleCode): BlogLocaleCode[] {
  if (locale === "en") return ["en", "ru", "uk"];
  if (locale === "uk") return ["uk", "ru", "en"];
  return ["ru", "uk", "en"];
}

function pickLocaleBlock(
  post: BlogPostDocument,
  code: BlogLocaleCode
): BlogPostLocaleFields | undefined {
  if (code === "ru") return post.ru ?? undefined;
  if (code === "uk") return post.uk ?? undefined;
  return post.en ?? undefined;
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

  if (locale === "en" && hasUsableLocaleContent(en)) {
    sourceLocale = "en";
    selected = en!;
  } else if (locale === "uk" && hasUsableLocaleContent(uk)) {
    sourceLocale = "uk";
    selected = uk!;
  } else if (hasUsableLocaleContent(ru)) {
    sourceLocale = "ru";
    selected = ru!;
  } else {
    const order = localePriority(locale);
    let picked: BlogPostLocaleFields | undefined;
    let pickedCode: BlogLocaleCode = "ru";

    for (const code of order) {
      const b = pickLocaleBlock(post, code);
      if (b && hasUsableLocaleContent(b)) {
        picked = b;
        pickedCode = code;
        break;
      }
    }
    if (!picked) {
      for (const code of order) {
        const b = pickLocaleBlock(post, code);
        if (b && typeof b.title === "string" && b.title.trim().length > 0) {
          picked = b;
          pickedCode = code;
          break;
        }
      }
    }
    if (picked) {
      selected = picked;
      sourceLocale = pickedCode;
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
