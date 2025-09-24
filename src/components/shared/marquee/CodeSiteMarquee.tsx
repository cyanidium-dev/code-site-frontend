"use client";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";

interface CodeSiteMarqueeProps {
  className?: string;
}

export default function CodeSiteMarquee({
  className = "",
}: CodeSiteMarqueeProps) {
  const t = useTranslations("header");

  return (
    <Marquee
      autoFill={true}
      speed={70}
      className={twMerge(
        "min-w-[120vw] h-[39px] flex items-center rotate-[-3.68deg] bg-[linear-gradient(90deg,#FE80CD_30.2%,#268DF4_85.69%)] text-dark font-parkia text-[37.67px] font-bold uppercase",
        className
      )}
    >
      <span className="inline-block mx-1.5 pt-2">{t("logo")}</span>
    </Marquee>
  );
}
