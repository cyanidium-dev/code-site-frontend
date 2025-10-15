import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "vh20xg14",
  dataset: "production",
  apiVersion: "2025-10-15",
  useCdn: true,
});
