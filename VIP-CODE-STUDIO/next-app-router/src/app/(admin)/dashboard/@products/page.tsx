"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=hendri12345`,
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
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
      <h1>{status}</h1>
      <button
        className="p-3 rounded-md bg-blue-600 text-white"
        onClick={revalidate}
        type="button"
      >
        Revalidate
      </button>
    </div>
  );
}
