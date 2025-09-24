import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface LogoProps {
  className: string;
}

export default function Logo({ className }: LogoProps) {
  const t = useTranslations("header");

  return (
    <Link
      href="/"
      className={`relative inline-block font-actay font-bold uppercase animate-text-glow ${className}`}
    >
      {t("logo")}
    </Link>
  );
}
