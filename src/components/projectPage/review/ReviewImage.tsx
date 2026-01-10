"use client";
import type { SanityImage } from "@/types/project";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import Image from "next/image";
import { getOptimizedImageUrl } from "@/utils/sanityImageUrl";
import ExpandIcon from "@/components/shared/icons/ExpandIcon";
import { useState } from "react";
import Modal from "@/components/shared/modals/Modal";

interface ReviewImageProps {
  id: string;
  authorName: string;
  reviewImage: SanityImage;
  className?: string;
}

export default function ReviewImage({
  id,
  authorName,
  reviewImage,
  className,
}: ReviewImageProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        variants={listItemVariants}
        className={`relative w-full h-auto aspect-[312/468] md:w-[333px] md:h-[468px] ${className}`}
      >
        <div
          className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
          style={{
            background:
              "linear-gradient(171.05deg, #B14285 6.81%, #FFFFFF 158.64%)",
            padding: "1.5px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <div
          className="mt-11 relative w-full aspect-square max-w-[200px] mx-auto cursor-pointer pointer-events-auto group"
          aria-label={`Відгук з зображенням від ${authorName}`}
          onClick={() => setIsImageModalOpen(true)}
        >
          <Image
            src={
              getOptimizedImageUrl(reviewImage as any, 400, 85, "auto") ||
              reviewImage.asset.url
            }
            alt={`review from ${authorName}`}
            fill
            className="object-cover rounded-[8px] lg:opacity-90 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            sizes="(max-width: 768px) 200px, 200px"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 rounded-full size-12 flex items-center justify-center backdrop-blur-sm lg:group-hover:translate-y-[-10px] lg:group-hover:scale-110 lg:group-hover:brightness-125 transition-all duration-300 ease-in-out">
              <ExpandIcon className="text-white" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Image Modal */}
      <Modal
        isModalShown={isImageModalOpen}
        setIsModalShown={setIsImageModalOpen}
        variant="image"
        className="bg-black/80 border border-white/20 rounded-lg"
      >
        <div className="relative w-full h-full max-w-full max-h-full">
          <Image
            src={
              getOptimizedImageUrl(reviewImage as any, undefined, 90, "auto") ||
              reviewImage.asset.url
            }
            alt={`review from ${authorName}`}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
      </Modal>
    </>
  );
}
