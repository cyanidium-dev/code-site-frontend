import StarIcon from "@/components/shared/icons/StarIcon";
import { ExtraInfo } from "@/types/service";

export default function ExtraInfoCard({ extraInfo }: { extraInfo: ExtraInfo }) {
  const { title, description, infoList } = extraInfo;
  return (
    <div className="relative px-3 py-6 backdrop-blur-[37.9px] bg-black/26 rounded-[8px]">
      <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
      <div className="mb-8 px-3">
        <h3 className="font-actay text-[16px] leading-[125%] uppercase font-bold mb-4">
          {title}
        </h3>
        <p className="text-[12px] leading-[108%]">{description}</p>
      </div>
      <div className="relative backdrop-blur-[37.9px] bg-black/26 rounded-[8px] px-5 py-6">
        <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        <h4 className="font-actay text-[12px] leading-[125%] uppercase font-bold mb-4">
          {infoList.title}
        </h4>
        <ul className="flex flex-col gap-3">
          {infoList.items.map(item => (
            <li key={item} className="flex gap-3 items-center">
              <StarIcon className="shrink-0" />
              <p className="text-[12px] leading-[108%]">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
