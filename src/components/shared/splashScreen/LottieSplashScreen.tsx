"use client";

import Lottie from "lottie-react";
import { AnimatePresence, motion } from "framer-motion";
import animationData from "./lottieLogoAnimation.json";

interface LottieSplashScreenProps {
  visible: boolean;
  onComplete?: () => void;
  onExitComplete?: () => void;
}

export default function LottieSplashScreen({
  visible,
  onComplete,
  onExitComplete,
}: LottieSplashScreenProps) {
  return (
    <AnimatePresence initial={false} onExitComplete={onExitComplete}>
      {visible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="no-doc-scroll fixed inset-0 z-[9999] flex items-center justify-center bg-[#020418]"
        >
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay
            onComplete={onComplete}
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
