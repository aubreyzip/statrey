import { z } from "zod";
import { championSchema } from "@/entities/models/tft/champion";

export type Champion = z.infer<typeof championSchema>;