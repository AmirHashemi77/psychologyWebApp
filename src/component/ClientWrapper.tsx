"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/component/common/loading/Loading";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
      return;
    }

    const handleLoad = () => setIsLoaded(true);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <div className={`${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>{children}</div>
    </>
  );
}
