import { IUnitRepository } from "@/application/repositories/tft/unit.repository.interface";
import type { Unit } from "@/entities/models/tft/types";
import { UnitService } from "@/infrastructure/services/tft/unit.service";

export class UnitRepository implements IUnitRepository {
  private unitService = new UnitService();

  public async getAll(): Promise<Unit[]> {
    const unitsMap = await this.unitService.fetchUnits();
    return Object.values(unitsMap);
  }

  public async getByName(name: string): Promise<Unit | null> {
    const unitsMap = await this.unitService.fetchUnits();
    const unit = Object.values(unitsMap).find(
      (unit) => unit.name.toLowerCase() === name.toLowerCase()
    );
    return unit ?? null;
  }

  public async getAllSortedByName(): Promise<Unit[]> {
    const units = await this.getAll();
    return units.sort((a, b) => a.name.localeCompare(b.name));
  }
}