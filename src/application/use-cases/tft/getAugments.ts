import { AugmentRepository } from "@/infrastructure/repositories/tft/augment.repository";

const augmentRepo = new AugmentRepository();

export async function getAugments() {
  return await augmentRepo.getAllSortedByName();
}