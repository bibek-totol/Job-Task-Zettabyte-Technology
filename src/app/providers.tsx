"use client";

import Loader from "./components/Loader";
import { useInitialLoader } from "./hooks/useInitialLoader";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const loading = useInitialLoader(2000);

  if (loading) {
    return <Loader />;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
