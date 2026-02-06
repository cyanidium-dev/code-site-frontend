"use client";

import Image from "next/image";

export default function ReviewsDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Code Site */}
      <div className="absolute -z-30 left-[-113px] lg:left-[-96px] top-[-183px] lg:top-[109px]">
        <Image
          src="/images/homePage/reviews/code-site.svg"
          alt="code-site"
          width={359}
          height={423}
          className="w-[359px] lg:w-[537px] h-auto"
        />
      </div>

      {/* Girl */}
      <div className="absolute -z-50 top-[-154px] lg:top-[-286px] right-[-61px] lg:right-auto lg:left-[-15px] w-[313px] lg:w-[533px] h-auto aspect-[625/1336] mix-blend-plus-lighter">
        <Image
          src="/images/homePage/reviews/girl.webp"
          alt="girl"
          width={313}
          height={668}
          sizes="(max-width: 1024px) 313px, 533px"
          className="w-[313px] lg:w-[533px] h-auto"
        />
      </div>

      {/* Drops */}
      <div className="absolute -z-10 top-[275px] left-[-53px]">
        <Image
          src="/images/homePage/reviews/drops.svg"
          alt="drops"
          width="245"
          height="247"
        />
      </div>

      {/* Head Background */}
      <div className="absolute -z-30 left-[41px] sm:left-[301px] top-[344px] sm:top-[94px] w-[313px] h-auto aspect-[626/939] mix-blend-color-dodge">
        <Image
          src="/images/homePage/reviews/headBg.webp"
          alt="head background"
          width={626}
          height={939}
          sizes="313px"
        />
      </div>

      {/* Tags */}
      <div className="hidden -z-20 lg:block absolute top-[-212px] right-[-34px]">
        <Image
          src="/images/homePage/reviews/tags.svg"
          alt="tags"
          width="358"
          height="336"
        />
      </div>

      {/* Drops Top Desk */}
      <div className="hidden lg:block absolute top-[-200px] right-[87px]">
        <Image
          src="/images/homePage/reviews/drops-top-desk.svg"
          alt="drops"
          width="311"
          height="265"
        />
      </div>

      {/* Drops Bottom Desk */}
      <div className="hidden lg:block absolute bottom-[-207px] right-[150px]">
        <Image
          src="/images/homePage/reviews/drops-bottom-desk.svg"
          alt="drops"
          width="345"
          height="348"
        />
      </div>

      {/* Girl Desk */}
      <div className="hidden lg:block absolute z-[15] top-[-56px] right-[-72px]">
        <Image
          src="/images/homePage/reviews/girlDesk.webp"
          alt="girl"
          width={437}
          height={934}
          sizes="437px"
        />
      </div>
    </div>
  );
}

