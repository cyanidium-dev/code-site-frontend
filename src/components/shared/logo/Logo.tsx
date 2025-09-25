import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface LogoProps {
  className?: string;
  variant?: "blue" | "pink";
}

export default function Logo({ className = "", variant = "blue" }: LogoProps) {
  const t = useTranslations("header");

  return (
    <Link
      href="/"
      className={`relative inline-block font-actay font-bold uppercase ${
        variant === "blue" ? "animate-text-glow-blue" : "animate-text-glow-pink"
      } ${className}`}
    >
      {t("logo")}
    </Link>
  );
}
