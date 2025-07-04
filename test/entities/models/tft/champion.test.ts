import { describe, it, expect } from "vitest";
import { championSchema } from "@/entities/models/tft/champion";

describe("championSchema - TFT14_Jinx example", () => {
  const validJinx = {
    name: "Jinx",
    stats: {
      hp: 650,
      mana: 50,
      initialMana: 0,
      damage: 55,
      armor: 25,
      magicResist: 25,
      critMultiplier: 1.4,
      critChance: 0.25,
      attackSpeed: 0.7,
      range: 4,
    },
    itemizationId: "{2ae695df}",
    ability: {
      details: [
        ["140", "140", "150"],
        ["15", "25", "40"],
        null,
      ],
    },
    tags: [],
  };

  it("should parse valid Jinx data", () => {
    expect(() => championSchema.parse(validJinx)).not.toThrow();
  });

  it("should throw if stats are missing", () => {
    const invalid = { ...validJinx } as any;
    delete invalid.stats;
    expect(() => championSchema.parse(invalid)).toThrow();
  });

  it("should throw if ability.details is not properly structured", () => {
    const invalid = {
      ...validJinx,
      ability: { details: ["not", "nested", "arrays"] },
    };
    expect(() => championSchema.parse(invalid)).toThrow();
  });

  it("should throw if itemizationId is a number instead of string", () => {
    const invalid = {
      ...validJinx,
      itemizationId: 12345,
    };
    expect(() => championSchema.parse(invalid)).toThrow();
  });
});