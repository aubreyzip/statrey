import type { Unit } from "@/entities/models/tft/types";

export interface IUnitRepository {
  getAll(): Promise<Unit[]>;
  getAllSortedByName(): Promise<Unit[]>;
  getByName(name: string): Promise<Unit | null>;
}