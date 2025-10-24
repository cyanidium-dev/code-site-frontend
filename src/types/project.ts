// TypeScript типи для Sanity даних

export interface SanityImage {
  asset: {
    _id: string;
    url: string;
  };
  hotspot: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface ProjectType {
  id: string;
  name: string;
  icon: string;
}

export interface TextBlock {
  type: "textBlock";
  firstParagraph: string;
  secondParagraph?: string;
}

export interface ImageBlock {
  type: "imageBlock";
  mobileImage: SanityImage;
  desktopImage: SanityImage;
  alt: string;
}

export interface ReviewBlock {
  type: "reviewBlock";
  review: {
    id: string;
    authorName: string;
    description: string;
    projectLink?: string;
    contentType: "video" | "text";
    videoUrl?: string;
    reviewText?: string;
    rating?: number;
  };
}

export type ProjectBlock = TextBlock | ImageBlock | ReviewBlock;

export interface Project {
  id: string;
  name: string;
  clientName: string;
  shortDescription: string;
  slug: string;
  previewImage: SanityImage;
  mainImage: SanityImage;
  categories: ProjectCategory[];
  type: ProjectType;
  blocks: ProjectBlock[];
  websiteUrl: string;
  advantages: string[];
  portfolioTitle: string;
  portfolioDescription: string;
  order: number;
  createdAt: string;
}
