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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setShowContent(true);
      return;
    }

    setShowSplash(true);

    const timer = setTimeout(() => {
      sessionStorage.setItem("splashPlayed", "true");
      setShowSplash(false);
      setShowContent(true);
    }, 0); // TEST: 0 секунд замість 3000

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <LottieSplashScreen visible={showSplash} />

      <div
        className={`min-h-screen flex flex-col ${showContent ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {children}
      </div>
    </>
  );
}
