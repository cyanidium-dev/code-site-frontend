"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieSplashScreen = dynamic(() => import("./LottieSplashScreen"), {
  ssr: false,
  loading: () => (
    <div className="no-doc-scroll fixed inset-0 z-50 flex items-center justify-center bg-[#020418]" />
  ),
});

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
      {children}
      <LottieSplashScreen visible={showSplash} />
    </>
  );
}
