"use client";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";
import LogoSVG from "../logo/LogoSVG";

interface CodeSiteMarqueeProps {
  className?: string;
}

export default function CodeSiteMarquee({
  className = "",
}: CodeSiteMarqueeProps) {
  return (
    <Marquee
      autoFill={true}
      speed={70}
      className={twMerge(
        "min-w-[120vw] flex items-center pt-2 rotate-[-3.68deg] bg-[linear-gradient(90deg,#FE80CD_30.2%,#268DF4_85.69%)] text-dark font-parkia text-[37.67px] lg:text-[48px] leading-none font-bold uppercase",
        className
      )}
    >
      <div className="inline-block mx-4 leading-none flex items-center">
        <LogoSVG variant="blue" animated={false} className="h-[37.67px] lg:h-[48px] w-auto text-dark" />
      </div>
    </Marquee>
  );
}
