import { fetchAugments } from "@/infrastructure/services/tft/augment.service";
import type { Augment } from "@/entities/models/tft/types";
import { IAugmentRepository } from "@/application/repositories/augment.repository.interface";


export class AugmentRepository implements IAugmentRepository {

  public async getAll(): Promise<Augment[]> {
    const augmentsMap = await fetchAugments();
    return Object.values(augmentsMap);
  }

  public async getByName(name: string): Promise<Augment | null> {
    const augmentsMap = await fetchAugments();
    const augment = Object.values(augmentsMap).find(
      (augment) => augment.name.toLowerCase() === name.toLowerCase()
    );
    return augment ?? null;
  }

  public async getAllSortedByName(): Promise<Augment[]> {
    const augments = await this.getAll();
    return augments.sort((a, b) => a.name.localeCompare(b.name));
  }
}