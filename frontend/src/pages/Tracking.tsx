import { trackShipment } from "../api/pageContent";
import { useState } from "react";

export default function TrackingPage() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await trackShipment(number);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Invalid Tracking Number");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
      
      <h1 className="text-2xl font-bold mb-4 text-[#3e2f56]">
        Track Your Shipment
      </h1>

      <input
        className="border border-gray-300 px-4 py-2 rounded w-80 mb-4 shadow-sm"
        placeholder="Enter Tracking Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        className="px-6 py-2 rounded bg-[#3e2f56] text-white shadow"
        onClick={handleSearch}
      >
        Search
      </button>

      {result && (
        <pre className="bg-gray-100 p-4 rounded mt-6 w-full max-w-2xl text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
