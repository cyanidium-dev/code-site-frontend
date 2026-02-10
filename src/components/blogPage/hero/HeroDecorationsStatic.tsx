"use client";

import Image from "next/image";

export default function HeroDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Girl */}
      <div className="absolute top-[344px] lg:top-15 left-[calc(50%-177px)] xl:left-[calc(50%-97px)] w-[353px] h-auto aspect-[353/530]">
        <Image
          src="/images/blogPage/hero/girl.webp"
          alt="girl"
          width={353}
          height={530}
          sizes="353px"
          className="w-[353px] h-auto"
        />
      </div>

      {/* Blue drops */}
      <div className="absolute top-[115px] lg:top-[101px] right-[calc(50%-180px)] lg:right-[calc(50%-701px)] w-[164px] lg:w-[244px] h-auto aspect-[244/235]">
        <Image
          src="/images/blogPage/hero/drops-blue.svg"
          alt="blue drops"
          width={244}
          height={235}
          className="w-[164px] lg:w-[244px] h-auto"
        />
      </div>

      {/* Pink drops (desktop) */}
      <div className="hidden lg:block absolute z-20 top-[328px] left-[calc(50%-290px)] w-[224px] h-auto aspect-[224/252]">
        <Image
          src="/images/blogPage/hero/drops-pink.svg"
          alt="pink drops"
          width={224}
          height={252}
          className="w-[224px] h-auto"
        />
      </div>

      {/* Dices */}
      <div className="absolute -z-10 top-[385px] lg:top-[318px] right-[calc(50%-213px)] lg:right-auto lg:left-[calc(50%-625px)] w-[255px] lg:w-[365px] h-auto aspect-[365/283]">
        <Image
          src="/images/blogPage/hero/dices.webp"
          alt="dices"
          width={365}
          height={283}
          sizes="(max-width: 1024px) 255px, 365px"
          className="w-[255px] lg:w-[365px] h-auto"
        />
      </div>

      {/* Gradient ovals (iOS-style) */}
      <div
        className="absolute -z-30 top-[303px] lg:top-[-288px] left-[calc(50%-437px)] lg:left-[calc(50%-243px)] w-[669px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-purple-bright) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="lg:hidden absolute -z-20 top-[-51px] left-[calc(50%-400px)] w-[697px] h-[392px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute z-10 bottom-[-268px] lg:bottom-[-330px] left-1/2 -translate-x-1/2 lg:left-[calc(50%-1019px)] w-[294%] lg:w-[2564px] h-[572px] lg:h-[699px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 20%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

