export enum RegionalRouting {
  AMERICAS = "AMERICAS",
  EUROPE = "EUROPE",
  ASIA = "ASIA",
  SEA = "SEA",
}

export type RegionalRoutingType = keyof typeof RegionalRouting;