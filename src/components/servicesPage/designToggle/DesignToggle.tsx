"use client";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import DesignHintPopup from "./DesignHintPopup";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface DesignToggleProps {
  className?: string;
  designType: "normal" | "wow";
  onDesignChange?: (type: "normal" | "wow") => void;
}

export default function DesignToggle({
  className,
  designType: initialDesignType,
  onDesignChange,
}: DesignToggleProps) {
  const t = useTranslations("servicesPage.designToggle");
  const [activeButton, setActiveButton] = useState<"normal" | "wow">(
    initialDesignType
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const normalButtonRef = useRef<HTMLButtonElement>(null);
  const wowButtonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const questionButtonRef = useRef<HTMLButtonElement>(null);

  // Sync with prop changes
  useEffect(() => {
    setActiveButton(initialDesignType);
  }, [initialDesignType]);

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

  const handleDesignChange = (type: "normal" | "wow") => {
    // Update local state immediately for instant UI feedback
    setActiveButton(type);
    // Notify parent component
    onDesignChange?.(type);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        questionButtonRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !questionButtonRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <>
      <div className={twMerge("flex items-center gap-2 md:gap-8", className)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 0.6, x: -30 })}
          ref={containerRef}
          className="group relative flex items-center bg-black/26 rounded-full backdrop-blur-[10px] p-1"
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
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(110deg,_rgba(255,181,230,0)_0%,_rgba(255,181,230,0.3)_50%,_rgba(255,181,230,0)_100%)] bg-[length:200%_100%] opacity-0 transition-opacity duration-500 ease-in-out animate-[shimmer_2.5s_linear_infinite] group-hover:opacity-100 z-[15]" />
          <button
            ref={normalButtonRef}
            onClick={() => handleDesignChange("normal")}
            className="flex items-center justify-center relative z-20 w-fit rounded-l-full px-[15px] py-4 md:px-6 transition-colors duration-300 cursor-pointer bg-transparent"
          >
            <span className="font-actay text-[10px] md:text-[12px] leading-[120%] uppercase text-white font-bold whitespace-nowrap">
              {t("normal")}
            </span>
          </button>
          <button
            ref={wowButtonRef}
            onClick={() => handleDesignChange("wow")}
            className="flex items-center justify-center relative z-20 w-fit rounded-r-full px-[15px] py-4 md:px-6 transition-colors duration-300 cursor-pointer bg-transparent"
          >
            <span className="font-actay text-[10px] md:text-[12px] leading-[120%] uppercase text-white font-bold whitespace-nowrap">
              {t("wow")}
            </span>
          </button>
        </motion.div>
        <div className="relative">
          <motion.button
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ delay: 0.8, x: 30, scale: 0.9 })}
            ref={questionButtonRef}
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            className="group relative flex items-center justify-center shrink-0 size-[53px] md:size-[55px] rounded-full cursor-pointer"
          >
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
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(110deg,_rgba(255,181,230,0)_0%,_rgba(255,181,230,0.3)_50%,_rgba(255,181,230,0)_100%)] bg-[length:200%_100%] opacity-0 transition-opacity duration-500 ease-in-out animate-[shimmer_2.5s_linear_infinite] group-hover:opacity-100" />
            <span className="relative z-20 text-[32px] leading-[80%] uppercase font-guano-apes font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-bright">
              ?
            </span>
          </motion.button>
          <DesignHintPopup
            isOpen={isPopupOpen}
            popupRef={popupRef}
            questionButtonRef={questionButtonRef}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
