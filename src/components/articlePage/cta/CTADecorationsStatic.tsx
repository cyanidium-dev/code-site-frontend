"use client";

import Image from "next/image";

export default function CTADecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Hand */}
      <div className="absolute -z-20 top-[379px] lg:top-auto lg:bottom-[-50px] left-[calc(50%-334px)] lg:left-[calc(50%-7px)] w-[518px] lg:w-[625px] h-auto aspect-[1251/1761] rotate-[20deg] lg:rotate-none">
        <Image
          src="/images/articlePage/cta/hand.webp"
          alt="hand"
          width={1251}
          height={1761}
          sizes="(max-width: 1024px) 440px, 625px"
          className="w-[440px] lg:w-[625px] h-auto"
        />
      </div>

      {/* Code site */}
      <div className="absolute -z-30 top-[202px] lg:top-[533px] right-[calc(50%-494px)] lg:right-auto lg:left-[calc(50%-654px)] w-[473px] h-auto aspect-[473/320]">
        <Image
          src="/images/articlePage/cta/code-site.svg"
          alt="code-site.art"
          width={473}
          height={320}
          className="w-[473px] h-auto"
        />
      </div>

      {/* Blue logo */}
      <div className="hidden lg:block absolute -z-40 bottom-[470px] right-[calc(50%-378px)] w-[502px] h-auto aspect-[502/433]">
        <Image
          src="/images/articlePage/cta/code-site-blue.svg"
          alt="code-site.art"
          width={502}
          height={433}
          className="w-[502px] h-auto"
        />
      </div>

      {/* Tags */}
      <div className="hidden lg:block absolute -z-40 bottom-[507px] right-[calc(50%-437px)] w-[335px] h-auto aspect-[335/416]">
        <Image
          src="/images/articlePage/cta/tags.svg"
          alt="tags"
          width={335}
          height={416}
          className="w-[335px] h-auto"
        />
      </div>

      {/* Drops top */}
      <div className="hidden lg:block absolute bottom-[618px] right-[calc(50%-661px)] w-[244px] h-auto aspect-[244/235]">
        <Image
          src="/images/articlePage/cta/drops-top.svg"
          alt="drops"
          width={244}
          height={235}
          className="w-[244px] h-auto"
        />
      </div>

      {/* Drops bottom */}
      <div className="hidden lg:block absolute bottom-[287px] right-[calc(50%-210px)] w-[283px] h-auto aspect-[283/280]">
        <Image
          src="/images/articlePage/cta/drops-bottom.svg"
          alt="drops"
          width={283}
          height={280}
          className="w-[283px] h-auto"
        />
      </div>

      {/* Gradient ovals (iOS-style) */}
      <div
        className="absolute -z-50 top-[306px] lg:top-auto lg:bottom-[461px] left-[calc(50%-406px)] lg:left-auto lg:right-[calc(50%-450px)] w-[446px] lg:w-[538px] h-[434px] lg:h-[503px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-purple-light) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -z-30 top-[77px] lg:top-auto lg:bottom-[142px] right-[calc(50%-693px)] lg:right-auto lg:left-[calc(50%-1285px)] w-[630px] h-[636px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-main) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute z-10 lg:-z-10 bottom-[-248px] lg:bottom-[-350px] left-[-25%] w-[150%] lg:w-[200%] h-[436px] lg:h-[699px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}

