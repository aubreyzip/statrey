import { IItemizationRepository } from "@/application/repositories/tft/itemization.repository.interface";
import { Itemization } from "@/entities/models/tft/types";
import { fetchItemizations } from "@/infrastructure/services/tft/itemization.service";

export class ItemizationRepository implements IItemizationRepository {

  public async getAll(): Promise<Itemization[]> {
    const itemizationsMap = await fetchItemizations();
    return Object.values(itemizationsMap);
  }
}