import type { Champion } from "@/entities/models/tft/types";

export interface IChampionRepository {
  getAll(): Promise<Champion[]>;
  getAllSortedByName(): Promise<Champion[]>;
  getByName(name: string): Promise<Champion | null>;
}