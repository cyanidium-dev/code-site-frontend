"use client";
import HeroDecorations from "./HeroDecorations";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { fadeInAnimation } from "@/utils/animationVariants";
import * as motion from "motion/react-client";
import MainButton from "@/components/shared/buttons/MainButton";
import { useTranslations } from "next-intl";

interface HeroProps {
  name: string;
  shortDescription: string;
  clientName: string;
  websiteUrl: string;
}

export default function Hero({
  name,
  shortDescription,
  clientName,
  websiteUrl,
}: HeroProps) {
  const t = useTranslations("projectPage");

  return (
    <section className="relative">
      <HeroDecorations />
      <Container className="relative pt-[116px] lg:pt-[141px] pb-20 lg:pb-15">
        <PageTitle className="max-w-[484px] text-[32px] xl:text-[40px] leading-[110%] mb-6">
          {name}
        </PageTitle>
        <motion.p
          key="shortDescription"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.2, scale: 0.95, x: -30, y: 30 })}
          className="max-w-[484px] text-[12px] font-light leading-[120%] mb-6"
        >
          {shortDescription}
        </motion.p>
        <motion.p
          key="clientName"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.4, scale: 0.95, x: -30, y: 30 })}
          className="font-actay text-[16px] md:text-[20px] font-bold leading-[120%] mb-7 lg:mb-[50px] uppercase"
        >
          {clientName}
        </motion.p>
        <motion.a
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.5, scale: 0.95, y: 30 })}
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block sm:max-w-[277px] cursor-pointer p-0 m-0"
        >
          <MainButton variant="pink">{t("openWebsite")}</MainButton>
        </motion.a>
      </Container>
    </section>
  );
}
