"use client";
import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import Graph from "./Graph";
import { twMerge } from "tailwind-merge";

interface AnimatedGraphProps {
  className?: string;
}

export default function AnimatedGraph({ className = "" }: AnimatedGraphProps) {
  const svgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current.querySelector("svg");
    if (!svg) return;

    // Знаходимо обидва path елементи
    const fillPath = svg.querySelector(
      'path[fill="url(#paint0_linear_118_5624)"]'
    ) as SVGPathElement;
    const strokePath = svg.querySelector(
      'path[stroke="url(#paint2_linear_118_5624)"]'
    ) as SVGPathElement;

    if (!strokePath || !fillPath) return;

    // Отримуємо довжину path
    const pathLength = strokePath.getTotalLength();

    // Встановлюємо початкові значення для stroke path (другого)
    strokePath.style.strokeDasharray = `${pathLength}`;
    strokePath.style.strokeDashoffset = `${pathLength}`;

    // Встановлюємо початкові значення для stroke в fillPath (першого)
    // У першого path є і fill, і stroke
    fillPath.style.strokeDasharray = `${pathLength}`;
    fillPath.style.strokeDashoffset = `${pathLength}`;

    // Observer для відстеження появи в viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Додаємо transition і запускаємо анімацію для обох stroke одночасно
            setTimeout(() => {
              fillPath.style.transition = "stroke-dashoffset 7s linear";
              fillPath.style.strokeDashoffset = "0";

              strokePath.style.transition = "stroke-dashoffset 7s linear";
              strokePath.style.strokeDashoffset = "0";
            }, 300); // Даємо час на fade-in
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(svgRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <motion.div
      ref={svgRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.3 },
        },
      }}
      className={twMerge(`w-full overflow-hidden`, className)}
    >
      <Graph />
    </motion.div>
  );
}
