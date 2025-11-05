"use client";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface PartnersMarqueeProps {
  className?: string;
}

const partnersImages = [
  {
    src: "/images/homePage/partners/aleko.webp",
    width: 507,
    height: 35,
  },
  {
    src: "/images/homePage/partners/art-lover.webp",
    width: 233,
    height: 43,
  },
  {
    src: "/images/homePage/partners/bravo.webp",
    width: 159,
    height: 35,
  },
  {
    src: "/images/homePage/partners/clarion.webp",
    width: 308,
    height: 41,
  },
  {
    src: "/images/homePage/partners/efedra.webp",
    width: 121,
    height: 50,
  },
  {
    src: "/images/homePage/partners/finance-league.webp",
    width: 246,
    height: 43,
  },
  {
    src: "/images/homePage/partners/glimmer.webp",
    width: 150,
    height: 43,
  },
  {
    src: "/images/homePage/partners/grinchenko.webp",
    width: 257,
    height: 51,
  },
  {
    src: "/images/homePage/partners/kondor.webp",
    width: 342,
    height: 29,
  },
  {
    src: "/images/homePage/partners/raul-auto.webp",
    width: 114,
    height: 81,
  },
  {
    src: "/images/homePage/partners/solid-renovation.webp",
    width: 306,
    height: 39,
  },
  {
    src: "/images/homePage/partners/sytnykov.webp",
    width: 227,
    height: 57,
  },
  {
    src: "/images/homePage/partners/tatarka.webp",
    width: 166,
    height: 25,
  },
  {
    src: "/images/homePage/partners/uneed.webp",
    width: 172,
    height: 47,
  },
  {
    src: "/images/homePage/partners/way-to-ireland.webp",
    width: 353,
    height: 43,
  },
  {
    src: "/images/homePage/partners/yangoly.webp",
    width: 130,
    height: 57,
  },
];

export default function PartnersMarquee({
  className = "",
}: PartnersMarqueeProps) {
  return (
    <Marquee
      autoFill={true}
      speed={70}
      className={twMerge(
        "min-w-[120vw] flex items-center py-[10px] lg:py-4 rotate-[-3deg] bg-white",
        className
      )}
    >
      {partnersImages.map((image, index) => {
        // Для мобільних пристроїв (до lg) зменшуємо висоту в 2 рази
        const mobileHeight = image.height / 2;
        const mobileWidth = Math.round(
          (image.width * mobileHeight) / image.height
        );

        const desktopHeight = image.height;
        const desktopWidth = image.width;

        return (
          <Image
            key={index}
            src={image.src}
            alt={`Partner ${index + 1}`}
            width={desktopWidth}
            height={desktopHeight}
            className={`block mx-4 lg:mx-8 object-contain partner-img`}
            style={
              {
                "--mobile-w": `${mobileWidth}px`,
                "--mobile-h": `${mobileHeight}px`,
                "--desktop-w": `${desktopWidth}px`,
                "--desktop-h": `${desktopHeight}px`,
              } as React.CSSProperties
            }
            sizes="(max-width: 1023px) 200px, 300px"
          />
        );
      })}
    </Marquee>
  );
}
