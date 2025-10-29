import PortfolioSlider from "@/components/homePage/portfolio/PortfolioSlider";
import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/navigation";
import { Project } from "@/types/project";
import { useTranslations } from "next-intl";
import PortfolioDecorations from "./PortfolioDecorations";

interface PortfolioProps {
  projectsList: Project[];
}

export default function Portfolio({ projectsList }: PortfolioProps) {
  console.log(projectsList[1].type);

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
          <Link href="/portfolio">
            <MainButton className="hidden lg:flex w-[292px] h-[58px] lg:h-[45px]">
              {t("seeProjects")}
            </MainButton>
          </Link>
        </div>
      </Container>
      <PortfolioSlider projectsList={projectsList} />
      <Container className="lg:hidden mt-8">
        <Link href="/portfolio">
          <MainButton className="">{t("seeProjects")}</MainButton>
        </Link>
      </Container>
    </section>
  );
}
