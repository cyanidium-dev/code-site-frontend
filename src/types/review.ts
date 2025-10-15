export interface Review {
  id: string;
  authorName: string;
  description: string;
  projectLink?: string;
  contentType: "video" | "text";
  videoUrl?: string;
  reviewText?: string;
  rating?: number;
  order: number;
  createdAt: string;
  status: "published" | "draft" | "archived";
}
