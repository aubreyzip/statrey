"use client";

import { useEffect, useState } from "react";
import { getAugments } from "@/application/use-cases/tft/getAugments";
import type { Augment } from "@/entities/models/tft/types";

export default function AugmentsPage() {
  const [augments, setAugments] = useState<Augment[] | null>(null);

  useEffect(() => {
    getAugments().then(setAugments);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TFT Augments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {augments?.map((augment) => (
          <div
            key={augment.id}
            className="border border-gray-300 rounded-2xl shadow p-4 bg-white dark:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold mb-2">{augment.name}</h2>

            <div className="text-sm text-gray-500 mb-1">
              <strong>Rank:</strong> {augment.rank}
            </div>

            <div className="text-sm mb-1">
              <strong>Tags:</strong>{" "}
              {augment.tags.length > 0 ? augment.tags.join(", ") : "No tags"}
            </div>

            <div className="text-sm mb-1">
              <strong>Picks:</strong> {augment.picks.map((p, i) => (p ? `✓` : `✗`)).join(" / ")}
            </div>

            {augment.disabled && (
              <div className="text-red-500 text-sm font-semibold mt-2">
                Disabled
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}