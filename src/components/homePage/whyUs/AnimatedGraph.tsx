"use client";
import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import Graph from "./Graph";

export default function AnimatedGraph() {
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

    // Отримуємо довжину path (вони однакові)
    const pathLength = strokePath.getTotalLength();

    // Встановлюємо початкові значення для обох path
    [fillPath, strokePath].forEach((path) => {
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
    });

    // Observer для відстеження появи в viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Додаємо transition і запускаємо анімацію для обох path
            setTimeout(() => {
              [fillPath, strokePath].forEach((path) => {
                path.style.transition = "stroke-dashoffset 12s linear";
                path.style.strokeDashoffset = "0";
              });
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
      className="w-full overflow-hidden"
    >
      <Graph />
    </motion.div>
  );
}
