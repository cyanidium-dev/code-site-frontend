"use client";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface PartnersMarqueeProps {
  className?: string;
}

const partnersImages = [
  {
    src: "/images/homePage/partners/aleko.png",
    width: 507,
    height: 35,
  },
  {
    src: "/images/homePage/partners/art-lover.png",
    width: 233,
    height: 43,
  },
  {
    src: "/images/homePage/partners/bravo.png",
    width: 159,
    height: 35,
  },
  {
    src: "/images/homePage/partners/clarion.png",
    width: 308,
    height: 41,
  },
  {
    src: "/images/homePage/partners/efedra.png",
    width: 121,
    height: 50,
  },
  {
    src: "/images/homePage/partners/finance-league.png",
    width: 246,
    height: 43,
  },
  {
    src: "/images/homePage/partners/glimmer.png",
    width: 150,
    height: 43,
  },
  {
    src: "/images/homePage/partners/grinchenko.png",
    width: 257,
    height: 51,
  },
  {
    src: "/images/homePage/partners/kondor.png",
    width: 342,
    height: 29,
  },
  {
    src: "/images/homePage/partners/raul-auto.png",
    width: 114,
    height: 81,
  },
  {
    src: "/images/homePage/partners/solid-renovation.png",
    width: 306,
    height: 39,
  },
  {
    src: "/images/homePage/partners/sytnykov.png",
    width: 227,
    height: 57,
  },
  {
    src: "/images/homePage/partners/tatarka.png",
    width: 166,
    height: 25,
  },
  {
    src: "/images/homePage/partners/uneed.png",
    width: 172,
    height: 47,
  },
  {
    src: "/images/homePage/partners/way-to-ireland.png",
    width: 353,
    height: 43,
  },
  {
    src: "/images/homePage/partners/yangoly.png",
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
        "min-w-[120vw] flex items-center h-[59px] lg:h-[115px] rotate-[-3deg] bg-white",
        className
      )}
    >
      {partnersImages.map((image, index) => {
        // Для мобільних пристроїв (до lg) зменшуємо висоту в 2 рази
        const mobileHeight = image.height / 2;
        const mobileWidth = Math.round(
          (image.width * mobileHeight) / image.height
        );

        return (
          <Image
            key={index}
            src={image.src}
            alt={`Partner ${index + 1}`}
            width={image.width}
            height={image.height}
            className={`block mx-4 lg:mx-8 object-contain lg:!h-auto lg:!w-auto`}
            style={{
              height: `${mobileHeight}px`,
              width: `${mobileWidth}px`,
            }}
            sizes="(max-width: 1023px) 200px, 300px"
          />
        );
      })}
    </Marquee>
  );
}
