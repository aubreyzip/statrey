import { augmentsSchema } from "@/entities/models/tft/augment";
import type { Augment } from "@/entities/models/tft/types";

export async function fetchAugments(): Promise<Record<string, Augment>> {
  const raw = await import("@/infrastructure/static/data.json");
  const augments = raw.default?.augments ?? raw.augments;

  if (!augments) throw new Error("No augments found in static data");

  return augmentsSchema.parse(augments);
}