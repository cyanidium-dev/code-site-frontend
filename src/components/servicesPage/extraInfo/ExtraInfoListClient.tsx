"use client";

import { useEffect } from "react";

export default function ExtraInfoListClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const syncHeights = () => {
      const innerCards = document.querySelectorAll(
        "[data-inner-card]"
      ) as NodeListOf<HTMLElement>;

      if (innerCards.length === 0) return;

      // Reset heights to get natural height
      innerCards.forEach(card => {
        card.style.height = "auto";
      });

      // Find max height
      let maxHeight = 0;
      innerCards.forEach(card => {
        const height = card.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      // Apply max height to all
      innerCards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      syncHeights();
    }, 0);

    window.addEventListener("resize", syncHeights);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  return <>{children}</>;
}
