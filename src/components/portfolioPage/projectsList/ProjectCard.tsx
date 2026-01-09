import { Project } from "@/types/project";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import { twMerge } from "tailwind-merge";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTextColorClass } from "@/utils/colorUtils";
import MainButton from "@/components/shared/buttons/MainButton";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const t = useTranslations("portfolioPage");
  console.log(project);
  const {
    portfolioTitle,
    portfolioDescription,
    previewImage,
    slug,
    backgroundColor,
  } = project;

  const textColorClass = getTextColorClass(
    backgroundColor || "#000",
    "text-white",
    "text-black"
  );

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={twMerge(
        "relative sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-13.33px)] h-auto rounded-[8px] overflow-hidden",
        className
      )}
      style={{
        backgroundColor: backgroundColor || "#000",
      }}
    >
      <div
        className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
        style={{
          background:
            "radial-gradient(78.44% 78.44% at 25.08% 14.06%, #EEF3FF 0%, #5B92D0 46%, #101A33 100%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <Link href={`/portfolio/${slug}`} className="flex flex-col h-full">
        <div className="relative px-[26px] py-4 w-full h-[222px] rounded-t-[8px] overflow-hidden">
          <Image
            src={previewImage?.asset?.url || ""}
            alt="project image"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-5 xl:pb-8 flex flex-col justify-between flex-grow">
          <h3
            className={twMerge(
              "mb-4 font-actay text-[20px] font-bold leading-[120%] uppercase line-clamp-3",
              textColorClass
            )}
          >
            {portfolioTitle}
          </h3>
          <div>
            <p
              className={twMerge(
                "min-h-[4lh] mb-8 text-[12px] lg:text-[14px] font-light leading-[120%] line-clamp-4",
                textColorClass
              )}
            >
              {portfolioDescription}
            </p>
            <MainButton
              variant="icon"
              className={twMerge(
                "h-[47px] text-[16px] lg:text-[14px] xl:text-[16px] text-raleway font-bold uppercase text-left p-5",
                getTextColorClass(
                  backgroundColor || "#000",
                  "bg-white text-black",
                  "bg-black text-white"
                )
              )}
              icon={
                <span
                  className="absolute flex items-center justify-center right-[6px] size-9 top-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    backgroundColor: backgroundColor || "#000",
                  }}
                >
                  <ArrowIcon className={twMerge("size-5", textColorClass)} />
                </span>
              }
            >
              {t("seeProject")}
            </MainButton>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
