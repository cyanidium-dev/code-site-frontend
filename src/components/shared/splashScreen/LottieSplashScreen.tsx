"use client";

import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";

import animationData from "./lottieLogoAnimation.json";

interface LottieSplashScreenProps {
  visible: boolean;
}

export default function LottieSplashScreen({
  visible,
}: LottieSplashScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          transition={{ duration: 1 }}
          className="no-doc-scroll fixed inset-0 z-50 flex items-center justify-center bg-[#020418]"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
