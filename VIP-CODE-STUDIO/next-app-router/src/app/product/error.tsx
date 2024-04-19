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
    <div>
      <h2>Something went wrong!</h2>
      <button className="p-1 bg-blue-800 text-white" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
