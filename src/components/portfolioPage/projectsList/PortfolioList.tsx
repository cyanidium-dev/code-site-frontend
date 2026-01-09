import Container from "@/components/shared/container/Container";
import { Project } from "@/types/project";
import ProjectsList from "./ProjectsList";
import PortfolioDecorations from "./PortfolioDecorations";

interface PortfolioListProps {
    projectsList: Project[];
}

const SECTION_ID = "portfolio-page-posts-list";

export default function PortfolioList({ projectsList }: PortfolioListProps) {
  if (!projectsList || !projectsList?.length) return null;

  return (
    <section id={SECTION_ID} className="relative z-10">
      <Container className="relative pt-[50px] lg:pt-22 pb-[176px] lg:pb-[214px]">
        <PortfolioDecorations />
        <ProjectsList projectsList={projectsList} />
      </Container>
    </section>
  );
}
