import { expect, it } from "vitest";
import { itemizationSchema } from "@/entities/models/tft/unit";

it("parses valid itemization map", () => {
  const example = {
    "{8377a680}": [
      "SpearOfShojin",
      "InfinityEdge",
      "Deathblade",
      "BlueBuff",
    ],
    "{9eb7b8a6}": [],
  };

  const parsed = itemizationSchema.parse(example);

  expect(parsed["{8377a680}"]).toContain("InfinityEdge");
  expect(parsed["{9eb7b8a6}"]).toEqual([]);
});

it("throws when an item list contains a non-string", () => {
  const badExample = {
    "{8377a680}": ["InfinityEdge", 42],
  };

  expect(() => itemizationSchema.parse(badExample)).toThrow();
});

it("throws when a key maps to something that's not an array", () => {
  const badExample = {
    "{8377a680}": "InfinityEdge",
  };

  expect(() => itemizationSchema.parse(badExample)).toThrow();
});

it("throws when input is not an object", () => {
  const badExample = null;

  expect(() => itemizationSchema.parse(badExample)).toThrow();
});

it("parses empty itemization map", () => {
  const emptyExample = {};

  const parsed = itemizationSchema.parse(emptyExample);

  expect(parsed).toEqual({});
});