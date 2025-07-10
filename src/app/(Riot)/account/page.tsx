"use client";

import { useState } from "react";
import { getAccount } from "@/application/use-cases/riot/getAccount";
import { getAvaragePlacement } from "@/application/use-cases/riot/getAvaragePlacement";
import { Account } from "@/entities/models/riot/types";

export default function AccountPage() {
  const [inputValue, setInputValue] = useState("");
  const [accountData, setAccountData] = useState<Account | null>(null);
  const [averagePlacement, setAveragePlacement] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAccountData(null);
    setAveragePlacement(null);

    const [gameName, tagLine] = inputValue.split("#");

    if (!gameName || !tagLine) {
      setError("Please enter in the format: GameName#TagLine (e.g., Just1Night#TR1)");
      setLoading(false);
      return;
    }

    try {
      const account = await getAccount(gameName, tagLine);
      setAccountData(account);

      const placement = await getAvaragePlacement(account.puuid);
      setAveragePlacement(placement);
    } catch (err: any) {
      setError("Failed to fetch account or placement data.");
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
          placeholder="GameName#TagLine"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
          {averagePlacement === null ? (
            <div className="mt-4 flex items-center space-x-2 text-blue-800 font-medium">
              <svg
                className="animate-spin h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span>Calculating Average Placement...</span>
            </div>
          ) : (
            <div className="mt-4 text-blue-800 font-medium">
              🧮 Average Placement: <strong>{averagePlacement.toFixed(2)}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}