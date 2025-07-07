import { ItemizationRepository } from "@/infrastructure/repositories/tft/itemization.reopsitory";

const augmentRepo = new ItemizationRepository();

export async function getItemizations() {
  return await augmentRepo.getAll();
}