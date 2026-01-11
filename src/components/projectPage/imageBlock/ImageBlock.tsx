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
        setAspectRatio(ratio);
      };

      img.src = imageUrl;
    };

    loadImageDimensions();
  }, [block]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
      variants={fadeInAnimation({ y: 20 })}
      className="relative w-full shrink-0 min-h-[300px] overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
      }}
    >
      <Image
        src={getOptimizedImageUrl(block.mobileImage, undefined, 100, "auto")}
        alt={block.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className="md:hidden object-contain"
      />
      <Image
        src={getOptimizedImageUrl(block.desktopImage, undefined, 100, "auto")}
        alt={block.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className="hidden md:block object-contain"
      />
    </motion.div>
  );
}
