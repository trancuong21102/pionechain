"use client";

import Link from "next/link";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <WarningAmberIcon className="w-64 h-64 text-red-600 animate-pulse" />
        </div>
        <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>
        </div>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg 
                   hover:bg-red-700 transition-colors duration-200 ease-in-out"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
