"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type IosDeviceContextValue = {
  isIos: boolean;
};

const IosDeviceContext = createContext<IosDeviceContextValue>({
  isIos: false,
});

type IosDeviceProviderProps = {
  children: ReactNode;
};

export function IosDeviceProvider({ children }: IosDeviceProviderProps) {
  // NOTE: Для тестування, ми встановлюємо initial state в true
  // TODO: Змінити на false після тестування
  const [isIos, setIsIos] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent || "";
    const platform = (window.navigator as any).platform || "";

    const isIOSDevice =
      /iPad|iPhone|iPod/.test(userAgent) ||
      /iPad|iPhone|iPod/.test(platform) ||
      // iPadOS 13+ reports as Mac; check for touch support
      (platform === "MacIntel" && (window.navigator as any).maxTouchPoints > 1);

    // NOTE: Не змінюємо state, а просто виводимо в консоль
    console.log("isIOSDevice", isIOSDevice);
    //setIsIos(isIOSDevice);
  }, []);

  return (
    <IosDeviceContext.Provider value={{ isIos }}>
      {children}
    </IosDeviceContext.Provider>
  );
}

export function useIosDevice() {
  return useContext(IosDeviceContext);
}
