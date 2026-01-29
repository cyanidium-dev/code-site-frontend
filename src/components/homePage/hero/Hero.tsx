"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef, useCallback } from "react";
import HeroSlide from "./HeroSlide";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export default function Hero() {
  const t = useTranslations("homePage.hero");
  const { isIos } = useIosDevice();
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const heroSlides = [
    {
      variant: {
        name: "blue",
        colorMain: "#020AAC",
        colorSecondary: "#48CEFF",
        textColor: "#FFFFFF",
        colorLogo: "#93B4FF26",
        counterColor: "#87CBFF",
        bottomBlurColor: "#121212",
        slideButtonColor: "#87CBFF",
        buttonGradient:
          "bg-[linear-gradient(90deg,#089AFA_0%,#FF49B8_116.67%)]",
        graph: {
          colorOne: "#4A0124",
          colorTwo: "#FC077D",
          colorThree: "#F4F8FF",
          colorFour: "#0486F8",
        },
        drops: { colorOne: "#0486F8", colorTwo: "#879FFF" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#D9E5FF_30.2%,#268DF4_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideOne.webp",
      title: t("slideOne.title"),
      description: t("slideOne.description"),
      button: t("slideOne.button"),
      subtitle: t("slideOne.subtitle"),
      list: [
        {
          value: t("slideOne.list.listOne.value"),
          description: t("slideOne.list.listOne.description"),
        },
        {
          value: t("slideOne.list.listTwo.value"),
          description: t("slideOne.list.listTwo.description"),
        },
        {
          value: t("slideOne.list.listThree.value"),
          description: t("slideOne.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "neon",
        colorMain: "#C9FA5F",
        textColor: "#121212",
        colorSecondary: "#FFFFFF",
        colorLogo: "#7BB2003D",
        counterColor: "#D1FD5F",
        bottomBlurColor: "#121212",
        slideButtonColor: "#121212",
        buttonGradient:
          "bg-[linear-gradient(90deg,#121212_0%,#121212_116.67%)]",
        graph: {
          colorOne: "#4A0124",
          colorTwo: "#FC077D",
          colorThree: "#F4F8FF",
          colorFour: "#CAFB5F",
        },
        drops: { colorOne: "#ffffff", colorTwo: "#CBFC5E" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#F5FFDA_30.2%,#D0FD5D_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideTwo.webp",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
      list: [
        {
          value: t("slideTwo.list.listOne.value"),
          description: t("slideTwo.list.listOne.description"),
        },
        {
          value: t("slideTwo.list.listTwo.value"),
          description: t("slideTwo.list.listTwo.description"),
        },
        {
          value: t("slideTwo.list.listThree.value"),
          description: t("slideTwo.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "gray",
        colorMain: "#383838",
        textColor: "#FFFFFF",
        colorSecondary: "#FFFFFF",
        colorLogo: "#868686",
        counterColor: "#73C5FF",
        bottomBlurColor: "#121212",
        slideButtonColor: "#73C5FF",
        buttonGradient:
          "bg-[linear-gradient(90deg,#73C5FF_0%,#73C5FF_116.67%)]",
        graph: {
          colorOne: "#73C5FF",
          colorTwo: "#FFFFFF",
          colorThree: "#F4F8FF",
          colorFour: "#73C5FF",
        },
        drops: { colorOne: "#73C5FF", colorTwo: "#73C5FF" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#FFFFFF_30.2%,#73C5FF_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideThree.webp",
      title: t("slideThree.title"),
      description: t("slideThree.description"),
      button: t("slideThree.button"),
      subtitle: t("slideThree.subtitle"),
      list: [
        {
          value: t("slideThree.list.listOne.value"),
          description: t("slideThree.list.listOne.description"),
        },
        {
          value: t("slideThree.list.listTwo.value"),
          description: t("slideThree.list.listTwo.description"),
        },
        {
          value: t("slideThree.list.listThree.value"),
          description: t("slideThree.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "navy",
        colorMain: "#06153A",
        textColor: "#FFFFFF",
        colorSecondary: "#0337B3",
        colorLogo: "#4B74D83D",
        counterColor: "#87ABFF",
        bottomBlurColor: "#121212",
        slideButtonColor: "#6A99FF",
        buttonGradient:
          "bg-[linear-gradient(90deg,#75A0FF_-51.37%,#FFFFFF_69.07%)] text-[#07163D]",
        graph: {
          colorOne: "#5185FF",
          colorTwo: "#FFFFFF",
          colorThree: "#F4F8FF",
          colorFour: "#5185FF",
        },
        drops: { colorOne: "#86ABFF", colorTwo: "#86ABFF" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#FFFFFF_30.2%,#6A99FF_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideFour.webp",
      title: t("slideFour.title"),
      description: t("slideFour.description"),
      button: t("slideFour.button"),
      subtitle: t("slideFour.subtitle"),
      list: [
        {
          value: t("slideFour.list.listOne.value"),
          description: t("slideFour.list.listOne.description"),
        },
        {
          value: t("slideFour.list.listTwo.value"),
          description: t("slideFour.list.listTwo.description"),
        },
        {
          value: t("slideFour.list.listThree.value"),
          description: t("slideFour.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "green",
        colorMain: "#23911E",
        textColor: "#FFFFFF",
        colorSecondary: "#BFFF9F",
        colorLogo: "#BFFF9F3D",
        counterColor: "#BFFF9F",
        bottomBlurColor: "#23911E",
        slideButtonColor: "#BFFF9F",
        buttonGradient:
          "bg-[linear-gradient(90deg,#BFFF9F_-51.37%,#FFFFFF_69.07%)] text-[#07163D]",
        graph: {
          colorOne: "#BFFF9F",
          colorTwo: "#FFFFFF",
          colorThree: "#F4F8FF",
          colorFour: "#BFFF9F",
        },
        drops: { colorOne: "#BFFF9F", colorTwo: "#BFFF9F" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#FFFFFF_30.2%,#BFFF9F_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideFive.webp",
      title: t("slideFive.title"),
      description: t("slideFive.description"),
      button: t("slideFive.button"),
      subtitle: t("slideFive.subtitle"),
      list: [
        {
          value: t("slideFive.list.listOne.value"),
          description: t("slideFive.list.listOne.description"),
        },
        {
          value: t("slideFive.list.listTwo.value"),
          description: t("slideFive.list.listTwo.description"),
        },
        {
          value: t("slideFive.list.listThree.value"),
          description: t("slideFive.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "yellow",
        colorMain: "#FBC702",
        textColor: "#121212",
        colorSecondary: "#FFF6D5",
        colorLogo: "#FFF9E375",
        counterColor: "#FBC702",
        bottomBlurColor: "#121212",
        slideButtonColor: "#121212",
        buttonGradient:
          "bg-[linear-gradient(90deg,#121212_0%,#121212_116.67%)]",
        graph: {
          colorOne: "#FBC702",
          colorTwo: "#FFFFFF",
          colorThree: "#F4F8FF",
          colorFour: "#FBC702",
        },
        drops: { colorOne: "#FBC702", colorTwo: "#FBC702" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#FFFFFF_30.2%,#FBC702_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideSix.webp",
      title: t("slideSix.title"),
      description: t("slideSix.description"),
      button: t("slideSix.button"),
      subtitle: t("slideSix.subtitle"),
      list: [
        {
          value: t("slideSix.list.listOne.value"),
          description: t("slideSix.list.listOne.description"),
        },
        {
          value: t("slideSix.list.listTwo.value"),
          description: t("slideSix.list.listTwo.description"),
        },
        {
          value: t("slideSix.list.listThree.value"),
          description: t("slideSix.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "orange",
        colorMain: "#DC6532",
        textColor: "#FFFFFF",
        colorSecondary: "#FFD097",
        colorLogo: "#FFD0973D",
        counterColor: "#FFD097",
        bottomBlurColor: "#DC6532",
        slideButtonColor: "#FFD097",
        buttonGradient:
          "bg-[linear-gradient(90deg,#FFD097_-51.37%,#FFFFFF_69.07%)] text-[#07163D]",
        graph: {
          colorOne: "#FFD097",
          colorTwo: "#FFFFFF",
          colorThree: "#F4F8FF",
          colorFour: "#FFD097",
        },
        drops: { colorOne: "#FFD097", colorTwo: "#FFD097" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#FFFFFF_30.2%,#FFD097_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideSeven.webp",
      title: t("slideSeven.title"),
      description: t("slideSeven.description"),
      button: t("slideSeven.button"),
      subtitle: t("slideSeven.subtitle"),
      list: [
        {
          value: t("slideSeven.list.listOne.value"),
          description: t("slideSeven.list.listOne.description"),
        },
        {
          value: t("slideSeven.list.listTwo.value"),
          description: t("slideSeven.list.listTwo.description"),
        },
        {
          value: t("slideSeven.list.listThree.value"),
          description: t("slideSeven.list.listThree.description"),
        },
      ],
    },
    {
      variant: {
        name: "red",
        colorMain: "#C90218",
        textColor: "#FFFFFF",
        colorSecondary: "#FF95A0",
        colorLogo: "#FF95A03D",
        counterColor: "#FF95A0",
        bottomBlurColor: "#C90218",
        slideButtonColor: "#FF95A0",
        buttonGradient:
          "bg-[linear-gradient(90deg,#FF95A0_-51.37%,#FFFFFF_69.07%)] text-[#07163D]",
        graph: {
          colorOne: "#FF95A0",
          colorTwo: "#FFFFFF",
          colorThree: "#F4F8FF",
          colorFour: "#FF95A0",
        },
        drops: { colorOne: "#FF95A0", colorTwo: "#FF95A0" },
        marquee: {
          gradient: "bg-[linear-gradient(90deg,#FFFFFF_30.2%,#FF95A0_59.69%)]",
        },
      },
      mainImage: "/images/homePage/hero/slideEight.webp",
      title: t("slideEight.title"),
      description: t("slideEight.description"),
      button: t("slideEight.button"),
      subtitle: t("slideEight.subtitle"),
      list: [
        {
          value: t("slideEight.list.listOne.value"),
          description: t("slideEight.list.listOne.description"),
        },
        {
          value: t("slideEight.list.listTwo.value"),
          description: t("slideEight.list.listTwo.description"),
        },
        {
          value: t("slideEight.list.listThree.value"),
          description: t("slideEight.list.listThree.description"),
        },
      ],
    },
  ];

  // Функція для скидання таймера при ручному переключенні
  const resetSlideTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
  }, [heroSlides.length]);

  // Мемоізована функція для обробки кліку на кнопку слайду
  const handleSlideClick = useCallback(
    (idx: number) => {
      setCurrentSlide(idx);
      resetSlideTimer();
    },
    [resetSlideTimer]
  );

  // Перемикання слайдів кожні 6 секунд
  useEffect(() => {
    resetSlideTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [resetSlideTimer]);

  return (
    <section className="relative overflow-hidden">
      {/* Навігаційні кнопки слайдів */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 0.4 })}
        className="absolute z-20 left-6 sm:left-[calc(50%-320px+24px)] md:left-auto md:right-[calc(50%-384px+24px)] lg:right-auto lg:left-[calc(50%-512px+40px)]
       xl:left-[calc(50%-640px+40px)] top-[338px] lg:top-1/2 lg:-translate-y-1/2 flex flex-col gap-3 lg:gap-5 pointer-events-auto"
        style={{
          ...(!isIos && { willChange: "transform" }),
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        {heroSlides.map((slide, idx) => (
          <li key={idx} className="leading-none">
            <button
              onClick={() => handleSlideClick(idx)}
              className={`cursor-pointer w-3 h-3 border rounded-full transition duration-300 ease-in-out ${!isIos ? "will-change-transform" : ""} ${
                idx === currentSlide ? "" : " xl:hover:bg-white/50"
              }`}
              style={{
                backgroundColor:
                  idx === currentSlide
                    ? slide.variant.slideButtonColor
                    : undefined,
                borderColor:
                  idx === currentSlide
                    ? slide.variant.slideButtonColor
                    : undefined,
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              aria-label={`Перейти до слайду ${idx + 1}`}
            />
          </li>
        ))}
      </motion.ul>

      {heroSlides.map((slide, idx) => {
        // Рендеримо тільки активний слайд + попередній + наступний для оптимізації
        const shouldRender =
          idx === currentSlide ||
          idx === (currentSlide - 1 + heroSlides.length) % heroSlides.length ||
          idx === (currentSlide + 1) % heroSlides.length;

        if (!shouldRender) return null;

        return (
          <HeroSlide
            key={`slide-${idx}`}
            slide={slide}
            idx={idx}
            isActive={idx === currentSlide}
          />
        );
      })}
    </section>
  );
}
