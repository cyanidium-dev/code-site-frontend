"use client";

import Image from "next/image";
import { forwardRef } from "react";

const containerClass =
  "absolute left-[calc(50%-233px)] lg:left-[calc(50%-395px)] xl:left-[calc(50%-465px)] top-[203px] lg:top-[-200px] xl:top-[-250px] w-[467px] lg:w-[671px] xl:w-[721px] aspect-[721/820]";

export default forwardRef<HTMLDivElement>(function CTAPhoneStatic(_, ref) {
  return (
    <div ref={ref} className={containerClass}>
      {/* Phone */}
      <div>
        <Image
          src="/images/homePage/cta/phone.webp"
          alt="phone"
          width={721}
          height={820}
          sizes="(max-width: 1024px) 467px, (max-width: 1280px) 671px, 721px"
          className="w-[467px] lg:w-[671px] xl:w-[721px] h-auto"
        />
      </div>

      {/* Drops */}
      <div className="hidden lg:block absolute -z-10 top-[-66px] left-[55px] w-[291px] h-[301px]">
        <Image
          src="/images/homePage/cta/drops.svg"
          alt="drops"
          width={291}
          height={301}
          className="w-[291px] h-auto"
        />
      </div>

      {/* Code Site */}
      <div className="absolute -z-20 left-[calc(50%-126px)] lg:left-[-114px] top-[-22px] lg:top-[204px] w-[613px] lg:w-[1300px] h-auto aspect-[2711/347]">
        <Image
          src="/images/homePage/cta/code-site.webp"
          alt="code-site.art"
          width={2711}
          height={347}
          sizes="(max-width: 1024px) 613px, 1300px"
          className="w-[613px] lg:w-[1300px] h-auto"
        />
      </div>

      {/* Tag */}
      <div className="absolute -z-10 top-[-27px] lg:top-0 right-[64px] lg:right-[23px] w-[180px] lg:w-[341px] h-auto aspect-[341/300]">
        <Image
          src="/images/homePage/cta/tag.svg"
          alt="tag"
          width={341}
          height={300}
          className="w-[209px] lg:w-[341px] h-auto"
        />
      </div>

      {/* Heart Pink (mobile) */}
      <div className="lg:hidden absolute -z-20 top-[71px] left-[calc(50%-203px)] w-[390px] h-auto aspect-[781/755]">
        <Image
          src="/images/homePage/cta/heart-pink.webp"
          alt="heart"
          width={781}
          height={755}
          sizes="390px"
          className="w-[390px] h-auto"
        />
      </div>

      {/* Gradient oval (iOS: no backdrop-filter blur) */}
      {/* Same center as blur oval (131+136.5, 50%-2) / (255+196.5, 284+141); larger size so position = center − half size */}
      <div
        className="absolute -z-40 top-[-32px] lg:top-[156px] left-[calc(50%-239px)] lg:left-[189px] w-[474px] lg:w-[474px] h-[599px] lg:h-[593px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,var(--color-main)_0%,transparent_70%)]"
      />
    </div>
  );
});
