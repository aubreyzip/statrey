import type { Augment } from "@/entities/models/tft/types";
import { AugmentService } from "@/infrastructure/services/tft/augment.service";
import { IAugmentRepository } from "@/application/repositories/tft/augment.repository.interface";

const augmentService = new AugmentService();

export class AugmentRepository implements IAugmentRepository {

  public async getAll(): Promise<Augment[]> {
    const augmentsMap = await augmentService.fetchAugments();
    return Object.values(augmentsMap);
  }

  public async getByName(name: string): Promise<Augment | null> {
    const augmentsMap = await augmentService.fetchAugments();
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