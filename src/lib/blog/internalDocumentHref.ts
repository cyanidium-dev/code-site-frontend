import type { BlogPostInternalRef } from "@/types/blogPost";

/** Builds a locale-agnostic path; next-intl `Link` adds the locale prefix when needed. */
export function buildInternalDocumentHref(
  ref: BlogPostInternalRef | null | undefined
): string | null {
  if (!ref?.slug) return null;
  switch (ref._type) {
    case "blogPost":
      return `/blog/${ref.slug}`;
    case "project":
      return `/portfolio/${ref.slug}`;
    default:
      return `/${ref.slug}`;
  }
}
