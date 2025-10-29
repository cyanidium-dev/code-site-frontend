"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Project } from "@/types/project";
import { twMerge } from "tailwind-merge";

interface ProjectCategoryProps {
  project: Project;
  className?: string;
}

export default function ProjectCategory({
  project,
  className,
}: ProjectCategoryProps) {
  return (
    <motion.div
      className={twMerge("overflow-hidden", className)}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.1,
      }}
    >
      <p className="w-fit h-[29px] lg:h-[45px] mb-2 lg:mb-3 bg-white px-[14px] lg:px-5 py-2 lg:py-3 rounded-full text-[10px] lg:text-[16px] font-light leading-[130%] text-black">
        {project.categories[0].name}
      </p>
      <div className="flex items-center gap-2 px-[14px] lg:px-5 py-2 lg:py-2.5 w-fit h-[29px] lg:h-[45px] rounded-full overflow-hidden bg-dark/24 shadow-[inset_0px_2px_16px_rgba(255,255,255,0.25)] backdrop-blur-[18.95px]">
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(175.34deg, #FF76C1 3.91%, #6A8FFF 123.62%",
            padding: "1px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <Image
          src={project.type.icon.asset.url}
          alt="type icon"
          width={20}
          height={20}
          className="shrink-0 size-[13px] lg:size-5"
        />
        <p className="text-[10px] lg:text-[16px] font-light leading-[130%]">
          {project.type.name}
        </p>
      </div>
    </motion.div>
  );
}
