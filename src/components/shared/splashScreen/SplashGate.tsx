"use client";

import { useLayoutEffect, useState, createContext } from "react";
import LottieSplashScreen from "./LottieSplashScreen";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export const SplashContext = createContext<{
  isSplashVisible: boolean;
}>({ isSplashVisible: true });

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const { isIos } = useIosDevice();

  useLayoutEffect(() => {
    if (isIos) {
      setShowSplash(false);
      return;
    }

    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setShowSplash(false);
      return;
    }

    setShowSplash(true);

    const timer = setTimeout(() => {
      sessionStorage.setItem("splashPlayed", "true");
      setShowSplash(false);
    }, 3600);

    return () => {
      clearTimeout(timer);
    };
  }, [isIos]);

  const showSplashGate = !isIos && (showSplash === null || showSplash === true);

  return (
    <SplashContext.Provider
      value={{ isSplashVisible: isIos ? false : (showSplash ?? false) }}
    >
      {showSplashGate && (
        <div className="fixed inset-0 no-doc-scroll z-[9998] bg-[#020418]" />
      )}
      {showSplashGate && showSplash === true && (
        <LottieSplashScreen visible={true} />
      )}
      {children}
    </SplashContext.Provider>
  );
}
