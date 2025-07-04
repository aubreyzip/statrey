import { z } from "zod";
import { championSchema } from "@/entities/models/tft/champion";
import { itemSchema } from "@/entities/models/tft/item";

export type Champion = z.infer<typeof championSchema>;

export type Item = z.infer<typeof itemSchema>;
