import { describe, it, expect } from "vitest";
import { unitStatsSchema } from "@/entities/models/tft/unit";

describe("unitStatsSchema", () => {
  it("should parse valid unit stats", () => {
    const validStats = {
      hp: 600,
      mana: 300,
      initialMana: 50,
      damage: 70,
      armor: 30,
      magicResist: 32,
      critMultiplier: 2,
      critChance: 0.25,
      attackSpeed: 0.7,
      range: 550,
    };
    expect(() => unitStatsSchema.parse(validStats)).not.toThrow();
  });

  it("should throw on missing fields", () => {
    const invalidStats = {
      hp: 600,
      mana: 300,
      
    };
    expect(() => unitStatsSchema.parse(invalidStats)).toThrow();
  });

  it("should throw on wrong type", () => {
    const invalidStats = {
      hp: "600",
      mana: 300,
      initialMana: 50,
      damage: 70,
      armor: 30,
      magicResist: 32,
      critMultiplier: 2,
      critChance: 0.25,
      attackSpeed: 0.7,
      range: 550,
    };
    expect(() => unitStatsSchema.parse(invalidStats)).toThrow();
  });
});