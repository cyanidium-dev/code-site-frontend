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
  const { portfolioTitle, portfolioDescription, previewImage, slug, backgroundColor } = project;
  
  const textColorClass = getTextColorClass(
    backgroundColor || "#000",
    "text-white",
    "text-black"
  );

  const backgroundColorClass = backgroundColor ? `bg-[${backgroundColor}]` : "bg-black";
  
  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={twMerge("sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-13.33px)] h-full rounded-[8px] overflow-hidden", backgroundColorClass, className)}
    >
      <div
        className="absolute inset-0 rounded-[8px] pointer-events-none"
        style={{
          background: "radial-gradient(78.44% 78.44% at 25.08% 14.06%, #EEF3FF 0%, #5B92D0 46%, #101A33 100%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <Link href={`/portfolio/${slug}`}>
        <div className="relative flex items-end px-[26px] py-4 w-full h-[222px] rounded-t-[8px] overflow-hidden">
          <Image
            src={previewImage?.asset?.url || ""}
            alt="project image"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute -z-10 object-cover"
          />
        </div>
        <div className="p-5 xl:pb-8">
          <h3 className={twMerge("mb-4 font-actay text-[20px] font-bold leading-[120%] uppercase line-clamp-2", textColorClass)}>
            {portfolioTitle}
          </h3>
          <p className={twMerge("mb-8 text-[12px] lg:text-[14px] font-light leading-[120%] line-clamp-4", textColorClass)}>
            {portfolioDescription}  
          </p>
          <MainButton 
            variant="icon"
            className={twMerge("h-[47px] text-[16px] text-raleway font-bold uppercase", getTextColorClass(backgroundColor || "#000", "text-black", "text-white"), backgroundColorClass)}
            icon={<ArrowIcon className={twMerge("absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9", textColorClass, backgroundColorClass)} />}
            >{t("viewProject")}</MainButton>
        </div>
      </Link>
    </motion.li>
  );
}