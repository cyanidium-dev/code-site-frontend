import { Dispatch, ReactNode, SetStateAction } from "react";
import LoaderIcon from "../icons/LoaderIcon";
import { twMerge } from "tailwind-merge";

interface MainButtonProps {
  children: string | ReactNode;
  variant?: "pink" | "blue" | "gradient";
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
        `group relative overflow-hidden enabled:cursor-pointer flex items-center justify-center w-full h-[45px] px-3 rounded-full text-white
        text-[13px] font-actay font-bold leading-none uppercase disabled:text-white/60
        transition duration-300 ease-in-out ${
          variant === "pink"
            ? "bg-main-light disabled:bg-main-light/60"
            : variant === "blue"
            ? "bg-blue disabled:bg-blue/60"
            : "bg-[linear-gradient(90deg,#0899FC_0%,#FF49B8_116.67%)] disabled:bg-[linear-gradient(90deg,#0899FC_0%,#FF49B8_116.67%)]/60"
        }`,
        className
      )}
    >
      <span
        className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/20 via-blue/40 to-white/20 opacity-50 
skew-x-[-40deg] xl:group-enabled:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      <span className="leading-none mt-1.5">
        {children}
        {isLoading ? <LoaderIcon /> : null}
      </span>
    </button>
  );
}
