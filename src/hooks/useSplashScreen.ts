"use client";
import { useEffect, useState } from "react";

export function useSplashScreen(duration = 0) { // TEST: 0 секунд замість 3000
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setIsLoading(false);
      return;
    }

    // Якщо splash screen ще не програвався, встановлюємо таймер
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("splashPlayed", "true");
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
}
