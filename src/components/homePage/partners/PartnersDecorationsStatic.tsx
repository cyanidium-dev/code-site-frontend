"use client";

import Image from "next/image";

export default function PartnersDecorationsStatic() {
  return (
    <div>
      {/* Drops mobile */}
      <div className="absolute -z-10 top-[49px] right-[-40px]">
        <Image
          src="/images/homePage/partners/drops.svg"
          alt="drops"
          width="183"
          height="184"
          className="lg:hidden"
        />
      </div>

      {/* Chain mobile */}
      <div className="lg:hidden absolute -z-30 top-[77px] left-[calc(50%-205px)]">
        <Image
          src="/images/homePage/partners/chainMob.webp"
          alt="chain"
          width="455"
          height="198"
          sizes="(max-width: 1024px) 455px, 0px"
        />
      </div>

      {/* Chain desktop */}
      <div className="hidden lg:block absolute -z-30 top-[26px] right-[-302px]">
        <Image
          src="/images/homePage/partners/chainDesk.webp"
          alt="chain"
          width="912"
          height="225"
          sizes="(min-width: 1024px) 912px, 0px"
          className="hidden lg:block"
        />
      </div>

      {/* Gradient ovals (iOS: single div like original) - black: no opacity; main: opacity */}
      <div
        className="absolute -z-20 left-[calc(50%-266px)] lg:left-[34px] top-[-53px] lg:top-[-138px] w-[531px] lg:w-[1064px] h-[381px] lg:h-[496px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-black)_10%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="hidden lg:block absolute -z-20 left-[-484px] top-[-222px] w-[471px] h-[506px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,var(--color-main)_0%,transparent_70%)]"
        aria-hidden
      />
    </div>
  );
}

