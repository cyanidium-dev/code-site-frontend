"use client";
import Container from "@/components/shared/container/Container";
import { Blog } from "@/types/blog";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";

interface HeroProps {
  article: Blog;
}

export default function Hero({ article }: HeroProps) {
  const { mainImageMobile, mainImageDesktop, name, description } = article;
  const imageDelay = 0;
  const titleDelay = 0;
  const descriptionDelay = 0;
  const readingTimeDelay = 0;

  const coverUrl = mainImageDesktop?.url || mainImageMobile?.url || "";
  const coverAlt = mainImageDesktop?.alt || mainImageMobile?.alt || "article image";

  return (
    <section className="relative">
      <Container className="pt-[154px] lg:pt-[171px] pb-0">
        <div className="relative isolate w-full min-h-[280px] overflow-hidden rounded-xl md:min-h-[300px] lg:min-h-[320px] lg:rounded-2xl">
          {coverUrl ? (
            <motion.div
              key="coverImage"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({ delay: imageDelay })}
              className="absolute inset-0 z-0"
            >
              <Image
                src={coverUrl}
                fill
                alt={coverAlt}
                sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 3rem), min(1280px, 100vw - 10rem)"
                priority
                className="object-cover"
              />
            </motion.div>
          ) : null}

          {/* Тёмный слой поверх фото (~50%) */}
          {coverUrl ? (
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-black/50"
              aria-hidden
            />
          ) : null}

          {/* Мягкие боковые градиенты: к фону страницы (--color-black) */}
          {coverUrl ? (
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              aria-hidden
            >
              <div className="absolute inset-y-0 left-0 w-[28%] max-w-[160px] bg-gradient-to-r from-[var(--color-black)] from-0% via-[var(--color-black)]/35 to-transparent to-100%" />
              <div className="absolute inset-y-0 right-0 w-[28%] max-w-[160px] bg-gradient-to-l from-[var(--color-black)] from-0% via-[var(--color-black)]/35 to-transparent to-100%" />
            </div>
          ) : null}

          <div className="relative z-10 pb-8 pt-10 md:pb-10 md:pt-12 lg:pb-[78px] lg:pt-14">
            <motion.h1
              key="title"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({
                x: -30,
                y: -30,
                delay: titleDelay,
                scale: 0.85,
              })}
              className="mb-5 max-w-[497px] font-actay text-[32px] font-bold leading-[107%] lg:text-[40px]"
            >
              {name}
            </motion.h1>
            <motion.p
              key="description"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({
                x: -60,
                y: 30,
                delay: descriptionDelay,
                scale: 0.85,
              })}
              className="mb-8 max-w-[573px] text-[14px] font-light leading-[120%]"
            >
              {description}
            </motion.p>
            <motion.div
              key="readingTime"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({
                delay: readingTimeDelay,
                x: -30,
                scale: 0.85,
              })}
            >
              <EstimatedReadingTime post={article} />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
