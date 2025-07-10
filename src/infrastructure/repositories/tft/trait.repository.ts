import { ITraitRepository } from "@/application/repositories/tft/trait.repository.interface";
import type { Trait } from "@/entities/models/tft/types";
import { TraitService } from "@/infrastructure/services/tft/trait.service";

const traitService = new TraitService();

export class TraitRepository implements ITraitRepository {

  public async getAll(): Promise<Trait[]> {
    const traitsMap = await traitService.fetchTraits();
    return Object.values(traitsMap);
  }

  public async getByName(name: string): Promise<Trait | null> {
    const traitsMap = await traitService.fetchTraits();
    const trait = Object.values(traitsMap).find(
      (trait) => trait.name.toLowerCase() === name.toLowerCase()
    );
    return trait ?? null;
  }
  
  public async getAllSortedByName(): Promise<Trait[]> {
    const traits = await this.getAll();
    return traits.sort((a, b) => a.name.localeCompare(b.name));
  }
}