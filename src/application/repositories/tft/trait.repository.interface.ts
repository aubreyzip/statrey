import type { Trait } from "@/entities/models/tft/types";

export interface ITraitRepository {
  getAll(): Promise<Trait[]>;
  getAllSortedByName(): Promise<Trait[]>;
  getByName(name: string): Promise<Trait | null>;
}