"use client";
import { useState, useEffect, useRef } from "react";
import type { ImageBlock } from "@/types/project";
import { fadeInAnimation } from "@/utils/animationVariants";
import * as motion from "motion/react-client";
import Image from "next/image";
import { getOptimizedImageUrl } from "@/utils/sanityImageUrl";

interface ImageBlockProps {
  block: ImageBlock;
  backgroundColor: string;
}

export default function ImageBlock({
  block,
  backgroundColor,
}: ImageBlockProps) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadImageDimensions = () => {
      const img = new window.Image();
      const isMobile = window.innerWidth < 768;
      // Use low quality (10) for dimension calculation only - reduces data transfer
      const imageUrl = isMobile
        ? getOptimizedImageUrl(block.mobileImage, undefined, 10, "auto")
        : getOptimizedImageUrl(block.desktopImage, undefined, 10, "auto");

      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        // Round to 4 decimal places to avoid subpixel rendering issues
        setAspectRatio(Math.round(ratio * 100) / 100);
      };

      img.src = imageUrl;
    };

    loadImageDimensions();
  }, [block]);

  return (
    <div
      className="relative w-dvw shrink-0 min-h-[10px] overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
        isolation: "isolate",
      }}
    >
      <motion.div
        ref={containerRef}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.05 }}
        variants={fadeInAnimation({ delay: 0.2, y: 20 })}
        className="relative h-full"
      >
        <Image
          src={getOptimizedImageUrl(block.mobileImage, undefined, 95, "auto")}
          alt={block.alt}
          fill
          sizes="100vw"
          className="md:hidden object-cover object-center"
          style={{
            imageRendering: "auto",
          }}
        />
        <Image
          src={getOptimizedImageUrl(block.desktopImage, undefined, 95, "auto")}
          alt={block.alt}
          fill
          sizes="100vw"
          className="hidden md:block object-cover object-center"
          style={{
            imageRendering: "auto",
          }}
        />
      </motion.div>
    </div>
  );
}
