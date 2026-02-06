"use client";

import Image from "next/image";

export default function FounderDecorationsStatic() {
  return (
    <>
      {/* Drops */}
      <div className="absolute top-[-33px] lg:top-[-115px] left-[-11px] lg:left-[-12px] z-10 pointer-events-none">
        <Image
          src="/images/homePage/founder/drops.svg"
          alt="drops"
          width={179}
          height={130}
          className="w-[179px] lg:w-[263px] h-auto"
        />
      </div>

      {/* Code Site */}
      <div className="hidden lg:block absolute top-[-99px] left-[-96px] -z-10 pointer-events-none">
        <Image
          src="/images/homePage/founder/code-site.svg"
          alt="logo"
          width={379}
          height={417}
          className="w-[379px] h-auto"
        />
      </div>

      {/* Figure */}
      <div className="absolute bottom-[-254px] lg:bottom-[-295px] right-[-254px] lg:right-[-506px] -z-30 pointer-events-none w-[463px] lg:w-[851px] aspect-[851/781] overflow-visible">
        <div className="bg-black">
          <Image
            src="/images/homePage/founder/tag.svg"
            alt="tag"
            width="180"
            height="157"
            className="hidden lg:block absolute left-[207px] top-[62px]"
          />
          <Image
            src="/images/homePage/founder/figure.webp"
            alt="figure"
            width={851}
            height={781}
            sizes="(max-width: 1024px) 463px, 851px"
            className="object-cover w-full h-full object-top-left  mix-blend-color-dodge"
          />
        </div>
      </div>
    </>
  );
}

