import { Itemization } from "@/entities/models/tft/types";

export interface IItemizationRepository {
  getAll(): Promise<Itemization[]>;
}