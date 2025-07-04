import { ChampionRepository } from "@/infrastructure/repositories/tft/champion.repository";

const championRepo = new ChampionRepository();

export async function getChampions() {
  return await championRepo.getAllSortedByName();
}