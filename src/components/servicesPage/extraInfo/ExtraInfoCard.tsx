import StarIcon from "@/components/shared/icons/StarIcon";
import { ExtraInfo } from "@/types/service";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import ExtraInfoCardDecorations from "./ExtraInfoCardDecorations";

interface ExtraInfoCardProps {
  extraInfo: ExtraInfo;
  delay: number;
  variant?: "odd" | "even";
}

export default function ExtraInfoCard({
  extraInfo,
  delay,
  variant,
}: ExtraInfoCardProps) {
  const { title, description, infoList } = extraInfo;

  if (!infoList || !infoList.items || !Array.isArray(infoList.items)) {
    return null;
  }

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation({ delay: delay + 0.1, y: 30 })}
      className="relative overflow-hidden px-3 py-6 lg:py-8 lg:px-5 backdrop-blur-[37.9px] bg-black/26 rounded-[8px] flex flex-col h-full"
    >
      {variant && <ExtraInfoCardDecorations variant={variant} />}
      <div className="mb-8 lg:mb-11 px-3 flex-1 flex flex-col">
        <h3 className="font-actay text-[16px] lg:text-[22px] leading-[125%] uppercase font-bold mb-4 lg:mb-6">
          {title}
        </h3>
        <p className="text-[12px] lg:text-[14px] leading-[108%]">
          {description}
        </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 20, delay: 0.2 })}
        data-inner-card
        className="relative backdrop-blur-[37.9px] bg-black/26 rounded-[8px] px-5 py-6"
      >
        <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        <h4 className="pb-3 border-b border-white/10 font-actay text-[12px] lg:text-[16px] leading-[125%] uppercase font-bold mb-3">
          {infoList.title}
        </h4>
        <ul className="flex flex-col gap-3 lg:gap-4">
          {infoList.items.map(item => (
            <li key={item} className="flex gap-3 items-center">
              <StarIcon className="shrink-0" />
              <p className="text-[12px] lg:text-[14px] leading-[108%]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.li>
  );
}
