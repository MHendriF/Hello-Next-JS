"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=hendri12345",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) setStatus("Revalidated successfully");
    }
  };

  return (
    <div>
      <h1>{status}</h1>
      <button className="p-1 bg-red-800" onClick={revalidate} type="button">
        Revalidate
      </button>
    </div>
  );
}
