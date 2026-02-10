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

      {/* Gradient oval (iOS: match blue blur left) - single div like original */}
      <div
        className="absolute -z-40 left-[-481px] top-[30px] w-[596px] h-[600px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,#0C96FA_0%,transparent_70%)]"
        aria-hidden
      />
      {/* Gradient oval (iOS: match blue blur right lg) - single div like original */}
      <div
        className="hidden lg:block absolute -z-10 right-[-195px] top-[-33px] w-[596px] h-[600px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,#0C96FA_0%,transparent_70%)]"
        aria-hidden
      />

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

      {/* Gradient oval (iOS: match black blur bottom) - single div like original */}
      <div
        className="absolute -z-10 lg:z-20 left-[-169px] sm:left-[14px] lg:left-[-532px] top-[550px] sm:top-[320px] lg:top-auto lg:bottom-[-191px] w-[697px] lg:w-[2344px] h-[449px] lg:h-[887px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-black)_10%,transparent_100%)]"
        aria-hidden
      />

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

