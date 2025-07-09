import { unitsSchema } from "@/entities/models/tft/unit";
import type { Unit } from "@/entities/models/tft/types";
import { fetchData } from "./fetch";
import { keys } from "@/entities/models/tft/keys";

export async function fetchUnits(): Promise<Record<string, Unit>> {
  return fetchData(keys.units, unitsSchema);
}