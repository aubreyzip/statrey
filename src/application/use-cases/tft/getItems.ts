import { ItemRepository } from "@/infrastructure/repositories/tft/item.repository";

const itemRepo = new ItemRepository();

export async function getItems() {
  return await itemRepo.getAllSortedByName();
}