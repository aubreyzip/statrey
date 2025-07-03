"use client";

import { useEffect, useState } from "react";
import { getChampions } from "@/application/tft/getChampions";

export default function ChampionsPage() {
  const [champs, setChamps] = useState<any>(null);

  useEffect(() => {
    getChampions().then(setChamps);
  }, []);

  return (
    <div>
      <h1>TFT Champions</h1>
      <pre>{JSON.stringify(champs?.TFT14_Varus, null, 2)}</pre>
    </div>
  );
}