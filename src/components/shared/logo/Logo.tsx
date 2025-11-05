import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface LogoProps {
  className?: string;
  variant?: "blue" | "pink" | "dark";
}

export default function Logo({ className = "", variant = "blue" }: LogoProps) {
  const t = useTranslations("header");

  return (
    <Link
      href="/"
      className={`relative inline-block font-actay font-bold uppercase outline-none ${
        variant === "blue"
          ? "animate-text-glow-blue"
          : variant === "pink"
            ? "animate-text-glow-pink"
            : "animate-text-glow-dark"
      } ${className}`}
    >
      {t("logo")}
    </Link>
  );
}
