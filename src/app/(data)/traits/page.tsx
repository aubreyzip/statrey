"use client";

import { useEffect, useState } from "react";
import { getTraits } from "@/application/use-cases/tft/getTraits";
import type { Trait } from "@/entities/models/tft/types";

export default function TraitsPage() {
  const [traits, setTraits] = useState<Trait[] | null>(null);

  useEffect(() => {
    getTraits().then(setTraits);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TFT Traits</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {traits?.map((trait) => (
          <div
            key={trait.name}
            className="border border-gray-300 rounded-2xl shadow p-4 bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">{trait.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}