"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieSplashScreen = dynamic(() => import("./LottieSplashScreen"), {
  ssr: false,
});

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setShowSplash(false);
      return;
    }

    setShowSplash(true);

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
      {children}
      <LottieSplashScreen visible={showSplash} />
    </>
  );
}
