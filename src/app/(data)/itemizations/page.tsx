"use client";

import { useEffect, useState } from "react";
import { getItemizations } from "@/application/use-cases/tft/getItemizations";
import { Itemization } from "@/entities/models/tft/types";

export default function ItemizationsPage() {
  const [itemizations, setItemizations] = useState<Itemization[] | null>(null);

  useEffect(() => {
    getItemizations().then(setItemizations);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TFT Itemizations</h1>

      {itemizations ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(itemizations).map(([buildId, items]) => (
            <div
              key={buildId}
              className="border border-gray-300 rounded-2xl shadow p-4 bg-white dark:bg-zinc-900"
            >
              <h2 className="text-lg font-semibold mb-2">Build ID: <code>{buildId}</code></h2>

              <div className="text-sm text-gray-500 mb-1">
                <strong>Items:</strong>
              </div>
              <ul className="list-disc list-inside text-sm">
                {items.map((itemName) => (
                  <li key={itemName}>{itemName}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading itemizations...</div>
      )}
    </div>
  );
}