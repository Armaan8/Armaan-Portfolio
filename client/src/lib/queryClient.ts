import { QueryClient } from "@tanstack/react-query";

// Simplified query client with only what we need for the frontend
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});
