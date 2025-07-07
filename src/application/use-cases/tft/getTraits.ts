import { TraitRepository } from "@/infrastructure/repositories/tft/trait.repository";

const TraitRepo = new TraitRepository();

export async function getTraits() {
  return await TraitRepo.getAllSortedByName();
}