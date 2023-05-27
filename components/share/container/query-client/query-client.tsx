"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import QueryProviderImpl from "./types";

const qu = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false },
  },
});

const Providers = ({ children }: QueryProviderImpl) => {
  const [queryClient] = useState(() => qu);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
export { qu };
