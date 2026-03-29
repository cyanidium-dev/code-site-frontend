"use client";

import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogContent } from "@/types/blog";
import PtImage from "./blocks/PtImage";
import PtGallery from "./blocks/PtGallery";
import PtTable from "./blocks/PtTable";
import PtCta from "./blocks/PtCta";
import QuoteBlock from "./blocks/QuoteBlock";
import { parseSanityImageRef } from "@/lib/sanity/parseSanityImageRef";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: (props) => {
      const text = Array.isArray(props.children)
        ? props.children.join("").trim()
        : String(props.children || "").trim();
      if (!text) return null;
      return (
        <p className="mb-3 text-[16px] font-light leading-[160%] text-white/90">
          {props.children}
        </p>
      );
    },
    h1: (props) => (
      <h2 className="mb-2 mt-6 font-actay text-[28px] font-bold leading-[120%] text-white lg:text-[32px]">
        {props.children}
      </h2>
    ),
    h2: (props) => (
      <h2 className="mb-2 mt-6 font-actay text-[24px] font-bold leading-[120%] text-white lg:text-[28px]">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="mb-2 mt-4 font-actay text-[20px] font-bold leading-[120%] text-white lg:text-[22px]">
        {props.children}
      </h3>
    ),
    blockquote: (props) => (
      <blockquote className="my-4 border-l-4 border-white/25 pl-4 text-[16px] font-light italic leading-[160%] text-white/85">
        {props.children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline decoration-white/40 underline-offset-2">
        {children}
      </span>
    ),
    "strike-through": ({ children }) => (
      <span className="line-through opacity-70">{children}</span>
    ),
    link: ({ value, children }) => {
      const v = value as {
        href?: string;
        blank?: boolean;
        openInNewTab?: boolean;
      };
      const href = v?.href || "#";
      const blank = v?.blank ?? v?.openInNewTab;
      const external = /^https?:\/\//i.test(href);
      if (external) {
        return (
          <a
            href={href}
            target={blank ? "_blank" : undefined}
            rel={blank ? "noopener noreferrer" : undefined}
            className="text-main underline decoration-main/60 underline-offset-[3px] transition hover:text-main-light"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="text-main underline decoration-main/60 underline-offset-[3px] transition hover:text-main-light"
        >
          {children}
        </Link>
      );
    },
    /** См. schema blogPostBody: внутренняя ссылка на другую статью */
    internalLink: ({ value, children }) => {
      const ref = (
        value as {
          reference?: { slug?: { current?: string } };
        }
      )?.reference;
      const slug = ref?.slug?.current;
      if (!slug) {
        return <span className="underline">{children}</span>;
      }
      return (
        <Link
          href={`/blog/${slug}`}
          className="text-main underline decoration-main/60 underline-offset-[3px] transition hover:text-main-light"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: (props) => (
      <ul className="mb-3 ml-1 list-disc space-y-1 pl-6 text-[16px] font-light leading-[160%] text-white/90 marker:text-main">
        {props.children}
      </ul>
    ),
    number: (props) => (
      <ol className="mb-3 ml-1 list-decimal space-y-1 pl-6 text-[16px] font-light leading-[160%] text-white/90 marker:text-main">
        {props.children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const ref = value?.asset?._ref;
      const url = (value?.asset as { url?: string } | undefined)?.url;

      if (!ref && !url) return null;

      let imageUrl = url;
      if (!imageUrl && ref) {
        const { id, width, height, format } = parseSanityImageRef(ref);
        if (id && width && height && format) {
          imageUrl = `https://cdn.sanity.io/images/vh20xg14/production/${id}-${width}x${height}.${format}`;
        }
      }

      if (!imageUrl) return null;

      const { width, height } = parseSanityImageRef(ref);
      const hasDimensions = Boolean(width && height);

      const caption = (value as { caption?: string | null }).caption;
      return (
        <figure className="my-4 w-full">
          <div className="relative w-full overflow-hidden rounded-xl bg-white/5">
            {hasDimensions ? (
              <Image
                src={imageUrl}
                alt={(value as { alt?: string }).alt || ""}
                width={width!}
                height={height!}
                sizes="(max-width: 768px) 100vw, 720px"
                className="h-auto w-full object-contain"
              />
            ) : (
              <div className="relative aspect-video w-full">
                <Image
                  src={imageUrl}
                  alt={(value as { alt?: string }).alt || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-contain"
                />
              </div>
            )}
          </div>
          {caption ? (
            <figcaption className="mt-2 text-center text-[13px] font-light text-white/55">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    ptImage: ({ value }) => <PtImage value={value} />,
    ptGallery: ({ value }) => <PtGallery value={value} />,
    ptTable: ({ value }) => <PtTable value={value} />,
    ptCta: ({ value }) => <PtCta value={value} />,
    quoteBlock: ({ value }) => <QuoteBlock value={value} />,
  },
};

export default function BlogPortableTextRenderer({
  value,
}: {
  value?: BlogContent | null;
}) {
  if (!value?.length) return null;

  return <PortableText value={value} components={components} />;
}
