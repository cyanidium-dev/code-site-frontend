import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import IconButton from "../buttons/IconButton";
import CrossIcon from "../icons/CrossIcon";
import Image from "next/image";

interface ModalProps {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  isModalShown,
  setIsModalShown,
  children,
  className = "bg-white",
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed z-[9998] inset-0 w-dvw h-dvh transition duration-[1000ms] ease-in-out ${
          isModalShown
            ? "opacity-100 no-doc-scroll"
            : "opacity-0 pointer-events-none"
        } bg-black/44`}
        onClick={() => setIsModalShown(false)}
      />

      {/* Modal */}
      <div
        className={`${
          isModalShown
            ? " -translate-y-[calc(50dvh-50%)] opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-90"
        } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-[9999] w-[82%] max-w-[470px] lg:max-w-[512px] max-h-dvh
        px-5 lg:px-[68px] pt-12 lg:pt-[65px] pb-5 lg:pb-15 overflow-y-auto rounded-[8px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
        scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-blue-light popup-scroll shadow-md ${className}`}
      >
        <Image
          src="/images/modal/background.png"
          alt="background"
          fill
          className="-z-10 object-cover object-top-left mix-blend-luminosity"
        />
        <IconButton
          handleClick={() => setIsModalShown(false)}
          className="absolute top-4 right-4 size-6 text-black"
        >
          {<CrossIcon />}
        </IconButton>

        {children}
      </div>
    </>,
    document.body
  );
}
