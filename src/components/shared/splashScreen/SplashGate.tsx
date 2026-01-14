"use client";

import { useEffect, useState, createContext } from "react";
import LottieSplashScreen from "./LottieSplashScreen";

export const SplashContext = createContext<{
  isSplashVisible: boolean;
}>({ isSplashVisible: true });

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setShowSplash(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("splashPlayed", "true");
      setShowSplash(false);
    }, 3600);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SplashContext.Provider value={{ isSplashVisible: showSplash }}>
      <LottieSplashScreen visible={showSplash} />
      {children}
    </SplashContext.Provider>
  );
}
