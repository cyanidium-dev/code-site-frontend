"use client";

import Image from "next/image";

export default function HeroDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Head */}
      <div className="absolute -z-30 top-[288px] lg:top-[-155px] right-[calc(50%-268px)] lg:right-[calc(50%-460px)] w-[337px] lg:w-[555px] h-auto aspect-[337/475] mix-blend-color-dodge">
        <Image
          src="/images/portfolioPage/hero/head.webp"
          alt="head"
          width={337}
          height={475}
          sizes="(max-width: 1024px) 337px, 555px"
          className="w-[337px] lg:w-[555px] h-auto"
        />
      </div>

      {/* Phone */}
      <div className="absolute -z-40 top-[374px] lg:top-[22px] right-[calc(50%-192px)] lg:right-[calc(50%-244px)] w-[337px] lg:w-[441px] h-auto aspect-[337/475]">
        <Image
          src="/images/portfolioPage/hero/phone.webp"
          alt="phone"
          width={271}
          height={330}
          sizes="(max-width: 1024px) 271px, 441px"
          className="w-[271px] lg:w-[441px] h-auto"
        />
      </div>

      {/* Code-site main */}
      <div className="absolute -z-50 lg:-z-50 top-[272px] lg:top-[-208px] left-[calc(50%-311px)] lg:left-[calc(50%-279px)] w-[470px] h-auto aspect-[470/492] lg:rotate-[24deg]">
        <Image
          src="/images/portfolioPage/hero/code-site.svg"
          alt="code-site"
          width={470}
          height={492}
          className="w-[470px] h-auto"
        />
      </div>

      {/* Code-site right (desktop) */}
      <div className="hidden lg:block absolute -z-50 top-[234px] right-[calc(50%-681px)] w-[493px] h-auto aspect-[493/375]">
        <Image
          src="/images/portfolioPage/hero/code-site-right.svg"
          alt="code-site"
          width={493}
          height={375}
          className="w-[493px] h-auto"
        />
      </div>

      {/* Drops mobile */}
      <div className="lg:hidden absolute -z-20 top-[50px] right-[calc(50%-270px)] w-[179px] h-auto aspect-[179/177]">
        <Image
          src="/images/portfolioPage/hero/dropsMob.svg"
          alt="drops"
          width={179}
          height={177}
          className="w-[179px] h-auto"
        />
      </div>

      {/* Drops desktop */}
      <div className="hidden lg:block absolute -z-20 top-[62px] left-[calc(50%-726px)] w-[224px] h-auto aspect-[224/252]">
        <Image
          src="/images/portfolioPage/hero/dropsDesk.svg"
          alt="drops"
          width={224}
          height={252}
          className="w-[224px] h-auto"
        />
      </div>

      {/* Gradient oval (iOS-style) */}
      <div
        className="absolute -z-10 top-[529px] lg:top-[263px] left-1/2 -translate-x-1/2 w-[380%] lg:w-[200%] h-[608px] lg:h-[643px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 30%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

