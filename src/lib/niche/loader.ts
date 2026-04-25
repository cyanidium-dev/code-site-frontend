import { promises as fs } from "fs";
import path from "path";
import type { NicheLandingData } from "@/types/niche";

const NICHE_DIR = path.join(process.cwd(), "content/data/uk/industries");

export async function loadNicheData(
  slug: string
): Promise<NicheLandingData | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  try {
    const filePath = path.join(NICHE_DIR, `${slug}.json`);
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as NicheLandingData;
  } catch {
    return null;
  }
}

export async function getAllNicheSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(NICHE_DIR);
    return files
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, ""));
  } catch {
    return [];
  }
}

export async function loadAllNiches(): Promise<NicheLandingData[]> {
  const slugs = await getAllNicheSlugs();
  const all = await Promise.all(slugs.map((slug) => loadNicheData(slug)));
  return all.filter((n): n is NicheLandingData => n !== null);
}
