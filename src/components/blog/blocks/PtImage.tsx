"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanityClient";
import type { PtImageBlock } from "@/types/blogPost";
import { parseSanityImageRef } from "@/lib/sanity/parseSanityImageRef";
import { twMerge } from "tailwind-merge";

const builder = imageUrlBuilder(client);

function urlForPtImage(value: PtImageBlock): string | null {
  const imageField = value.asset ?? value.image;
  if (!imageField) return null;

  if (typeof (imageField as { url?: string }).url === "string" && (imageField as { url: string }).url) {
    return (imageField as { url: string }).url;
  }

  const nested = (imageField as { asset?: { url?: string } }).asset;
  if (nested && typeof nested.url === "string" && nested.url) {
    return nested.url;
  }

  try {
    return builder
      .image(imageField as Parameters<typeof builder.image>[0])
      .width(1200)
      .auto("format")
      .quality(82)
      .url();
  } catch {
    return null;
  }
}

function dimensionsPtImage(value: PtImageBlock): { w: number; h: number } {
  const imageField = value.asset ?? value.image;
  if (!imageField) return { w: 1200, h: 675 };

  const top = (imageField as { metadata?: { dimensions?: { width?: number; height?: number } } })
    .metadata?.dimensions;
  const nestedMeta = (
    imageField as {
      asset?: { metadata?: { dimensions?: { width?: number; height?: number } } };
    }
  ).asset?.metadata?.dimensions;
  if (top?.width && top?.height) return { w: top.width, h: top.height };
  if (nestedMeta?.width && nestedMeta?.height) return { w: nestedMeta.width, h: nestedMeta.height };

  const ref =
    (imageField as { asset?: { _ref?: string } }).asset?._ref ??
    (imageField as { _ref?: string })._ref;
  const parsed = parseSanityImageRef(ref);
  if (parsed.width && parsed.height) return { w: parsed.width, h: parsed.height };

  return { w: 1200, h: 675 };
}

export default function PtImage({ value }: { value: PtImageBlock }) {
  const url = urlForPtImage(value);
  if (!url) return null;

  const alt = value.alt ?? value.image?.alt ?? "";
  const orientation = value.orientation ?? "landscape";
  const { w, h } = dimensionsPtImage(value);

  return (
    <figure
      className={twMerge(
        "my-4 w-full max-w-full",
        orientation === "portrait" ? "max-w-md mx-auto" : ""
      )}
    >
      <div
        className={twMerge(
          "relative w-full overflow-hidden rounded-xl bg-white/5",
          orientation === "portrait" ? "aspect-[3/4]" : "aspect-video"
        )}
      >
        <Image
          src={url}
          alt={alt}
          width={w}
          height={h}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, min(720px, 100%)"
        />
      </div>
      {value.caption ? (
        <figcaption className="mt-2 text-center text-[13px] font-light leading-[140%] text-white/55">
          {value.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
