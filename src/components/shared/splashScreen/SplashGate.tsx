"use client";

import { useLayoutEffect, useState, createContext, useCallback } from "react";
import LottieSplashScreen from "./LottieSplashScreen";

export const SplashContext = createContext<{
  isSplashVisible: boolean;
}>({ isSplashVisible: true });

const FALLBACK_HIDE_MS = 4000; // hide at latest if onComplete never fires

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const [splashExiting, setSplashExiting] = useState(false);

  const hideSplash = useCallback(() => {
    sessionStorage.setItem("splashPlayed", "true");
    setShowSplash(false);
    setSplashExiting(true);
  }, []);

  const handleExitComplete = useCallback(() => {
    setSplashExiting(false);
  }, []);

  useLayoutEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setShowSplash(false);
      return;
    }

    setShowSplash(true);

    const fallbackTimer = setTimeout(hideSplash, FALLBACK_HIDE_MS);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [hideSplash]);

  const showSplashGate = showSplash === null || showSplash === true;
  const mountSplashScreen = showSplash === true || splashExiting;

  return (
    <SplashContext.Provider value={{ isSplashVisible: showSplash ?? false }}>
      {showSplashGate && (
        <div className="fixed inset-0 no-doc-scroll z-[9998] bg-[#020418]" />
      )}
      {mountSplashScreen && (
        <LottieSplashScreen
          visible={showSplash === true}
          onComplete={hideSplash}
          onExitComplete={handleExitComplete}
        />
      )}
      {children}
    </SplashContext.Provider>
  );
}
