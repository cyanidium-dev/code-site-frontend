import { Link } from "@/i18n/navigation";
import { twMerge } from "tailwind-merge";
import LogoSVG from "./LogoSVG";

interface LogoProps {
  className?: string;
  variant?: "blue" | "pink" | "dark";
}

export default function Logo({ className = "", variant = "blue" }: LogoProps) {
  return (
    <Link
      href="/"
      className={twMerge("relative inline-block outline-none text-white", className)}
    >
      <LogoSVG variant={variant} animated={true} />
    </Link>
  );
}
