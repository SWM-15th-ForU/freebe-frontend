"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense, useState } from "react";
import LoadingFallback from "../ui/loading-fallback";
import ErrorBoundary from "./error-providers";

export default function QueryProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({ defaultOptions: { queries: { throwOnError: true } } }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
