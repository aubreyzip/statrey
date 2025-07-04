import { UnitRepository } from "@/infrastructure/repositories/tft/unit.repository";

const unitRepo = new UnitRepository();

export async function getUnits() {
  return await unitRepo.getAllSortedByName();
}