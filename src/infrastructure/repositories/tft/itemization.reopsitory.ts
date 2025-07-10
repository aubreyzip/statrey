import { IItemizationRepository } from "@/application/repositories/tft/itemization.repository.interface";
import { Itemization } from "@/entities/models/tft/types";
import { ItemizationService } from "@/infrastructure/services/tft/itemization.service";

const itemizationService = new ItemizationService();

export class ItemizationRepository implements IItemizationRepository {

  public async getAll(): Promise<Itemization[]> {
    const itemizationsMap = await itemizationService.fetchItemizations();
    return Object.values(itemizationsMap);
  }
}