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
        {/* Gradient oval (iOS: match black blur) - single div, no opacity */}
        <div
          className="absolute left-[-113px] lg:left-[-183px] bottom-[-375px] lg:bottom-[-475px] w-[1072px] lg:w-[1072px] h-[1022px] lg:h-[1022px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-black)_10%,transparent_100%)]"
          aria-hidden
        />
      </div>

      {/* Gradient oval (iOS: match blue blur) - same position as FounderDecorations */}
      <div
        className="absolute -z-20 bottom-[-128px] lg:bottom-[-46px] right-[-391px] lg:right-[-748px] w-[388px] lg:w-[712px] h-[346px] lg:h-[637px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,var(--color-blue-bright)_0%,transparent_70%)]"
        aria-hidden
      />
    </>
  );
}

