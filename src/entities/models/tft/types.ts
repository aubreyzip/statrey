import { z } from "zod";
import { unitSchema, unitsSchema } from "@/entities/models/tft/unit";
import { itemSchema, itemsSchema } from "@/entities/models/tft/item";
import { traitSchema, traitsSchema } from "@/entities/models/tft/trait";
import { augmentSchema, augmentsSchema } from "@/entities/models/tft/augment";
import { itemizationSchema, itemizationsSchema } from "@/entities/models/tft/itemization";

export type Unit = z.infer<typeof unitSchema>;
export type Units = z.infer<typeof unitsSchema>;

export type Item = z.infer<typeof itemSchema>;
export type Items = z.infer<typeof itemsSchema>

export type Trait = z.infer<typeof traitSchema>;
export type Traits = z.infer<typeof traitsSchema>;

export type Augment = z.infer<typeof augmentSchema>;
export type Augments = z.infer<typeof augmentsSchema>;

export type Itemization = z.infer<typeof itemizationSchema>;
export type Itemizations = z.infer<typeof itemizationsSchema>;