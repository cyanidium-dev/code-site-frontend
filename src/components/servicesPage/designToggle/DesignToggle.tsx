"use client";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface DesignToggleProps {
  className?: string;
}

export default function DesignToggle({ className }: DesignToggleProps) {
  const t = useTranslations("servicesPage.designToggle");
  const [activeButton, setActiveButton] = useState<"normal" | "wow">("normal");
  const normalButtonRef = useRef<HTMLButtonElement>(null);
  const wowButtonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBackground = () => {
      const activeButtonRef =
        activeButton === "normal" ? normalButtonRef : wowButtonRef;
      const button = activeButtonRef.current;
      const background = backgroundRef.current;
      const container = containerRef.current;

      if (button && background && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const left = buttonRect.left - containerRect.left;
        const width = buttonRect.width;

        background.style.width = `${width}px`;
        background.style.transform = `translateX(${left - 4}px)`;
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, [activeButton]);

  return (
    <div className={twMerge(`flex items-center gap-2 md:gap-8 ${className}`)}>
      <div
        ref={containerRef}
        className="relative flex items-center gap-2 bg-black/26 rounded-full backdrop-blur-[10px] p-1"
      >
        <div className="absolute z-10 inset-0 rounded-full shadow-[inset_0px_4px_12.6px_#FFFFFF40] pointer-events-none" />
        {/* Sliding pink background */}
        <div
          ref={backgroundRef}
          className="absolute z-0 inset-y-1 rounded-full bg-main-light transition-all duration-300 ease-in-out"
          style={{
            left: "4px",
          }}
        />
        <button
          ref={normalButtonRef}
          onClick={() => setActiveButton("normal")}
          className="relative z-20 w-fit rounded-full px-[15px] py-4 md:px-6 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-[10px] md:text-[12px] leading-[120%] uppercase text-white font-bold">
            {t("normal")}
          </span>
        </button>
        <button
          ref={wowButtonRef}
          onClick={() => setActiveButton("wow")}
          className="relative z-20 w-fit rounded-full px-[15px] py-4 md:px-6 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-[10px] md:text-[12px] leading-[120%] uppercase text-white font-bold">
            {t("wow")}
          </span>
        </button>
      </div>
      <div className="relative flex items-center justify-center size-[53px] md:size-[55px] rounded-full cursor-pointer">
        <div
          className="absolute z-10 inset-0 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #F671C8 100%)",
            padding: "1.5px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <span className="text-[32px] leading-[80%] uppercase text-guano-apes font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-bright">
          ?
        </span>
      </div>
    </div>
  );
}
