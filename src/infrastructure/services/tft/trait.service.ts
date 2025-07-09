import { traitsSchema } from "@/entities/models/tft/trait";
import type { Trait } from "@/entities/models/tft/types";
import { fetchData } from "./utils";
import { keys } from "@/entities/models/tft/keys";

export async function fetchTraits(): Promise<Record<string, Trait>> {
  return fetchData(keys.traits, traitsSchema);
}