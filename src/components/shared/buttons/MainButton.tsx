import { Dispatch, ReactNode, SetStateAction } from "react";
import LoaderIcon from "../icons/LoaderIcon";
import { twMerge } from "tailwind-merge";

interface MainButtonProps {
  children: string | ReactNode;
  variant?: "pink" | "blue" | "gradient" | "white";
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
}

export default function MainButton({
  children,
  variant = "pink",
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
}: MainButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        `group relative overflow-hidden enabled:cursor-pointer flex items-center justify-center w-full h-[45px] px-3 rounded-full text-[12px] 
        font-actay font-bold leading-none uppercase disabled:text-white/60 text-white
      enabled:active:scale-[98%] will-change-transform transition duration-300 ease-in-out ${
        variant === "pink"
          ? "bg-main-light disabled:bg-main-light/60"
          : variant === "blue"
            ? "bg-blue disabled:bg-blue/60"
            : variant === "gradient"
              ? "bg-[linear-gradient(90deg,#0899FC_0%,#FF49B8_116.67%)] disabled:opacity-50"
              : "bg-white disabled:bg-white/60 text-black"
      }`,
        className
      )}
    >
      <span
        className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-white/10 via-blue/70 to-white/10 opacity-50 
skew-x-[-40deg] xl:group-enabled:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      <span className="inline-block w-full mt-1">
        {children}
        {isLoading ? <LoaderIcon /> : null}
      </span>
    </button>
  );
}
