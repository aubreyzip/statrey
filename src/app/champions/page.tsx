"use client";

import { useEffect, useState } from "react";
import { getChampions } from "@/application/use-cases/tft/getChampions";
import type { Champion } from "@/entities/models/tft/types";

export default function ChampionsPage() {
  const [champs, setChamps] = useState<Champion[] | null>(null);

  useEffect(() => {
    getChampions().then(setChamps);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TFT Champions</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {champs?.map((champ) => (
          <div
            key={champ.name}
            className="border border-gray-300 rounded-2xl shadow p-4 bg-white dark:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold mb-2">{champ.name}</h2>

            <div className="text-sm text-gray-500 mb-2">
              {champ.tags.length > 0 ? champ.tags.join(", ") : "No traits"}
            </div>

            <div className="text-sm">
              <strong>HP:</strong> {champ.stats.hp} &nbsp;
              <strong>DMG:</strong> {champ.stats.damage} &nbsp;
              <strong>AS:</strong> {champ.stats.attackSpeed}
            </div>

            <div className="text-sm mt-1">
              <strong>Range:</strong> {champ.stats.range}
            </div>

            {/* Add more stats or ability info if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}