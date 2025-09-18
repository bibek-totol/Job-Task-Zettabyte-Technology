"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

export function Providers({ children }: { children: React.ReactNode }) {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
