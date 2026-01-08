import { Project } from "@/types/project";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("portfolioPage");
  return (
    <li>
      <h1>Project Card</h1>
    </li>
  );
}