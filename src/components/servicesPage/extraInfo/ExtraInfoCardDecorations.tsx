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
        {!isIos && (
          <div
            className={`absolute -z-10 top-[-154px] left-[-90px] lg:left-[-100px] lg:top-[-194px] w-[196px] h-[391px] rounded-full
       bg-purple-ultra-light/30 lg:bg-purple-ultra-light/50 rotate-45 origin-center ${blurClass}`}
          />
        )}
        {isIos && (
          <div
            className="absolute -z-10 top-[-180px] left-[-120px] lg:left-[-130px] lg:top-[-220px] w-[275px] h-[550px] rounded-full rotate-45 origin-center opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-purple-ultra-light) 0%, transparent 70%)",
            }}
            aria-hidden
          />
        )}
        {!isIos && (
          <div
            className={`absolute -z-10 bottom-[-212px] left-[118px] lg:left-auto lg:right-[-81px] lg:bottom-[6px] w-[135px] h-[417px] rounded-full
       bg-blue-dark/20 lg:bg-blue-dark/50 rotate-45 origin-center ${blurClass75}`}
          />
        )}
        {isIos && (
          <div
            className="absolute -z-10 bottom-[-260px] left-[118px] lg:left-auto lg:right-[-95px] lg:bottom-[-20px] w-[200px] h-[625px] rounded-full rotate-45 origin-center opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-blue-dark) 0%, transparent 70%)",
            }}
            aria-hidden
          />
        )}
      </div>
    );
  }
  if (variant === "even") {
    return (
      <div className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
        {!isIos && (
          <div
            className={`absolute -z-10 top-[-229px] left-[118px] lg:left-[-87px] lg:top-auto lg:bottom-[6px] w-[135px] h-[417px] rounded-full
       bg-blue-dark/20 lg:bg-blue-dark/50 ${blurClass75}`}
          />
        )}
        {isIos && (
          <div
            className="absolute -z-10 top-[-280px] left-[118px] lg:left-[-100px] lg:top-auto lg:bottom-[-20px] w-[200px] h-[625px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-blue-dark) 0%, transparent 70%)",
            }}
            aria-hidden
          />
        )}
      </div>
    );
  }
}
