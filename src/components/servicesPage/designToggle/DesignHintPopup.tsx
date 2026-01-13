"use client";
import { useTranslations } from "next-intl";
import { RefObject, useEffect, useState } from "react";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

interface DesignHintPopupProps {
  isOpen: boolean;
  popupRef: RefObject<HTMLDivElement | null>;
  questionButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

export default function DesignHintPopup({
  isOpen,
  popupRef,
  questionButtonRef,
  onClose,
}: DesignHintPopupProps) {
  const tHint = useTranslations("servicesPage.designHint");
  const [position, setPosition] = useState({
    left: "50%",
    transform: "translateX(-50%)",
  });
  const [pointerLeft, setPointerLeft] = useState("50%");

  useEffect(() => {
    if (!isOpen || !popupRef.current || !questionButtonRef.current) return;

    const updatePosition = () => {
      const button = questionButtonRef.current;
      if (!button) return;

      const parent = button.parentElement;
      if (!parent) return;

      const buttonRect = button.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const popupWidth = Math.min(480, window.innerWidth - 32);
      const viewportWidth = window.innerWidth;
      const buttonCenterInViewport = buttonRect.left + buttonRect.width / 2;

      let pointerLeftPx = 24;
      let popupLeftInViewport = buttonCenterInViewport - pointerLeftPx;
      let popupRightInViewport = popupLeftInViewport + popupWidth;

      if (popupRightInViewport > viewportWidth - 16) {
        const rightEdge = viewportWidth - 16;
        popupLeftInViewport = rightEdge - popupWidth;
        pointerLeftPx = buttonCenterInViewport - popupLeftInViewport;
        pointerLeftPx = Math.max(24, Math.min(popupWidth - 24, pointerLeftPx));
      } else if (popupLeftInViewport < 16) {
        popupLeftInViewport = 16;
        pointerLeftPx = buttonCenterInViewport - popupLeftInViewport;
        pointerLeftPx = Math.max(24, Math.min(popupWidth - 24, pointerLeftPx));
      }

      const left = popupLeftInViewport - parentRect.left + popupWidth / 2;
      setPosition({ left: `${left}px`, transform: "translateX(-50%)" });
      setPointerLeft(`${pointerLeftPx}px`);
    };

    const timeoutId = setTimeout(updatePosition, 0);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, popupRef, questionButtonRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className="absolute top-full mt-3 z-40 w-[calc(100vw-2rem)] max-w-[480px] bg-white rounded-[8px] shadow-lg"
      style={{
        left: position.left,
        transform: position.transform,
      }}
    >
      <div
        className="absolute -top-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white z-10"
        style={{ left: pointerLeft, transform: "translateX(-50%)" }}
      />
      <div
        className="absolute -top-[9px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-gray-300 z-0"
        style={{ left: pointerLeft, transform: "translateX(-50%)" }}
      />
      <div className="p-4">
        <h3 className="mb-4 font-actay text-[16px] md:text-[18px] leading-[125%] uppercase font-bold text-black">
          {tHint("normal.title")}
        </h3>
        <div className="mb-4 pb-4 border-b border-black/10 flex flex-col gap-3">
          {((tHint.raw("normal.description") as string[]) || []).map(
            (text, index) => (
              <p
                key={index}
                className="text-[12px] md:text-[14px] leading-[122%] text-light text-black"
              >
                {text}
              </p>
            )
          )}
        </div>
        <h3 className="mb-4 font-actay text-[16px] md:text-[18px] leading-[125%] uppercase font-bold text-black">
          {tHint("wow.title")}
        </h3>
        <div className="mb-6 flex flex-col gap-3">
          {((tHint.raw("wow.description") as string[]) || []).map(
            (text, index) => (
              <p
                key={index}
                className="text-[12px] md:text-[14px] leading-[122%] text-light text-black"
              >
                {text}
              </p>
            )
          )}
        </div>
        <SecondaryButton
          variant="outline"
          className="w-full max-w-[300px] mx-auto h-[48px] text-[12.8103px] leading-[120%] uppercase font-bold"
          onClick={onClose}
        >
          {tHint("lookMore")}
        </SecondaryButton>
      </div>
    </div>
  );
}
