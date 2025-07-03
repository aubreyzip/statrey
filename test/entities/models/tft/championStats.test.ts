import { describe, it, expect } from "vitest";
import { championStatsSchema } from "@/entities/models/tft/champion";

describe("championStatsSchema", () => {
  it("should parse valid champion stats", () => {
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
    expect(() => championStatsSchema.parse(validStats)).not.toThrow();
  });

  it("should throw on missing fields", () => {
    const invalidStats = {
      hp: 600,
      mana: 300,
      // missing damage
    };
    expect(() => championStatsSchema.parse(invalidStats)).toThrow();
  });

  it("should throw on wrong type", () => {
    const invalidStats = {
      hp: "600",    //string instead of number
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
    expect(() => championStatsSchema.parse(invalidStats)).toThrow();
  });
});