"use client";

import { useEffect, useState } from "react";
import { getItems } from "@/application/use-cases/tft/getItems";
import type { Item } from "@/entities/models/tft/types";

export default function ItemsPage() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TFT Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.map((item) => (
          <div key={item.id} className="border border-gray-300 rounded-2xl shadow p-4 bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <div className="text-sm text-gray-500 mb-2">
              {item.tags.length > 0 ? item.tags.join(", ") : "No tags"}
            </div>
            <div className="text-sm">
              <strong>Components:</strong>{" "}
              {item.from.length > 0 ? item.from.join(" + ") : "None"}
            </div>
            <div className="text-sm mt-2">
              <strong>Effects:</strong>
              <ul className="list-disc list-inside mt-1">
                {Object.entries(item.effects).map(([effectName, value]) => (
                  <li key={effectName}>
                    {effectName}: {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}