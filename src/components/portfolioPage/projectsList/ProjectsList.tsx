"use client";
import { Project } from "@/types/project";
import Pagination from "@/components/shared/pagination/Pagination";
import { useItemsPerPage } from "@/hooks/useItemsPerPage";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projectsList: Project[];
}

const SECTION_ID = "portfolio-page-posts-list";

export default function ProjectsList({ projectsList }: ProjectsListProps) {
  return (
    <Pagination
      items={projectsList}
      scrollTargetId={SECTION_ID}
      useItemsPerPage={useItemsPerPage}
      isShowNumbers={false}
      renderItems={(currentItems) => (
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants({
            staggerChildren: 0.3,
            delayChildren: 0.3,
          })}
          id={SECTION_ID}
          className="flex flex-col gap-5 xl:gap-y-6 sm:flex-row sm:flex-wrap"
        >
          {currentItems.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.ul>
      )}
    />
  );
}