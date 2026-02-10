"use client";

import Image from "next/image";

export default function BlogListDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Hand */}
      <div
        className="absolute -z-20 bottom-[-258px] lg:bottom-[115px] right-[calc(50%-362px)] lg:right-auto lg:left-[calc(50%-716px)] lg:rotate-[20deg]
        w-[596px] h-auto aspect-[1192/1293] bg-black"
      >
        <div
          className="absolute inset-0 mix-blend-hard-light"
        >
          <Image
            src="/images/blogPage/blogList/hand.webp"
            alt="hand"
            width={1192}
            height={1293}
            sizes="596px"
            className="w-[596px] h-auto"
          />
        </div>
      </div>

      {/* Drops */}
      <div className="absolute lg:z-10 bottom-[184px] lg:bottom-[244px] right-[calc(50%-264px)] lg:right-auto lg:left-[calc(50%-330px)] w-[244px] h-auto aspect-[244/235]">
        <Image
          src="/images/blogPage/blogList/drops.svg"
          alt="drops"
          width={244}
          height={235}
          className="w-[244px] h-auto"
        />
      </div>

      {/* Chain (desktop) */}
      <div className="hidden lg:block absolute -z-20 bottom-[358px] right-[calc(50%-778px)] w-[912px] h-auto aspect-[912/225]">
        <Image
          src="/images/homePage/partners/chainDesk.webp"
          alt="chain"
          width={912}
          height={225}
          sizes="(min-width: 1024px) 912px, 0px"
          className="w-[912px] h-auto"
        />
      </div>

      {/* Gradient ovals (iOS-style) */}
      <div
        className="absolute bottom-[-400px] lg:bottom-[30px] right-[calc(50%-650px)] lg:right-auto lg:left-[calc(50%-486px)] w-[845px] h-[605px] rounded-full opacity-95"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 30%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="lg:hidden absolute bottom-[702px] left-[calc(50%-712px)] w-[469px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-pink) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="hidden lg:block absolute bottom-[297px] right-[calc(50%-130px)] w-[445px] h-[405px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="hidden lg:block absolute bottom-[261px] right-[calc(50%-800px)] w-[445px] h-[405px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

