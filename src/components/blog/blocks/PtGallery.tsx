"use client";

import Image from "next/image";
import type { PtGalleryBlock } from "@/types/blogPost";

export default function PtGallery({ value }: { value: PtGalleryBlock }) {
  const images = value.images?.filter((i) => i?.asset?.url) ?? [];
  if (!images.length) return null;

  return (
    <figure className="my-4 w-full">
      {value.caption ? (
        <figcaption className="mb-2 text-[14px] font-light text-white/70">
          {value.caption}
        </figcaption>
      ) : null}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((img, idx) => {
          const url = img.asset!.url!;
          const w = img.asset?.metadata?.dimensions?.width ?? 800;
          const h = img.asset?.metadata?.dimensions?.height ?? 600;
          return (
            <div key={img._key ?? idx} className="space-y-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5">
                <Image
                  src={url}
                  alt={img.alt || ""}
                  width={w}
                  height={h}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              {img.caption ? (
                <p className="text-center text-[12px] font-light text-white/55">
                  {img.caption}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </figure>
  );
}
