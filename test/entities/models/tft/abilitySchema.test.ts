import { describe, it, expect } from "vitest";
import { abilitySchema } from "@/entities/models/tft/champion";

describe("abilitySchema", () => {
  it("should parse valid ability details", () => {
    const validAbility = {
      details: [
        ["damage", 100, null],
        [null, "cooldown", 5],
        [],
        null,
      ],
    };
    expect(() => abilitySchema.parse(validAbility)).not.toThrow();
  });

  it("should throw if details is missing", () => {
    const invalidAbility = {};
    expect(() => abilitySchema.parse(invalidAbility)).toThrow();
  });

  it("should throw if details is wrong type", () => {
    const invalidAbility = {
      details: ["string-instead-of-array"],
    };
    expect(() => abilitySchema.parse(invalidAbility)).toThrow();
  });
});