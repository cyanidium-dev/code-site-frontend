import { Project } from "@/types/project";


interface ProjectsListProps {
  projectsList: Project[];
}

export default function ProjectsList({ projectsList }: ProjectsListProps) {
  return (
    <div>
      <h1>Projects List</h1>
    </div>
  );
}