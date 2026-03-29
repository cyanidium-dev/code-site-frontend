"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import { Link } from "@/i18n/navigation";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import { Blog } from "@/types/blog";
import { twMerge } from "tailwind-merge";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface ArticleCardProps {
  blog: Blog;
  className?: string;
}

function ReadMoreCta({ label }: { label: string }) {
  return (
    <span className="group/cta relative flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(125deg,_#FFF_22.37%,_#FFB5E6_94.04%)] p-[1px]">
      <span className="pointer-events-none absolute h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-full bg-black" />
      <span className="relative z-10 bg-[linear-gradient(125deg,_#FFF_22.37%,_#FFB5E6_94.04%)] bg-clip-text text-[14px] font-normal leading-none text-transparent">
        {label}
      </span>
    </span>
  );
}

export default function ArticleCard({ blog, className }: ArticleCardProps) {
  const t = useTranslations("blogPage");
  const { isIos } = useIosDevice();
  const { name, description, previewImage, slug } = blog;
  const excerpt = description?.trim() ?? "";

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={twMerge(
        "flex h-full flex-col sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-13.33px)]",
        isIos ? "bg-black/50" : "bg-black/26 backdrop-blur-[10px]",
        "rounded-[8px] overflow-hidden",
        className
      )}
    >
      <Link
        href={`/blog/${slug}`}
        className="group flex min-h-0 flex-1 flex-col outline-none transition-opacity hover:opacity-[0.98] focus-visible:ring-2 focus-visible:ring-main/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
      >
        {/* 1. Cover — фиксированное соотношение сторон, без -z-10 за фоном карточки */}
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
          {previewImage?.url ? (
            <Image
              src={previewImage.url}
              alt={previewImage.alt?.trim() || ""}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02]"
              aria-hidden
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.15)]"
            aria-hidden
          />
        </div>

        {/* 2. Мета — под превью, без пересечения с текстом */}
        <div className="shrink-0 border-b border-white/[0.08] px-5 pb-3 pt-3">
          <EstimatedReadingTime post={blog} compact />
        </div>

        {/* 3–5. Заголовок, лид, CTA (span вместо button — нельзя вкладывать в ссылку) */}
        <div className="flex min-h-[200px] flex-1 flex-col justify-between gap-4 px-5 pb-5 pt-4 sm:min-h-[220px]">
          <div className="min-w-0">
            <h3 className="font-actay text-[18px] font-bold uppercase leading-[120%] text-white sm:text-[19px] lg:text-[20px] line-clamp-3">
              {name || "—"}
            </h3>
            <p className="mt-2 text-[13px] font-light leading-[150%] text-white/80 sm:text-[14px] line-clamp-4">
              {excerpt || "\u00a0"}
            </p>
          </div>
          <div className="shrink-0 pt-1">
            <ReadMoreCta label={t("readMore")} />
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
