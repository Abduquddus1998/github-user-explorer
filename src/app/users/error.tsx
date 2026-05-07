"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center py-20 text-red-600">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p>{error.message || "Unknown error"}</p>
      <button
        onClick={reset}
        className="mt-4 bg-[var(--accent-color)] text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
