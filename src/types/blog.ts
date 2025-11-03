// types/blog.ts
import type { PortableTextBlock } from "sanity";

// Тип для посилання (annotation link)
export interface PortableTextLink {
  _type: "link";
  href: string;
  blank?: boolean;
}

// Тип для блоку тексту
export type PortableTextCustomBlock = PortableTextBlock & {
  _type: "block";
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  children: {
    _key: string;
    _type: "span";
    marks?: string[];
    text: string;
  }[];
  markDefs?: PortableTextLink[];
};

// Тип для зображення всередині контенту
export interface PortableTextImage {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// Об’єднаний тип одного елемента контенту (текст або зображення)
export type BlogContentBlock = PortableTextCustomBlock | PortableTextImage;

// Контент певною мовою (content[$lang])
export type BlogContent = BlogContentBlock[];

// Основний тип статті блогу
export interface Blog {
  id: string;
  name: string;
  description: string;
  slug: string;
  previewImage?: { url: string; alt?: string | null } | null;
  mainImageMobile?: { url: string; alt?: string | null } | null;
  mainImageDesktop?: { url: string; alt?: string | null } | null;
  content?: BlogContent;
  seo?: {
    title?: string | null;
    subtitle?: string | null;
    keywords?: string | null;
  } | null;
  schemaOrg?: string | null;
  order?: number | null;
  createdAt?: string | null;
}
