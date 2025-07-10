import { unitsSchema } from "@/entities/models/tft/unit";
import type { Unit } from "@/entities/models/tft/types";
import { fetchData } from "./utils";
import { keys } from "@/entities/models/tft/keys";
import { IUnitService } from "@/application/services/tft/unit.service.interface";

export class UnitService implements IUnitService {
  public async fetchUnits(): Promise<Record<string, Unit>> {
    return fetchData(keys.units, unitsSchema);
  }
}