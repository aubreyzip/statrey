import type { Item } from "@/entities/models/tft/types";

export interface IItemRepository {
  getAll(): Promise<Item[]>;
  getByName(name: string): Promise<Item | null>;
  getAllSortedByName(): Promise<Item[]>;
}