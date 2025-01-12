"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

// Validate the environment variable
if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error(
    "NEXT_PUBLIC_CONVEX_URL is not defined. Please set it in your environment variables."
  );
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
