import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: string | ReactNode;
  variant?: "white" | "pink";
  className?: string;
  onClick?: () => void;
}

export default function SecondaryButton({
  children,
  variant = "white",
  className = "",
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={`group relative flex items-center justify-center cursor-pointer w-full h-10 rounded-full overflow-hidden p-[1px]
        ${variant === "pink" ? "bg-[linear-gradient(125deg,_#FFF_22.37%,_#FFB5E6_94.04%)]" : "border border-white"}
        ${className}`}
      onClick={onClick}
    >
      <div className="pointer-events-none absolute w-[calc(100%-2px)] h-[calc(100%-2px)] bg-black rounded-full" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,_rgba(255,181,230,0)_0%,_rgba(255,181,230,0.3)_50%,_rgba(255,181,230,0)_100%)]
bg-[length:200%_100%] opacity-0 transition-opacity duration-500 ease-in-out animate-[shimmer_2.5s_linear_infinite] group-hover:opacity-100"
      />

      <span
        className={`relative z-10 text-[14px] font-normal leading-none text-transparent bg-clip-text ${variant === "pink" ? "bg-[linear-gradient(125deg,_#FFF_22.37%,_#FFB5E6_94.04%)]" : "bg-white"}`}
      >
        {children}
      </span>
    </button>
  );
}
