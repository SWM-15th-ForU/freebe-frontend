"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense, useState } from "react";
import LoadingFallback from "../ui/loading-fallback";

export default function QueryProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
    </QueryClientProvider>
  );
}
