import type { Blog } from "@/types/blog";
import type { BlogLocaleCode, BlogPostDocument } from "@/types/blogPost";
import { resolveBlogLocaleContent } from "./resolveBlogLocaleContent";

export type BlogPostListRow = Pick<BlogPostDocument, "ru" | "uk" | "en"> & {
  id: string;
  /** Из спискового GROQ всегда строка `slug.current` */
  slug: string;
  previewImage?: { url?: string | null; alt?: string | null };
};

export function mapBlogPostToListItem(
  row: BlogPostListRow,
  locale: BlogLocaleCode
): Blog {
  const doc: BlogPostDocument = {
    _id: row.id,
    slug: row.slug as BlogPostDocument["slug"],
    ru: row.ru,
    uk: row.uk,
    en: row.en,
  };
  const resolved = resolveBlogLocaleContent(doc, locale);

  return {
    id: row.id,
    slug: row.slug,
    name: resolved.title || "—",
    description: resolved.excerpt || "",
    previewImage: row.previewImage?.url
      ? {
          url: row.previewImage.url,
          alt: row.previewImage.alt,
        }
      : undefined,
    content: resolved.body ?? [],
  };
}
