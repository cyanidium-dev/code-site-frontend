"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Link } from "@/i18n/navigation";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import { Blog } from "@/types/blog";
import { twMerge } from "tailwind-merge";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface ArticleCardProps {
  blog: Blog;
  className?: string;
}

export default function ArticleCard({ blog, className }: ArticleCardProps) {
  const t = useTranslations("blogPage");
  const { isIos } = useIosDevice();
  const { name, description, previewImage, slug } = blog;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={twMerge("sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-13.33px)] h-full rounded-[8px] overflow-hidden", isIos ? "bg-black/50" : "bg-black/26 backdrop-blur-[10px]", className)}
    >
      <Link href={`/blog/${slug}`}>
        <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        <div className="relative flex items-end px-[26px] py-4 w-full h-[131px] rounded-[8px] overflow-hidden">
          <Image
            src={previewImage?.url || ""}
            alt="blog image"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute -z-10 object-cover"
          />
          <EstimatedReadingTime post={blog} />
        </div>
        <div className="px-[26px] pt-6 pb-[42px] xl:pb-8">
          <h3 className="mb-5 font-actay text-[20px] font-bold leading-[120%] uppercase line-clamp-2">
            {name}
          </h3>
          <p className="mb-8 text-[12px] lg:text-[14px] font-light leading-[120%] line-clamp-5">
            {description}
          </p>
          <SecondaryButton variant="pink">{t("readMore")}</SecondaryButton>
        </div>
      </Link>
    </motion.li>
  );
}
