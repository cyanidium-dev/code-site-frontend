"use client";

import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";
import HeroDecorations from "./HeroDecorations";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function Hero() {
  const t = useTranslations("blogPage");
  const descriptionDelay = 0;

  return (
    <section className="overflow-hidden">
      <Container className="relative flex flex-col lg:flex-row-reverse gap-[9px] lg:justify-between lg:items-center pt-[135px] lg:pt-[149px] pb-[479px] lg:pb-[330px]">
        <HeroDecorations />
        <PageTitle className="max-w-[195px] lg:max-w-[295px] text-[64px] lg:text-[96px] leading-none">
          {t("title")}
        </PageTitle>
        <motion.p
          key="description"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: descriptionDelay, scale: 0.95, x: -30, y: 30 })}
          className="max-w-[248px] text-[14px] lg:text-[16px] font-light leading-[120%]"
        >
          {t("description")}
        </motion.p>
      </Container>
    </section>
  );
}
