"use client";

import Image from "next/image";

export default function PortfolioDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Code-site bottom (mobile) */}
      <div className="absolute md:hidden -z-50 bottom-[-57px] right-[-165px] w-[273px] h-auto aspect-[273/291]">
        <Image
          src="/images/portfolioPage/projectList/code-site-list.svg"
          alt="code-site"
          width={273}
          height={291}
          className="w-[273px] h-auto"
        />
      </div>

      {/* Code-site mid (desktop) */}
      <div className="hidden md:block absolute -z-50 top-[27.6%] left-[-141px] w-[445px] h-auto aspect-[445/476]">
        <Image
          src="/images/portfolioPage/projectList/code-site-list.svg"
          alt="code-site"
          width={445}
          height={476}
          className="w-[445px] h-auto"
        />
      </div>

      {/* Gradient oval (iOS-style) */}
      <div
        className="absolute md:hidden -z-10 bottom-[-217px] right-[-125%] w-[160%] h-[620px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-main) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

