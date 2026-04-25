import type { NicheExtras } from "@/types/nicheExtras";
import { medicineExtras } from "./medicine";

const registry: Record<string, NicheExtras> = {
  medicine: medicineExtras,
};

export function getNicheExtras(slug: string): NicheExtras | undefined {
  return registry[slug];
}
