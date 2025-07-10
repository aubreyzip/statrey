import { Unit } from "@/entities/models/tft/types";

export interface IUnitService {
  fetchUnits(): Promise<Record<string, Unit>>;
}