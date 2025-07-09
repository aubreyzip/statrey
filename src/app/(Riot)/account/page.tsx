"use client";

import { useState } from "react";
import { getAccount } from "@/application/use-cases/riot/getAccount";
import { Account } from "@/entities/models/riot/types";

export default function AccountPage() {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [accountData, setAccountData] = useState<Account | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAccountData(null);

    try {
      const data = await getAccount(gameName, tagLine);
      setAccountData(data);
    } catch (err: any) {
      setError("Failed to fetch account data. Check name/tag or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Account Lookup</h1>

      <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-sm">
        <input
          type="text"
          placeholder="Game Name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Tag Line"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Loading..." : "Get Account"}
        </button>
      </form>

      {error && <div className="mt-4 text-red-600">{error}</div>}

      {accountData && (
        <div className="mt-6 w-full max-w-md bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Account Info</h2>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
            {JSON.stringify(accountData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}