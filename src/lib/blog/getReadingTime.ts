const DEFAULT_WPM = 200;

/**
 * Время чтения (минуты) по полному Portable Text `body`.
 * Учитываются только блоки `_type === "block"` и дочерние `_type === "span"` с полем `text`.
 */
export function getReadingTime(
  body: unknown[] | null | undefined,
  wordsPerMinute: number = DEFAULT_WPM
): number {
  if (!body?.length) return 1;

  const text = body
    .filter((block) => {
      if (!block || typeof block !== "object") return false;
      return (block as { _type?: string })._type === "block";
    })
    .map((block) => {
      const b = block as {
        children?: { _type?: string; text?: string }[];
      };
      if (!Array.isArray(b.children)) return "";
      return b.children
        .filter((child) => child?._type === "span")
        .map((child) => (typeof child.text === "string" ? child.text : ""))
        .join(" ");
    })
    .join(" ");

  const words = text.split(/\s+/).filter(Boolean);
  const minutes = Math.ceil(words.length / wordsPerMinute);
  return Math.max(1, minutes);
}
