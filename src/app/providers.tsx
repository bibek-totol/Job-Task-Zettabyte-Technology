"use client";


import Loader from "./components/Loader";
import { useInitialLoader } from "./hooks/useInitialLoader";


export function Providers({ children }: { children: React.ReactNode }) {
  const loading = useInitialLoader(2500); 

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}
