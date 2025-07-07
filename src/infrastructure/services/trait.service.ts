import { traitsSchema } from "@/entities/models/tft/trait";
import type { Trait } from "@/entities/models/tft/types";

export async function fetchTraits(): Promise<Record<string, Trait>> {
  const raw = await import("@/infrastructure/static/data.json");
  const traits = raw.default?.traits ?? raw.traits;

  if (!traits) throw new Error("No traşts found in static data");

  return traitsSchema.parse(traits);
}