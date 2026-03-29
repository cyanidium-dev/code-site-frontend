import type { PortableTextBlock } from "sanity";

/** Supported UI locales (matches next-intl routing). */
export type BlogLocaleCode = "ru" | "uk" | "en";

export interface BlogPostSeo {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
}

export interface SanityImageAssetRef {
  _id: string;
  url?: string;
  metadata?: { dimensions?: { width?: number; height?: number } };
}

/** Cover image as returned by GROQ (image field + asset dereference). */
export interface BlogCoverImage {
  asset?: SanityImageAssetRef | null;
  alt?: string | null;
  hotspot?: unknown;
  crop?: unknown;
}

export interface BlogPostInternalRef {
  _type?: string;
  slug?: string | null;
}

/** Portable Text: inline image block (legacy / default). */
export interface PtInlineImageBlock {
  _key?: string;
  _type: "image";
  asset?: { _ref?: string; _type?: "reference"; url?: string };
  alt?: string;
}

/**
 * Поле `asset` в Studio — тип `image`: в данных это объект
 * `{ _type: "image", asset: { _ref, _type: "reference" } }`, а не плоский asset.
 */
export interface PtImageBlock {
  _key?: string;
  _type: "ptImage";
  asset?: {
    _type?: "image";
    asset?: {
      _ref?: string;
      _type?: "reference";
      url?: string;
      metadata?: { dimensions?: { width?: number; height?: number } };
    };
    url?: string;
    metadata?: { dimensions?: { width?: number; height?: number } };
    hotspot?: unknown;
    crop?: unknown;
  } | null;
  /** Старый вариант разметки (если встретится в данных) */
  image?: {
    asset?: SanityImageAssetRef | null;
    alt?: string | null;
    hotspot?: unknown;
    crop?: unknown;
  } | null;
  alt?: string | null;
  caption?: string | null;
  orientation?: "landscape" | "portrait" | null;
}

export interface PtGalleryImageItem {
  _key?: string;
  asset?: SanityImageAssetRef | null;
  alt?: string | null;
  caption?: string | null;
}

export interface PtGalleryBlock {
  _key?: string;
  _type: "ptGallery";
  images?: PtGalleryImageItem[] | null;
  caption?: string | null;
}

export interface PtTableCell {
  text?: string | null;
  strong?: boolean | null;
}

export interface PtTableRow {
  cells?: PtTableCell[] | null;
}

export interface PtTableBlock {
  _key?: string;
  _type: "ptTable";
  caption?: string | null;
  hasHeaderRow?: boolean | null;
  rows?: PtTableRow[] | null;
}

export interface PtCtaBlock {
  _key?: string;
  _type: "ptCta";
  label?: string | null;
  externalUrl?: string | null;
  internalReference?: BlogPostInternalRef | null;
  variant?: string | null;
  size?: string | null;
  openInNewTab?: boolean | null;
}

export interface QuoteBlockBlock {
  _key?: string;
  _type: "quoteBlock";
  quote?: string | null;
  author?: string | null;
  role?: string | null;
}

export type BlogPostBodyBlock =
  | PortableTextBlock
  | PtInlineImageBlock
  | PtImageBlock
  | PtGalleryBlock
  | PtTableBlock
  | PtCtaBlock
  | QuoteBlockBlock;

export interface BlogPostLocaleFields {
  title?: string | null;
  excerpt?: string | null;
  body?: BlogPostBodyBlock[] | null;
  seo?: BlogPostSeo | null;
}

/** Как в Sanity: slug — объект `{ current }` или строка после нормализации. */
export type BlogPostSlugField =
  | string
  | { _type?: string; current?: string | null }
  | null
  | undefined;

export interface BlogPostDocument {
  _id: string;
  _type?: string;
  _updatedAt?: string | null;
  slug?: BlogPostSlugField;
  coverImage?: BlogCoverImage | null;
  publishedAt?: string | null;
  author?: string | null;
  ru?: BlogPostLocaleFields | null;
  uk?: BlogPostLocaleFields | null;
  en?: BlogPostLocaleFields | null;
}

export interface ResolvedBlogLocale extends BlogPostLocaleFields {
  /** Which localized block was selected before RU fallback. */
  sourceLocale: BlogLocaleCode;
  /** Effective SEO after merging with RU fallback for empty fields. */
  seo: BlogPostSeo;
}
