"use client";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface ExtraInfoCardDecorationsProps {
  variant: "odd" | "even";
}

const blurClass = "supports-[backdrop-filter]:blur-[157px] will-change-transform";
const blurClass75 = "supports-[backdrop-filter]:blur-[75px] will-change-transform";

export default function ExtraInfoCardDecorations({
  variant,
}: ExtraInfoCardDecorationsProps) {
  const { isIos } = useIosDevice();
  if (!variant) return null;
  if (variant === "odd") {
    return (
      <div className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
        <div
          className={`absolute -z-10 top-[-154px] left-[-90px] lg:left-[-100px] lg:top-[-194px] w-[196px] h-[391px] rounded-full
       bg-purple-ultra-light/30 lg:bg-purple-ultra-light/50 rotate-45 origin-center ${!isIos ? blurClass : ""}`}
        />
        <div
          className={`absolute -z-10 bottom-[-212px] left-[118px] lg:left-auto lg:right-[-81px] lg:bottom-[6px] w-[135px] h-[417px] rounded-full
       bg-blue-dark/20 lg:bg-blue-dark/50 rotate-45 origin-center ${!isIos ? blurClass75 : ""}`}
        />
      </div>
    );
  }
  if (variant === "even") {
    return (
      <div className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
        <div
          className={`absolute -z-10 top-[-229px] left-[118px] lg:left-[-87px] lg:top-auto lg:bottom-[6px] w-[135px] h-[417px] rounded-full
       bg-blue-dark/20 lg:bg-blue-dark/50 ${!isIos ? blurClass75 : ""}`}
        />
      </div>
    );
  }
}
