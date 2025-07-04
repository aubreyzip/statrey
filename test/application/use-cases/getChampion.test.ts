import { describe, it, expect, vi } from "vitest";
import { getChampions } from "@/application/use-cases/tft/getChampions";
import type { Champion } from "@/entities/models/tft/types";

vi.mock("@/infrastructure/repositories/tft/champion.repository", () => {
  const mockChampions: Champion[] = [
    {
      name: "Samira",
      stats: {
        hp: 900,
        mana: 100,
        initialMana: 20,
        damage: 70,
        armor: 40,
        magicResist: 40,
        critMultiplier: 1.4,
        critChance: 0.25,
        attackSpeed: 0.8,
        range: 4,
      },
      itemizationId: "{2ae695df}",
      ability: {
        details: [
          null,
          ["90", "90", "1500"],
          ["500", "500", "5000"],
          ["12", "12", "100"],
        ],
      },
      tags: [],
    },
    {
      name: "Xayah",
      stats: {
        hp: 800,
        mana: 75,
        initialMana: 25,
        damage: 65,
        armor: 30,
        magicResist: 30,
        critMultiplier: 1.4,
        critChance: 0.25,
        attackSpeed: 0.8,
        range: 4,
      },
      itemizationId: "{2ae695df}",
      ability: {
        details: [
          ["150", "150", "400"],
          ["20", "30", "200"],
          null,
          ["35", "35", "100"],
        ],
      },
      tags: [],
    },
  ];

  return {
    ChampionRepository: vi.fn().mockImplementation(() => ({
      getAllSortedByName: vi.fn().mockResolvedValue(mockChampions),
    })),
  };
});

describe("getChampions use case", () => {
  it("should return sorted champions", async () => {
    const champions = await getChampions();
    expect(champions).toHaveLength(2);
    expect(champions[0].name).toBe("Samira");
    expect(champions[1].name).toBe("Xayah");
  });
});