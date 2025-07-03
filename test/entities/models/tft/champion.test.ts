import { describe, it, expect } from "vitest";
import { championSchema } from "@/entities/models/tft/champion";

describe("championSchema", () => {
  const baseValidChampion = {
    name: "Yasuo",
    stats: {
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
    },
    ability: {
      details: [["damage", 100]],
    },
    tags: ["Fighter", "Assassin"],
  };

  it("should parse a valid champion with itemization", () => {
    const champWithItemization = {
      ...baseValidChampion,
      itemization: {
        starter: ["Doran's Blade"],
        core: ["Infinity Edge"],
      },
    };
    expect(() => championSchema.parse(champWithItemization)).not.toThrow();
  });

  it("should parse a valid champion without itemization", () => {
    expect(() => championSchema.parse(baseValidChampion)).not.toThrow();
  });

  it("should throw if name is missing", () => {
    const invalidChampion = { ...baseValidChampion } as Partial<typeof baseValidChampion>;
    delete invalidChampion.name;
    expect(() => championSchema.parse(invalidChampion)).toThrow();
  });

  it("should throw if tags is not array of strings", () => {
    const invalidChampion = {
      ...baseValidChampion,
      tags: [123],
    };
    expect(() => championSchema.parse(invalidChampion)).toThrow();
  });
});