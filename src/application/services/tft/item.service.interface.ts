import { Item } from "@/entities/models/tft/types";

export interface IItemService {
  fetchItems(): Promise<Record<string, Item>>;
}