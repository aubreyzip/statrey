import { itemsSchema } from "@/entities/models/tft/item";
import type { Item } from "@/entities/models/tft/types";
import { fetchData } from "./utils";
import { keys } from "@/entities/models/tft/keys";
import { IItemService } from "@/application/services/tft/item.service.interface";

export default class ItemService implements IItemService {
  public async fetchItems(): Promise<Record<string, Item>> {
    return fetchData(keys.items, itemsSchema);
  }
}