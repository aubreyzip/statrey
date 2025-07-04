import { unitsSchema } from "@/entities/models/tft/unit";
import type { Unit } from "@/entities/models/tft/types";
import type { IUnitRepository } from "@/application/repositories/unit.interface";

export class UnitRepository implements IUnitRepository {
  
  private async fetchUnitsFromJson(): Promise<Record<string, Unit>> {
    const raw = await import("@/infrastructure/static/data.json");
    const units = raw.default?.units ?? raw.units;

    if (!units) throw new Error("No units found in static data");

    return unitsSchema.parse(units);
  }

  public async getAll(): Promise<Unit[]> {
    const unitsMap = await this.fetchUnitsFromJson();
    return Object.values(unitsMap);
  }

  public async getByName(name: string): Promise<Unit | null> {
    const unitsMap = await this.fetchUnitsFromJson();
    const unit = Object.values(unitsMap).find((unit) => unit.name.toLowerCase() === name.toLowerCase());
    return unit ?? null;
  }
  
  public async getAllSortedByName(): Promise<Unit[]> {
  const units = await this.getAll();
  return units.sort((a, b) => a.name.localeCompare(b.name));
  }
}