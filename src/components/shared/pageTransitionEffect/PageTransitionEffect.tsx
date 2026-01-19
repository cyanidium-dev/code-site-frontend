"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef, useState, createContext, useEffect } from "react";
import NavigationLoader from "../loader/NavigationLoader";

export const NavigationContext = createContext<{
  isNavigating: boolean;
}>({ isNavigating: false });

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const variants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // Key tied to pathname triggers AnimatePresence remount on route change
  const key = usePathname();
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

      // Next.js Link components may store href in different attributes
      const href =
        link.getAttribute("href") ||
        link.getAttribute("data-href") ||
        link.href;
      const currentPath = window.location.pathname;

      if (
        !href ||
        href === currentPath ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) {
          return;
        }
      } catch {
        // Relative URL
      }

      setIsNavigating(true);
      navigationStartedRef.current = false;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      if (absoluteFallbackTimeoutRef.current) {
        clearTimeout(absoluteFallbackTimeoutRef.current);
      }

      // Fallback: hide loader if navigation doesn't occur (cancelled/failed)
      navigationTimeoutRef.current = setTimeout(() => {
        if (key === prevKeyRef.current && !navigationStartedRef.current) {
          setIsNavigating(false);
        }
      }, 5000);

      // Absolute fallback: always hide loader after max time, even if animation is stuck
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

  // Backup detection: pathname change confirms navigation started
  useEffect(() => {
    if (key !== prevKeyRef.current) {
      setIsNavigating(true);
      navigationStartedRef.current = true;
      prevKeyRef.current = key;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }

      // Clear absolute fallback since navigation succeeded
      if (absoluteFallbackTimeoutRef.current) {
        clearTimeout(absoluteFallbackTimeoutRef.current);
        absoluteFallbackTimeoutRef.current = null;
      }

      if (hideLoaderTimeoutRef.current) {
        clearTimeout(hideLoaderTimeoutRef.current);
      }
      // Hide loader when pathname changes - ensure it always executes
      hideLoaderTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        navigationStartedRef.current = false;
        hideLoaderTimeoutRef.current = null;
      }, 100);

      // Additional safety: ensure loader is hidden even if hideLoaderTimeout gets cleared
      // This handles cases where animation gets stuck
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

  const handleAnimationStart = (definition: string) => {
    if (definition === "exit") {
      setIsNavigating(true);
      navigationStartedRef.current = true;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }
      // Clear absolute fallback since animation started
      if (absoluteFallbackTimeoutRef.current) {
        clearTimeout(absoluteFallbackTimeoutRef.current);
        absoluteFallbackTimeoutRef.current = null;
      }
    }
  };

  const handleEnterComplete = () => {
    navigationStartedRef.current = false;
    setIsNavigating(false);

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
      navigationTimeoutRef.current = null;
    }
    if (hideLoaderTimeoutRef.current) {
      clearTimeout(hideLoaderTimeoutRef.current);
      hideLoaderTimeoutRef.current = null;
    }
    if (absoluteFallbackTimeoutRef.current) {
      clearTimeout(absoluteFallbackTimeoutRef.current);
      absoluteFallbackTimeoutRef.current = null;
    }
  };

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <NavigationLoader />
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="min-h-screen"
          onAnimationStart={definition => {
            handleAnimationStart(definition as string);
          }}
          onAnimationComplete={definition => {
            // Only hide loader on enter completion, not exit
            if (definition === "enter") {
              handleEnterComplete();
            }
          }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
};

export default PageTransitionEffect;
