import { createClient } from "next-sanity";

/** Совпадает с `sanity.config` / docs sanity-frontend-guide.md */
export const client = createClient({
  projectId: "vh20xg14",
  dataset: "production",
  apiVersion: "2024-11-21",
  useCdn: process.env.NODE_ENV === "production",
});
