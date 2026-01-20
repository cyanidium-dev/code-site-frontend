"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useState, createContext, useEffect } from "react";
import NavigationLoader from "../loader/NavigationLoader";

export const NavigationContext = createContext<{
  isNavigating: boolean;
}>({ isNavigating: false });

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const key = pathname;
  const [isNavigating, setIsNavigating] = useState(false);
  const prevKeyRef = useRef(key);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideLoaderTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const absoluteFallbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationStartedRef = useRef(false);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href =
        link.getAttribute("href") ||
        link.getAttribute("data-href") ||
        link.href;

      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let targetPathname: string;
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) {
          return;
        }
        targetPathname = url.pathname;
      } catch {
        targetPathname = href.split("?")[0].split("#")[0];
      }

      const currentPathname = window.location.pathname;

      if (targetPathname === currentPathname) {
        return;
      }

      setIsNavigating(true);
      navigationStartedRef.current = false;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      if (absoluteFallbackTimeoutRef.current) {
        clearTimeout(absoluteFallbackTimeoutRef.current);
      }

      navigationTimeoutRef.current = setTimeout(() => {
        if (key === prevKeyRef.current && !navigationStartedRef.current) {
          setIsNavigating(false);
        }
      }, 5000);

      absoluteFallbackTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        navigationStartedRef.current = false;
        if (hideLoaderTimeoutRef.current) {
          clearTimeout(hideLoaderTimeoutRef.current);
          hideLoaderTimeoutRef.current = null;
        }
      }, 3000);
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      if (hideLoaderTimeoutRef.current) {
        clearTimeout(hideLoaderTimeoutRef.current);
      }
      if (absoluteFallbackTimeoutRef.current) {
        clearTimeout(absoluteFallbackTimeoutRef.current);
      }
    };
  }, [key]);

  useEffect(() => {
    if (key !== prevKeyRef.current) {
      setIsNavigating(true);
      navigationStartedRef.current = true;
      prevKeyRef.current = key;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }

      if (absoluteFallbackTimeoutRef.current) {
        clearTimeout(absoluteFallbackTimeoutRef.current);
        absoluteFallbackTimeoutRef.current = null;
      }

      if (hideLoaderTimeoutRef.current) {
        clearTimeout(hideLoaderTimeoutRef.current);
      }
      hideLoaderTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        navigationStartedRef.current = false;
        hideLoaderTimeoutRef.current = null;
      }, 100);

      const safetyTimeoutRef = { current: null as NodeJS.Timeout | null };
      safetyTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        navigationStartedRef.current = false;
        if (hideLoaderTimeoutRef.current) {
          clearTimeout(hideLoaderTimeoutRef.current);
          hideLoaderTimeoutRef.current = null;
        }
      }, 2000);

      return () => {
        if (safetyTimeoutRef.current) {
          clearTimeout(safetyTimeoutRef.current);
        }
      };
    }
  }, [key]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <NavigationLoader />
      <motion.div key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="min-h-screen">
        {children}
      </motion.div>
    </NavigationContext.Provider>
  );
};

export default PageTransitionEffect;
