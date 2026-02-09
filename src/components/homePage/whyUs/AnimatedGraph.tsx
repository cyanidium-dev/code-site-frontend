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

    const fillPath = svg.querySelector(
      'path[fill="url(#paint0_linear_118_5624)"]'
    ) as SVGPathElement;
    const strokePath = svg.querySelector(
      'path[stroke="url(#paint2_linear_118_5624)"]'
    ) as SVGPathElement;

    if (!strokePath || !fillPath) return;

    const pathLength = strokePath.getTotalLength();
    strokePath.style.strokeDasharray = `${pathLength}`;
    strokePath.style.strokeDashoffset = `${pathLength}`;
    fillPath.style.strokeDasharray = `${pathLength}`;
    fillPath.style.strokeDashoffset = `${pathLength}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              fillPath.style.transition = "stroke-dashoffset 4s linear";
              fillPath.style.strokeDashoffset = "0";
              strokePath.style.transition = "stroke-dashoffset 4s linear";
              strokePath.style.strokeDashoffset = "0";
            }, 50);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const motionProps = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.3 },
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3 },
      },
    },
  };

  return (
    <motion.div
      ref={svgRef}
      {...motionProps}
      className={twMerge(`w-full overflow-hidden`, className)}
    >
      <Graph />
    </motion.div>
  );
}
