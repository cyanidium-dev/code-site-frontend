"use client";

import { useEffect, useState } from "react";
import LottieSplashScreen from "./LottieSplashScreen";

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
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!!showSplash && <LottieSplashScreen />}
      {children}
    </>
  );
}
