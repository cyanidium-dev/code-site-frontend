"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Map from "./Map";

interface AnimatedMapWithDotsProps {
  className?: string;
}

export default function AnimatedMapWithDots({
  className,
}: AnimatedMapWithDotsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const initializedRef = useRef(false);
  const isInView = useInView(mapRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || initializedRef.current) return;
    initializedRef.current = true;

    const svg = mapRef.current?.querySelector("svg");
    if (!svg) return;

    // === Додаємо фільтр для glow, якщо ще немає ===
    if (!svg.querySelector("#glow-effect")) {
      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs"
      );
      const filter = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "filter"
      );
      filter.setAttribute("id", "glow-effect");
      filter.setAttribute("x", "-50%");
      filter.setAttribute("y", "-50%");
      filter.setAttribute("width", "200%");
      filter.setAttribute("height", "200%");

      const blur = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feGaussianBlur"
      );
      blur.setAttribute("stdDeviation", "3.5");
      blur.setAttribute("result", "coloredBlur");

      const merge = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feMerge"
      );
      const n1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feMergeNode"
      );
      n1.setAttribute("in", "coloredBlur");
      const n2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feMergeNode"
      );
      n2.setAttribute("in", "SourceGraphic");

      merge.append(n1, n2);
      filter.append(blur, merge);
      defs.append(filter);
      svg.insertBefore(defs, svg.firstChild);
    }

    // === Шукаємо точки ===
    const allDots = Array.from(
      svg.querySelectorAll('path[fill="#154C9E"]')
    ) as SVGPathElement[];
    if (!allDots.length) return;

    // Безпечна фільтрація
    const filteredDots = allDots.filter((dot) => {
      try {
        const bbox = dot.getBBox();
        const cx = bbox.x + bbox.width / 2;
        const cy = bbox.y + bbox.height / 2;
        return (
          cx > 604 * 0.25 &&
          cx < 604 * 0.75 &&
          cy > 328 * 0.25 &&
          cy < 328 * 0.75
        );
      } catch {
        return false;
      }
    });

    if (!filteredDots.length) return;

    const animateSingleDot = (dot: SVGPathElement) => {
      if (!dot) return;
      dot.style.transition = "fill 0.4s ease, filter 0.4s ease";
      dot.setAttribute("fill", "#FFFFFF");
      dot.style.filter =
        "url(#glow-effect) drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 12px rgba(255,255,255,0.6))";
      setTimeout(() => {
        if (!dot) return;
        dot.setAttribute("fill", "#154C9E");
        dot.style.filter = "none";
      }, 3000);
    };

    const animateDots = () => {
      if (!filteredDots.length) return;

      const selected: SVGPathElement[] = [];
      const num = Math.floor(Math.random() * 2) + 6;

      while (selected.length < num) {
        const dot =
          filteredDots[Math.floor(Math.random() * filteredDots.length)];
        if (!selected.includes(dot)) selected.push(dot);
      }

      selected.forEach((dot, i) => {
        setTimeout(() => animateSingleDot(dot), i * 300);
      });
    };

    // перший запуск через 500 мс після появи
    setTimeout(animateDots, 500);
    intervalRef.current = setInterval(animateDots, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView]);

  return (
    <div ref={mapRef} className="w-fit h-fit">
      <Map className={className} />
    </div>
  );
}
