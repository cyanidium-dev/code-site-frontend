import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: string | ReactNode;
  variant?: "white" | "pink";
}

export default function SecondaryButton({
  children,
  variant = "white",
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={`group relative flex items-center justify-center cursor-pointer w-full h-10 bg-black/26 rounded-full border overflow-hidden 
        ${variant === "pink" ? "border-pink-ultra-light" : "border-white"}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,_rgba(255,181,230,0)_0%,_rgba(255,181,230,0.3)_50%,_rgba(255,181,230,0)_100%)]
bg-[length:200%_100%] opacity-0 transition-opacity duration-500 ease-in-out animate-[shimmer_2.5s_linear_infinite] group-hover:opacity-100"
      />

      <span
        className={`text-[14px] font-normal leading-none text-transparent bg-clip-text ${variant === "pink" ? "bg-[linear-gradient(125deg,_#FFF_22.37%,_#FFB5E6_94.04%)]" : "bg-white"}`}
      >
        {children}
      </span>
    </button>
  );
}
