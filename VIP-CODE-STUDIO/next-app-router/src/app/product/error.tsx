"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
      <button className="p-1 bg-blue-800 text-white" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
