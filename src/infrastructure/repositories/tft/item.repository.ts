import type { Item } from "@/entities/models/tft/types";
import type { IItemRepository } from "@/application/repositories/tft/item.repository.interface";
import ItemService from "@/infrastructure/services/tft/item.service";

const itemService = new ItemService();

export class ItemRepository implements IItemRepository {

  public async getAll(): Promise<Item[]> {
    const itemsMap = await itemService.fetchItems();
    return Object.values(itemsMap);
  }

  public async getByName(name: string): Promise<Item | null> {
    const itemsMap = await itemService.fetchItems();
    const item = (Object.values(itemsMap) as Item[]).find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    return item ?? null;
  }

  public async getAllSortedByName(): Promise<Item[]> {
    const items = await this.getAll();
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }
}