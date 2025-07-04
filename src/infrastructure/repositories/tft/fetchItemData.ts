import { itemsSchema } from "@/entities/models/tft/item";

export async function fetchItemsFromJson(): Promise<ReturnType<typeof itemsSchema.parse>> {
  const raw = await import("../../static/data.json");
  const items = raw.default?.items ?? raw.items;

  if (!items) throw new Error("No items found in static data");
  console.log(items);
  return itemsSchema.parse(items);
}