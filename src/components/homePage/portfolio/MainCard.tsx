"use client";
import * as motion from "motion/react-client";
import { Project } from "@/types/project";
import { twMerge } from "tailwind-merge";
import { getOptimizedImageUrl } from "@/utils/sanityImageUrl";
import { useEffect } from "react";

interface MainCardProps {
  project: Project;
  containerOffset: number;
  offsetTop: number;
  cardWidth: number;
  cardHeight: number;
  width: number;
  isPriority?: boolean;
  className?: string;
}

export default function MainCard({
  project,
  containerOffset,
  offsetTop,
  cardWidth,
  cardHeight,
  width,
  isPriority = false,
  className,
}: MainCardProps) {
  // Використовуємо нативну ширину зображення
  // Використовуємо "auto" для автоматичного вибору найкращого формату (WebP/AVIF/оригінальний)
  const optimizedImageUrl =
    getOptimizedImageUrl(project.mainImage, undefined, 85, "auto") ||
    project.mainImage?.asset?.url ||
    "";

  // Preload першого зображення для покращення LCP
  useEffect(() => {
    if (isPriority && optimizedImageUrl) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = optimizedImageUrl;
      link.setAttribute("fetchpriority", "high");
      document.head.appendChild(link);

      return () => {
        const existingLink = document.querySelector(
          `link[href="${optimizedImageUrl}"]`
        );
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      };
    }
  }, [isPriority, optimizedImageUrl]);

  return (
    <motion.div
      key={`bg-${project.slug}`}
      className={twMerge(
        "relative h-[477px] lg:h-[607px] rounded-[8px] lg:rounded-[18px] overflow-hidden max-w-[calc(100%-48px)] sm:max-w-[592px] md:max-w-[720px] lg:max-w-[864px] xl:max-w-[1040px] px-6 lg:px-20 xl:px-30 mx-auto",
        className
      )}
    >
      {/* Background image with specific dimensions */}
      <motion.div
        key={`image-${project.slug}`}
        initial={{
          x:
          width >= 1280
            ? containerOffset - 240
            : width >= 1024
              ? containerOffset - 160
              : containerOffset - 48,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
        }}
        animate={{
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
        style={{
          backgroundImage: `url(${optimizedImageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 rounded-[8px] lg:rounded-[18px]"
      />
    </motion.div>
  );
}
