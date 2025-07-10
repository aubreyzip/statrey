import { Augment } from "@/entities/models/tft/types";

export interface IAugmentService {
  fetchAugments(): Promise<Record<string, Augment>>;
}