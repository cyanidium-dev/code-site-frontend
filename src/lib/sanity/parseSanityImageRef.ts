/** Парсит ref вида `image-<id>-<W>x<H>-<format>` из Sanity asset._ref. */
export function parseSanityImageRef(ref: string | undefined | null): {
  id?: string;
  width?: number;
  height?: number;
  format?: string;
} {
  if (!ref) return {};
  const parts = ref.split("-");
  if (parts.length < 4) return {};
  const [, id, dimensions, format] = parts;
  const [wStr, hStr] = (dimensions || "").split("x");
  const width = Number(wStr);
  const height = Number(hStr);
  return {
    id,
    width: Number.isFinite(width) ? width : undefined,
    height: Number.isFinite(height) ? height : undefined,
    format,
  };
}
