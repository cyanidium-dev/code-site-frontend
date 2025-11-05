import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";
import HeroDecorations from "./HeroDecorations";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function Hero() {
  const t = useTranslations("portfolioPage");

  return (
    <section>
      <Container className="relative flex flex-col lg:flex-row lg:justify-between gap-4 pt-[136px] lg:pt-[174px] pb-[312px] lg:pb-0">
        <HeroDecorations />
        <PageTitle
          variant="pink"
          className="max-w-[354px] lg:max-w-[700px] text-[40px] lg:text-[96px] font-bold leading-none"
        >
          {t("title")}
        </PageTitle>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 1.2, y: 30, scale: 0.85 })}
          className="max-w-[354px] lg:max-w-[235px] text-[14px] lg:text-[16px] font-light leading-[120%]"
        >
          {t("description")}
        </motion.p>
      </Container>
      <CodeSiteMarquee className="mb-5" />
    </section>
  );
}
