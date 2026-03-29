"use client";

import Container from "@/components/shared/container/Container";
import { Blog } from "@/types/blog";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import { useLocale } from "next-intl";

interface HeroProps {
  article: Blog;
}

function formatPublishedLabel(iso: string | null | undefined, locale: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const tag =
    locale === "uk" ? "uk-UA" : locale === "en" ? "en-US" : "ru-RU";
  return new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default function Hero({ article }: HeroProps) {
  const locale = useLocale();
  const { mainImageMobile, mainImageDesktop, name, description, publishedAt, author } =
    article;
  const coverUrl = mainImageDesktop?.url || mainImageMobile?.url || "";
  const coverAlt = mainImageDesktop?.alt || mainImageMobile?.alt || "";
  const dateLabel = formatPublishedLabel(publishedAt, locale);
  const authorLine = author?.trim() || "";

  return (
    <section className="relative">
      <Container className="pt-[120px] pb-10 sm:pt-[140px] md:pt-[154px] lg:pb-14 lg:pt-[171px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInAnimation({ delay: 0 })}
          className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12"
        >
          {/* Mobile: image on top (order-1); desktop: right column (order-2) */}
          <div className="order-1 min-w-0 md:order-2">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/[0.04] md:aspect-[4/3] lg:rounded-2xl">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={coverAlt || "article cover"}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-white/[0.02]"
                  aria-hidden
                />
              )}
            </div>
          </div>

          {/* Mobile: text below (order-2); desktop: left column (order-1) */}
          <div className="order-2 flex min-w-0 flex-col md:order-1">
            <h1 className="font-actay text-[28px] font-bold leading-[115%] text-white sm:text-[30px] md:text-[32px] lg:text-[38px] lg:leading-[107%]">
              {name}
            </h1>

            {description ? (
              <p className="mt-4 text-[15px] font-light leading-[150%] text-white/85 sm:text-[16px]">
                {description}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
              <div className="min-w-0 shrink-0">
                <EstimatedReadingTime post={article} compact />
              </div>
              {(dateLabel || authorLine) && (
                <div className="flex min-w-0 flex-col gap-1 text-[13px] font-light leading-[140%] text-white/55 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1 sm:text-[13px]">
                  {dateLabel ? (
                    <span className="whitespace-nowrap">{dateLabel}</span>
                  ) : null}
                  {dateLabel && authorLine ? (
                    <span className="hidden text-white/35 sm:inline" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  {authorLine ? (
                    <span className="min-w-0 break-words">{authorLine}</span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
