import { unitsSchema } from "@/entities/models/tft/unit";
import type { Unit } from "@/entities/models/tft/types";

export async function fetchUnits(): Promise<Record<string, Unit>> {
  const raw = await import("@/infrastructure/static/data.json");
  const units = raw.default?.units ?? raw.units;

  if (!units) throw new Error("No units found in static data");

  return unitsSchema.parse(units);
}