import { adminTrackShipment } from "../api/pageContent";
import { useState } from "react";

export default function AdminTrackingPage() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const searchTracking = async () => {
    try {
      const res = await adminTrackShipment(number);
      setResult(res.data);
    } catch {
      alert("Tracking number not found");
    }
  };

  return (
    <>
      <h2>Admin Tracking Search</h2>

      <input
        placeholder="Enter Tracking Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={searchTracking}>Search</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </>
  );
}
