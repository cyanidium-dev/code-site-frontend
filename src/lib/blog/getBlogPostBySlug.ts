import { client } from "@/lib/sanityClient";
import { blogPostBySlugQuery } from "@/lib/queries";
import type { BlogPostDocument } from "@/types/blogPost";

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostDocument | null> {
  if (!slug) return null;
  try {
    const post = await client.fetch<BlogPostDocument | null>(
      blogPostBySlugQuery,
      { slug }
    );
    return post ?? null;
  } catch (e) {
    console.error("getBlogPostBySlug failed:", e);
    return null;
  }
}
