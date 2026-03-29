import type { BlogPostSlugField } from "@/types/blogPost";

/** Sanity возвращает `slug` как `{ _type: 'slug', current: '...' }`. */
export function slugFromBlogPost(slug: BlogPostSlugField): string {
  if (slug == null) return "";
  if (typeof slug === "string") return slug;
  return slug.current?.trim() ?? "";
}
