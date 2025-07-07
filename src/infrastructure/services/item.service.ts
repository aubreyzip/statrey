import { itemsSchema } from "@/entities/models/tft/item";
import type { Item } from "@/entities/models/tft/types";

export async function fetchItems(): Promise<Record<string, Item>> {
  const raw = await import("@/infrastructure/static/data.json");
  const items = raw.default?.items ?? raw.items;

  if (!items) throw new Error("No units found in static data");

  return itemsSchema.parse(items);
}