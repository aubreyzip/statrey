import { championsSchema } from "@/entities/models/tft/champion";
import type { Champion } from "@/entities/models/tft/types";
import type { IChampionRepository } from "@/application/repositories/champion.interface";

export class ChampionRepository implements IChampionRepository {
  
  private async fetchChampionsFromJson(): Promise<Record<string, Champion>> {
    const raw = await import("@/infrastructure/static/data.json");
    const champions = raw.default?.units ?? raw.units;

    if (!champions) throw new Error("No champions found in static data");

    return championsSchema.parse(champions);
  }

  public async getAll(): Promise<Champion[]> {
    const championsMap = await this.fetchChampionsFromJson();
    return Object.values(championsMap);
  }

  public async getByName(name: string): Promise<Champion | null> {
    const championsMap = await this.fetchChampionsFromJson();
    const champion = Object.values(championsMap).find((champ) => champ.name.toLowerCase() === name.toLowerCase());
    return champion ?? null;
  }
  
  public async getAllSortedByName(): Promise<Champion[]> {
  const champions = await this.getAll();
  return champions.sort((a, b) => a.name.localeCompare(b.name));
  }
}