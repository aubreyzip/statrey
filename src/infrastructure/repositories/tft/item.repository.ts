import { itemsSchema } from "@/entities/models/tft/item";
import type { Item } from "@/entities/models/tft/types";
import type { IItemRepository } from "@/application/repositories/item.repository.interface";

export class ItemRepository implements IItemRepository {
  private async fetchItemsFromJson(): Promise<Record<string, Item>> {
    const raw = await import("@/infrastructure/static/data.json");
    const items = raw.default?.items ?? raw.items;

    if (!items) throw new Error("No items found in static data");

    return itemsSchema.parse(items);
  }

  public async getAll(): Promise<Item[]> {
    const itemsMap = await this.fetchItemsFromJson();
    return Object.values(itemsMap);
  }

  public async getByName(name: string): Promise<Item | null> {
    const itemsMap = await this.fetchItemsFromJson();
    const item = Object.values(itemsMap).find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    return item ?? null;
  }

  public async getAllSortedByName(): Promise<Item[]> {
    const items = await this.getAll();
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }
}