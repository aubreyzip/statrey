import { augmentsSchema } from "@/entities/models/tft/augment";
import type { Augment } from "@/entities/models/tft/types";
import { fetchData } from "./utils";
import { keys } from "@/entities/models/tft/keys";
import { IAugmentService } from "@/application/services/tft/augment.service.interface";

export class AugmentService implements IAugmentService {
  public async fetchAugments(): Promise<Record<string, Augment>> {
    return fetchData(keys.augments, augmentsSchema);
  }
}