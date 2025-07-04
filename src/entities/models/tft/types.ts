import { z } from "zod";
import { unitSchema, unitsSchema } from "@/entities/models/tft/unit";
import { itemSchema, itemsSchema } from "@/entities/models/tft/item";


export type Unit = z.infer<typeof unitSchema>;
export type Units = z.infer<typeof unitsSchema>;
export type Item = z.infer<typeof itemSchema>;
export type Items = z.infer<typeof itemsSchema>
