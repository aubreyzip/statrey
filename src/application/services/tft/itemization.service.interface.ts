import { Itemization } from "@/entities/models/tft/types";

export interface IItemizationService {
  fetchItemizations(): Promise<Record<string, Itemization>>;
}