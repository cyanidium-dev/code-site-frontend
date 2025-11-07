"use client";

import Lottie from "lottie-react";

import animationData from "./lottieLogoAnimation.json";

export default function LottieSplashScreen() {
  return (
    <div className="no-doc-scroll fixed inset-0 z-[9999] flex items-center justify-center bg-[#020418]">
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
        style={{
          width: 300,
          height: 300,
          position: "absolute",
        }}
      />
    </div>
  );
}
