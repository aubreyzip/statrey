import type { Augment } from "@/entities/models/tft/types";

export interface IAugmentRepository {
  getAll(): Promise<Augment[]>;
  getByName(name: string): Promise<Augment | null>;
  getAllSortedByName(): Promise<Augment[]>;
}