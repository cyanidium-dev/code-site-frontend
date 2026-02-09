"use client";

import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import Drops from "./Drops";
import GraphMob from "./GraphMob";
import DropsTwo from "./DropsTwo";
import CodeSIteArt from "./CodeSIteArt";
import GraphDesk from "./GraphDesk";

interface HeroSlideDecorationsProps {
  variant: {
    name: string;
    colorMain: string;
    colorSecondary: string;
    textColor: string;
    colorLogo: string;
    counterColor: string;
    bottomBlurColor: string;
    graph: {
      colorOne: string;
      colorTwo: string;
      colorThree: string;
      colorFour: string;
    };
    drops: {
      colorOne: string;
      colorTwo: string;
    };
  };
  idx: number;
  mainImage: string;
}

export default function HeroSlideDecorationsStatic({
  variant,
  idx,
  mainImage,
}: HeroSlideDecorationsProps) {
  const {
    colorMain,
    colorSecondary,
    bottomBlurColor,
    colorLogo,
    drops,
    graph,
  } = variant;

  const screenWidth = useScreenWidth();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Gradient ovals (iOS: replace blurs) - same order as HeroSlideDecorations */}

      {/* 1. Top black blur → black gradient (no opacity) */}
      <div
        className="absolute top-[-411px] lg:top-[-683px] left-[calc(50%-550px)] lg:left-[calc(50%-1055px)] w-[1018px] lg:w-[2111px] h-[380px] lg:h-[643px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-black)_10%,transparent_70%)]"
        aria-hidden
      />

      {/* Bottom ellipse (iOS: gradient instead of SVG blur) - mob */}
      <div
        className="md:hidden absolute z-10 bottom-0 translate-y-40 sm:translate-y-[197px] left-[calc(50%-550px)] sm:left-[calc(50%-850px)] w-[1166px] sm:w-[1700px] h-[528px] sm:h-[600px] rounded-full"
        style={{
          background: `radial-gradient(ellipse at center, ${bottomBlurColor} 30%, transparent 70%)`,
        }}
        aria-hidden
      />
      {/* Bottom ellipse (iOS: gradient instead of SVG blur) - desk */}
      <div
        className="hidden md:block absolute z-10 bottom-0 md:translate-y-[458px] md:left-[calc(50%-930px)] w-[2127px] h-[836px] rounded-full"
        style={{
          background: `radial-gradient(ellipse at center, ${bottomBlurColor} 30%, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* 2. colorMain right */}
      <div
        className="absolute z-10 top-[124px] right-[-454px] w-[443px] h-[440px] rounded-full opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, ${colorMain} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* 3. colorMain left (lg only) */}
      <div
        className="hidden lg:block absolute z-10 top-[4px] lg:top-[-27px] left-[14px] lg:left-[71px] w-[289px] lg:w-[443px] h-[287px] lg:h-[440px] rounded-full opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, ${colorMain} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* 4. colorSecondary left top */}
      <div
        className="absolute -z-20 left-[-312px] lg:left-[-273px] top-[-420px] lg:top-[-533px] w-[469px] h-[512px] rounded-full opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, ${colorSecondary} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* Head image */}
      <div
        className="absolute -z-40 right-[calc(50%-260px)] lg:right-[-145px] bottom-[78px] md:bottom-[-22px] lg:bottom-[-248px]
       w-[417px] lg:w-[725px] h-auto aspect-[725/902] mix-blend-hard-light"
        key={`head-static-${idx}`}
      >
        <Image
          src="/images/homePage/hero/head.webp"
          alt="head"
          width={725}
          height={902}
          priority={idx === 0}
          sizes="(max-width: 768px) 417px, 725px"
          className="w-[417px] lg:w-[725px] h-auto"
          fetchPriority={idx === 0 ? "high" : "auto"}
        />
      </div>

      {/* Logo */}
      <div
        className="absolute -z-30 left-[-52px] lg:left-[-32px] bottom-[319px] md:bottom-[119px] lg:bottom-[180px]"
        key={`logo-static-${idx}`}
      >
        <CodeSIteArt colorLogo={colorLogo} />
      </div>

      {/* Main LCP image */}
      <div
        className="absolute -z-10 left-[calc(50%-232px)] lg:left-auto lg:right-[-134px] bottom-[155px] md:bottom-[55px] lg:bottom-[-39px] w-[586px] lg:w-[1032px] h-auto aspect-[2064/1548]"
        key={`mainImage-static-${idx}`}
      >
        <Image
          src={mainImage}
          alt="laptops"
          width={2064}
          height={1548}
          priority={idx === 0}
          sizes="(max-width: 768px) 586px, (max-width: 1024px) 1032px, 1032px"
          className="w-[586px] lg:w-[1032px] h-auto"
          fetchPriority={idx === 0 ? "high" : "auto"}
        />
      </div>

      {/* 5. colorSecondary bottom right */}
      <div
        className="absolute -z-20 bottom-[185px] md:bottom-[85px] lg:bottom-[213px] right-[calc(50%-176px)] lg:right-[calc(50%-418px)] w-[310px] lg:w-[443px] h-[307px] lg:h-[440px] rounded-full opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, ${colorSecondary} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      {screenWidth < 1024 ? (
        <div
          className="lg:hidden absolute -z-10 bottom-[98px] md:bottom-[-2px] left-[calc(50%-180px)]"
          key={`graphMob-static-${idx}`}
        >
          <GraphMob graph={graph} idx={idx} />
        </div>
      ) : (
        <div
          className="hidden lg:block absolute -z-10 bottom-[68px] left-[504px]"
          key={`graphDesk-static-${idx}`}
        >
          <GraphDesk graph={graph} idx={idx} />
        </div>
      )}

      <div
        className="lg:hidden absolute z-10 bottom-[-77px] right-[13px]"
        key={`drops-static-${idx}`}
      >
        <Drops drops={drops} />
      </div>

      <div
        className="absolute z-10 bottom-[460px] lg:bottom-[290px] right-[24px] lg:right-[calc(50%-25px)] lg:-rotate-[83deg]"
        key={`dropsTwo-static-${idx}`}
      >
        <DropsTwo drops={drops} />
      </div>
    </div>
  );
}
