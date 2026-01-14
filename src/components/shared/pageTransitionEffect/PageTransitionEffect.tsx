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

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      // Fallback: hide loader if navigation doesn't occur (cancelled/failed)
      navigationTimeoutRef.current = setTimeout(() => {
        if (key === prevKeyRef.current) {
          setIsNavigating(false);
        }
      }, 2000);
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [key]);

  // Backup detection: pathname change confirms navigation started
  useEffect(() => {
    if (key !== prevKeyRef.current) {
      setIsNavigating(true);
      prevKeyRef.current = key;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }
    }
  }, [key]);

  const handleAnimationStart = (definition: string) => {
    if (definition === "exit") {
      setIsNavigating(true);
    }
  };

  const handleEnterComplete = () => {
    setIsNavigating(false);

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
      navigationTimeoutRef.current = null;
    }
  };

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <NavigationLoader />
      <AnimatePresence mode="popLayout">
        <motion.div
          key={key}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.75 }}
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
