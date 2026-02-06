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
    </div>
  );
}

