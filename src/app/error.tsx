"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Co loi xay ra</h1>
        <button onClick={reset} className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white">Thu lai</button>
      </div>
    </div>
  );
}
