import { z } from "zod";
import { championSchema, championsSchema } from "@/entities/models/tft/champion";
import { itemSchema, itemsSchema } from "@/entities/models/tft/item";


export type Champion = z.infer<typeof championSchema>;
export type Champions = z.infer<typeof championsSchema>;
export type Item = z.infer<typeof itemSchema>;
export type Items = z.infer<typeof itemsSchema>
