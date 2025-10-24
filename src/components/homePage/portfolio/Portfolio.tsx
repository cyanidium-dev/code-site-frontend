import TravelSlider from "@/components/homePage/portfolio/TravelSlider";
import { Project } from "@/types/project";

interface PortfolioProps {
  projectsList: Project[];
}

export default function Portfolio({ projectsList }: PortfolioProps) {
  console.log(projectsList[0].previewImage);

  return (
    <section className="pt-[190px]">
      <TravelSlider />
    </section>
  );
}
