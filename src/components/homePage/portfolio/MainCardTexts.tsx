"use client";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Project } from "@/types/project";
import Container from "@/components/shared/container/Container";
import ArrowButton from "./ArrowButton";
import ProjectCategory from "./ProjectCategory";
import ProjectAdvantages from "./ProjectAdvantages";
import { twMerge } from "tailwind-merge";

interface MainCardTextsProps {
  project: Project;
  detailsEven: boolean;
  className?: string;
}

export default function MainCardTexts({
  project,
  detailsEven,
  className,
}: MainCardTextsProps) {
  return (
    <Container
      className={twMerge(
        "absolute top-0 left-0 sm:left-[calc((100%-640px)/2)] md:left-[calc((100%-768px)/2)] lg:left-[calc((100%-1024px)/2)] xl:left-[calc((100%-1280px)/2)] h-[477px] lg:h-[607px] w-full",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <div className="absolute z-[22] flex justify-between w-[calc(100%-48px)] lg:w-[calc(100%-160px)] xl:w-[calc(100%-240px)] h-full p-[14px] lg:p-[50px]">
          {/* Left side */}
          <motion.div
            key={`details-${detailsEven ? "even" : "odd"}`}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.4,
            }}
            className="flex flex-col justify-between h-full"
          >
            <ProjectCategory project={project} className="hidden lg:block" />
            <ProjectAdvantages
              advantages={project.advantages}
              className="lg:hidden"
            />
            <motion.div
              className="relative p-5 lg:p-0 rounded-[10px] lg:rounded-none bg-white/6 lg:bg-transparent shadow-[inset_0px_2px_16px_rgba(255,255,255,0.25)] 
              lg:shadow-none backdrop-blur-[18.95px] lg:backdrop-blur-none"
              initial={{ y: 60 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1] as const,
                delay: 0.35,
              }}
            >
              <div
                className="lg:hidden absolute inset-0 rounded-[10px] pointer-events-none"
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
              <ArrowButton
                slug={project.slug}
                className="absolute -top-2 -right-2 lg:static mb-8"
              />
              <h3 className="lg:max-w-[291px] mb-2 lg:mb-5 font-actay text-[12px] lg:text-[24px] font-bold leading-[120%] uppercase">
                {project.portfolioTitle}
              </h3>
              <p className="lg:max-w-[252px] text-[10px] lg:text-[12px] font-light leading-[120%]">
                {project.portfolioDescription}
              </p>
              <ProjectCategory project={project} className="lg:hidden mt-3" />
            </motion.div>
          </motion.div>

          {/* Right side */}
          <motion.div
            key={`details-right-${detailsEven ? "even" : "odd"}`}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.4,
            }}
            className="hidden lg:block"
          >
            <ProjectAdvantages advantages={project.advantages} />
          </motion.div>
        </div>
      </AnimatePresence>
    </Container>
  );
}
