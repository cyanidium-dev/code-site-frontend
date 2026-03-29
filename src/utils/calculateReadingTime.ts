import { Blog } from "@/types/blog";

const countWords = (text: string): number =>
  text.split(/\s+/).filter(Boolean).length;

function wordsFromPortableBlocks(blocks: unknown[] | undefined): number {
  if (!blocks?.length) return 0;
  let n = 0;
  for (const block of blocks) {
    if (!block || typeof block !== "object") continue;
    const b = block as Record<string, unknown>;
    const type = b._type;

    if (type === "block" && Array.isArray(b.children)) {
      for (const child of b.children as { _type?: string; text?: string }[]) {
        if (child?._type === "span" && child.text) {
          n += countWords(child.text);
        }
      }
      continue;
    }

    if (type === "quoteBlock" && typeof b.quote === "string") {
      n += countWords(b.quote);
      continue;
    }

    if (type === "ptTable" && Array.isArray(b.rows)) {
      for (const row of b.rows as { cells?: { text?: string }[] }[]) {
        for (const cell of row.cells ?? []) {
          if (cell?.text) n += countWords(cell.text);
        }
      }
      continue;
    }

    if (type === "ptCta" && typeof b.label === "string") {
      n += countWords(b.label);
      continue;
    }

    if (type === "ptGallery" && Array.isArray(b.images)) {
      for (const img of b.images as { caption?: string }[]) {
        if (img?.caption) n += countWords(img.caption);
      }
      if (typeof b.caption === "string") n += countWords(b.caption);
      continue;
    }

    if (type === "ptImage") {
      if (typeof b.caption === "string") n += countWords(b.caption);
      continue;
    }
  }
  return n;
}

export const calculateReadingTime = (
  article: Blog,
  wordsPerMinute: number = 200
): number => {
  let totalWords = 0;

  if (article.name) totalWords += countWords(article.name);
  if (article.description) totalWords += countWords(article.description);

  if (article.content && Array.isArray(article.content)) {
    totalWords += wordsFromPortableBlocks(article.content as unknown[]);
  }

  return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
};
