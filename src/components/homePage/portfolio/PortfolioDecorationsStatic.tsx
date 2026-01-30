"use client";

import Image from "next/image";

export default function PortfolioDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Mobile code-site text */}
      <div className="lg:hidden absolute bottom-[150px] left-[-15px] w-[625px] h-auto aspect-[625/79]">
        <Image
          src="/images/homePage/portfolio/code-site.webp"
          alt="code-site.art"
          width={625}
          height={79}
          sizes="625px"
          className="w-[625px] h-auto"
        />
      </div>

      {/* Head */}
      <div className="absolute -z-10 top-[53px] lg:top-19 left-[-338px] lg:left-auto lg:right-[-148px] w-[650px] lg:w-[763px] h-auto aspect-[1817/1770] bg-black">
        <Image
          src="/images/homePage/portfolio/head.webp"
          alt="head"
          width={1817}
          height={1770}
          sizes="(max-width: 1024px) 650px, 908px"
          className="w-[650px] lg:w-[908px] h-auto mix-blend-hard-light"
        />
      </div>

      {/* Drops */}
      <div className="hidden lg:block absolute -z-10 top-[170px] left-[-56px] w-[266px] h-auto aspect-[266/303]">
        <Image
          src="/images/homePage/portfolio/drops.svg"
          alt="drops"
          width="266"
          height="303"
          className="w-[266px] h-auto"
        />
      </div>

      {/* Code Site Desk */}
      <div className="hidden lg:block absolute -z-10 top-[308px] left-[-119px] w-[496px] h-auto aspect-[266/303]">
        <Image
          src="/images/homePage/portfolio/code-site-desk.svg"
          alt="code-site.art"
          width="496"
          height="552"
          className="w-[496px] h-auto"
        />
      </div>

      {/* Blur (disabled on iOS)
      <div className="hidden lg:block absolute top-[262px] right-[-101px] w-[1026px] h-[586px] rotate-[-148deg] rounded-full bg-black supports-[backdrop-filter]:blur-[72px] " />
      <div className="hidden lg:block absolute top-[322px] right-[-121px] w-[354px] h-[380px] rounded-full bg-main supports-[backdrop-filter]:blur-[281px] " />
      */}
    </div>
  );
}

