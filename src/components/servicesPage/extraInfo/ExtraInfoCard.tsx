import StarIcon from "@/components/shared/icons/StarIcon";
import { ExtraInfo } from "@/types/service";

export default function ExtraInfoCard({ extraInfo }: { extraInfo: ExtraInfo }) {
  const { title, description, infoList } = extraInfo;

  if (!infoList || !infoList.items || !Array.isArray(infoList.items)) {
    return null;
  }

  return (
    <li className="relative px-3 py-6 lg:py-8 lg:px-5backdrop-blur-[37.9px] bg-black/26 rounded-[8px] flex flex-col h-full">
      <div className="mb-8 lg:mb-11 px-3 flex-1 flex flex-col">
        <h3 className="font-actay text-[16px] lg:text-[22px] leading-[125%] uppercase font-bold mb-4 lg:mb-6">
          {title}
        </h3>
        <p className="text-[12px] lg:text-[14px] leading-[108%]">
          {description}
        </p>
      </div>
      <div
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
      </div>
    </li>
  );
}
