"use client";
import * as motion from "motion/react-client";
import { Project } from "@/types/project";
import { twMerge } from "tailwind-merge";

interface MainCardProps {
  project: Project;
  containerOffset: number;
  offsetTop: number;
  cardWidth: number;
  cardHeight: number;
  width: number;
  className?: string;
}

export default function MainCard({
  project,
  containerOffset,
  offsetTop,
  cardWidth,
  cardHeight,
  width,
  className,
}: MainCardProps) {
  return (
    <motion.div
      key={`bg-${project.slug}`}
      className={twMerge(
        "relative h-[477px] lg:h-[607px] rounded-[8px] lg:rounded-[18px] overflow-hidden max-w-[calc(100%-48px)] sm:max-w-[592px] md:max-w-[720px] lg:max-w-[864px] xl:max-w-[1040px] px-6 lg:px-20 xl:px-30 mx-auto",
        className
      )}
    >
      {/* Background image + gradient in one layer */}
      <motion.div
        key={`image-wrapper-${project.slug}`}
        initial={{
          x:
            width >= 1280
              ? containerOffset - 240
              : width >= 1024
                ? containerOffset - 160
                : containerOffset - 48,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          borderRadius: 8,
        }}
        animate={{
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
          borderRadius: width >= 1024 ? 18 : 8,
        }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.05,
        }}
        style={{
          background: `linear-gradient(140deg, ${
            project.gradientStartColor || "#CFFD59"
          } 0%, ${project.gradientEndColor || "#121212"} 100%)`,
        }}
        className="absolute top-0 left-0 w-[calc(100%-48px)] lg:w-[calc(100%-160px)] xl:w-[calc(100%-240px)] rounded-[8px] lg:rounded-[18px] overflow-hidden"
      >
        {/* Background image with specific dimensions */}
        <motion.div
          key={`image-${project.slug}`}
          initial={{
            x: width >= 1024 ? "300px" : "180px",
            y: width >= 1024 ? "300px" : "40px",
            width: 338,
            height: 275,
          }}
          animate={{
            width: width >= 1024 ? 1071 : width >= 768 ? 740 : 521,
            height: width >= 1024 ? 872 : width >= 768 ? 602 : 424,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.1, 0.25, 1] as const,
          }}
          style={{
            backgroundImage: `url(${project.mainImage.asset.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="absolute top-[71px] xs:top-5 md:top-0 left-[calc(50%-247px)] lg:left-[calc(50%-480px)] w-[521px] md:w-[740px] lg:w-[1071px] aspect-[1071/872] rounded-[8px] lg:rounded-[18px]"
        />
      </motion.div>
    </motion.div>
  );
}
