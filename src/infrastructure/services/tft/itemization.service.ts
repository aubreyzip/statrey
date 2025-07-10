import { itemizationsSchema } from "@/entities/models/tft/itemization";
import { Itemization } from "@/entities/models/tft/types";
import { fetchData } from "./utils";
import { keys } from "@/entities/models/tft/keys";
import { IItemizationService } from "@/application/services/tft/itemization.service.interface";

export class ItemizationService implements IItemizationService {
  public async fetchItemizations(): Promise<Record<string, Itemization>> {
    return fetchData(keys.itemization, itemizationsSchema);
  }
}