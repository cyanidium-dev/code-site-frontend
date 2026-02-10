"use client";

import Image from "next/image";

export default function ServicesDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Purple drops left */}
      <div className="absolute top-[-180px] md:top-[-185px] right-[calc(50%+55px)] md:right-[calc(50%+437px)] w-[225px] md:w-[325px] h-auto aspect-[225/229]">
        <Image
          src="/images/servicesPage/servicesList/drops-purple.svg"
          alt="drops"
          width={225}
          height={229}
          sizes="(max-width: 1024px) 225px, 325px"
          className="w-[225px] md:w-[325px] h-auto"
        />
      </div>

      {/* Blue drops top right (desktop) */}
      <div className="hidden md:block absolute top-[-266px] left-[calc(50%+428px)] w-[350px] h-auto aspect-[350/352]">
        <Image
          src="/images/servicesPage/servicesList/drops-blue-top.svg"
          alt="drops"
          width={350}
          height={352}
          sizes="350px"
          className="w-[350px] h-auto"
        />
      </div>

      {/* Head */}
      <div className="absolute -z-10 bottom-[-135px] md:bottom-[-364px] left-[calc(50%+3px)] md:left-[calc(50%+338px)] w-[473px] md:w-[624px] h-auto aspect-[473/472] mix-blend-color-dodge">
        <Image
          src="/images/servicesPage/servicesList/head.webp"
          alt="head"
          width={473}
          height={472}
          sizes="(max-width: 1024px) 473px, 624px"
          className="w-[473px] md:w-[624px] h-auto"
        />
      </div>

      {/* Code-site blue shape */}
      <div className="absolute -z-30 bottom-[177px] md:bottom-[160px] left-[calc(50%+50px)] md:left-[calc(50%+355px)] w-[337px] md:w-[575px] h-auto aspect-[337/353]">
        <Image
          src="/images/servicesPage/servicesList/code-site-blue.svg"
          alt="code-site"
          width={337}
          height={353}
          className="w-[337px] md:w-[575px] h-auto"
        />
      </div>

      {/* Gradient ovals (match dynamic blurs) */}

      {/* Top pink blur equivalent */}
      <div
        className="absolute -z-20 lg:-z-20 top-0 md:top-[-35px] right-[calc(50%+60px)] md:right-[calc(50%+573px)] w-[70%] md:w-[295px] h-[259px] md:h-[347px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-pink-bright) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Center black blur equivalent */}
      <div
        className="absolute -z-10 top-[180px] md:top-[-689px] left-1/2 -translate-x-1/2 w-[180%] md:w-[100%] h-[408px] md:h-[532px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-black) 10%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Lower pink mobile blur equivalent */}
      <div
        className="absolute lg:hidden -z-10 lg:-z-10 top-[536px] left-[calc(50%+58px)] w-[98%] h-[363px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-pink-bright) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Lower blue mobile blur equivalent */}
      <div
        className="absolute lg:hidden -z-10 lg:-z-10 top-[1076px] right-[calc(50%+19px)] w-[82%] h-[347px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-blue) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Right blue rotated blur equivalent */}
      <div
        className="absolute -z-20 lg:-z-10 bottom-[-110px] right-[calc(50%-230px)] md:right-auto md:left-[calc(50%+380px)] w-[100%] md:w-[306px] h-[528px] md:h-[597px] rounded-full rotate-[56.37deg] origin-center opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-blue) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}

