import { fetchChampionsFromJson } from "../../infrastructure/tft/fetchStaticChampionData";

export async function getChampions() {
  return await fetchChampionsFromJson();
}