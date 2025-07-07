import type { Item } from "@/entities/models/tft/types";
import type { IItemRepository } from "@/application/repositories/item.repository.interface";
import { fetchItems } from "@/infrastructure/services/item.service";

export class ItemRepository implements IItemRepository {

  public async getAll(): Promise<Item[]> {
    const itemsMap = await fetchItems();
    return Object.values(itemsMap);
  }

  public async getByName(name: string): Promise<Item | null> {
    const itemsMap = await fetchItems();
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