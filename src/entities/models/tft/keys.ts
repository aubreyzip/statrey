export const keys = {
  units: "units",
  items: "items",
  traits: "traits",
  augments: "augments",
  itemization: "itemization",
} as const;

export type StaticJsonKeys = keyof typeof keys;