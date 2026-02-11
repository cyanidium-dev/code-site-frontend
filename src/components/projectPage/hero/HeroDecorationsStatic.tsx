"use client";

import Image from "next/image";

export default function HeroDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Head */}
      <div className="absolute -z-30 bottom-[-386px] md:bottom-auto md:top-[76px] left-[calc(50%-64px)] md:left-[calc(50%+120px)] w-[421px] h-auto aspect-[421/459] mix-blend-color-dodge">
        <Image
          src="/images/projectPage/hero/head.webp"
          alt="head"
          width={421}
          height={459}
          sizes="421px"
          className="w-[421px] h-auto"
        />
      </div>

      {/* Code-site center */}
      <div className="absolute -z-40 bottom-[-264px] md:bottom-auto md:top-[90px] left-[50%-160px] md:left-1/2 w-[445px] h-auto aspect-[445/476]">
        <Image
          src="/images/projectPage/hero/code-site.svg"
          alt="code-site"
          width={445}
          height={476}
          className="w-[445px] h-auto"
        />
      </div>

      {/* Code-site right (desktop) */}
      <div className="hidden lg:block absolute -z-40 top-[25px] left-[calc(50%+402px)] w-[445px] h-auto aspect-[445/476]">
        <Image
          src="/images/projectPage/hero/code-site.svg"
          alt="code-site"
          width={445}
          height={476}
          className="w-[445px] h-auto"
        />
      </div>

      {/* Gradient oval (iOS-style) */}
      <div
        className="absolute -z-10 bottom-[-743px] md:bottom-auto md:top-[263px] left-[calc(50%-1073px/2+54.5px)] md:left-[calc(50%-300px)] w-[298%] md:w-[1073px] h-[709px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 30%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

