import PortfolioSlider from "@/components/homePage/portfolio/PortfolioSlider";
import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/navigation";
import { Project } from "@/types/project";
import { useTranslations } from "next-intl";
import PortfolioDecorations from "./PortfolioDecorations";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface PortfolioProps {
  projectsList: Project[];
}

export default function Portfolio({ projectsList }: PortfolioProps) {
  const t = useTranslations("homePage.portfolio");

  if (!projectsList || !projectsList?.length) return null;

  return (
    <section className="relative z-20 lg:pt-[190px] mt-[-108px] lg:mt-0">
      <PortfolioDecorations />
      <Container className="relative">
        <div className="lg:flex items-end justify-between mb-6 lg:mb-8">
          <SectionTitle
            variant="pink"
            className="lg:max-w-[624px] text-[36px] lg:text-[64px] font-bold leading-[108%]"
          >
            {t("title")}
          </SectionTitle>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          >
            <Link href="/portfolio" aria-label={t("seeProjects")}>
              <MainButton className="hidden lg:flex w-[292px] h-[58px] lg:h-[45px]">
                {t("seeProjects")}
              </MainButton>
            </Link>
          </motion.div>
        </div>
      </Container>
      <PortfolioSlider projectsList={projectsList} />
      <Container className="lg:hidden mt-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Link href="/portfolio" aria-label={t("seeProjects")}>
            <MainButton className="">{t("seeProjects")}</MainButton>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
