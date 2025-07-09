import { itemsSchema } from "@/entities/models/tft/item";
import type { Item } from "@/entities/models/tft/types";
import { fetchData } from "./fetch";
import { keys } from "@/entities/models/tft/keys";

export async function fetchItems(): Promise<Record<string, Item>> {
  return fetchData(keys.items, itemsSchema);
}