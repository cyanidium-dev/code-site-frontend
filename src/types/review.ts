export interface Review {
  id: string;
  authorName: string;
  description: string;
  projectLink?: string;
  contentType: "video" | "text" | "image";
  videoUrl?: string;
  reviewText?: string;
  rating?: number;
  order: number;
  createdAt: string;
  status: "published" | "draft" | "archived";
  reviewImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string | null;
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  } | null;
}
