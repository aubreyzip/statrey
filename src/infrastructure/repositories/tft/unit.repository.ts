import type { Unit } from "@/entities/models/tft/types";
import type { IUnitRepository } from "@/application/repositories/unit.repository.interface";
import { fetchUnits } from "@/infrastructure/services/unit.service";

export class UnitRepository implements IUnitRepository {

  public async getAll(): Promise<Unit[]> {
    const unitsMap = await fetchUnits();
    return Object.values(unitsMap);
  }

  public async getByName(name: string): Promise<Unit | null> {
    const unitsMap = await fetchUnits();
    const unit = Object.values(unitsMap).find((unit) => unit.name.toLowerCase() === name.toLowerCase());
    return unit ?? null;
  }
  
  public async getAllSortedByName(): Promise<Unit[]> {
  const units = await this.getAll();
  return units.sort((a, b) => a.name.localeCompare(b.name));
  }
}