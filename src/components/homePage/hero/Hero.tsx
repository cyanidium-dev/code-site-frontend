import { useTranslations } from "next-intl";
import HeroSlide from "./HeroSlide";

export default function Hero() {
  const t = useTranslations("homePage.hero");

  const heroSlides = [
    {
      variant: {
        name: "blue",
        colorMain: "#020AAC",
        colorSecondary: "#48CEFF",
        textColor: "#FFFFFF",
        colorLogo: "#93B4FF26",
        counterColor: "#87CBFF",
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
      mainImage: "/images/homePage/hero/slideOne.png",
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
      mainImage: "/images/homePage/hero/slideTwo.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
        name: "gray",
        colorMain: "#383838",
        textColor: "#FFFFFF",
        colorSecondary: "#FFFFFF",
        colorLogo: "#868686",
        counterColor: "#73C5FF",
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
      mainImage: "/images/homePage/hero/slideThree.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
        name: "navy",
        colorMain: "#06153A",
        textColor: "#FFFFFF",
        colorSecondary: "#0337B3",
        colorLogo: "#4B74D83D",
        counterColor: "#87ABFF",
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
      mainImage: "/images/homePage/hero/slideFour.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
        name: "green",
        colorMain: "#23911E",
        textColor: "#FFFFFF",
        colorSecondary: "#BFFF9F",
        colorLogo: "#BFFF9F3D",
        counterColor: "#BFFF9F",
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
      mainImage: "/images/homePage/hero/slideFive.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
        name: "yellow",
        colorMain: "#FBC702",
        textColor: "#121212",
        colorSecondary: "#FFF6D5",
        colorLogo: "#FAC6023D",
        counterColor: "#FBC702",
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
      mainImage: "/images/homePage/hero/slideSix.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
        name: "orange",
        colorMain: "#DC6532",
        textColor: "#FFFFFF",
        colorSecondary: "#FFD097",
        colorLogo: "#FFD0973D",
        counterColor: "#FFD097",
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
      mainImage: "/images/homePage/hero/slideSeven.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
        name: "red",
        colorMain: "#C90218",
        textColor: "#FFFFFF",
        colorSecondary: "#FF95A0",
        colorLogo: "#FF95A03D",
        counterColor: "#FF95A0",
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
      mainImage: "/images/homePage/hero/slideEight.png",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
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
  ];

  return (
    <section className="overflow-hidden">
      {heroSlides.map((slide, idx) => (
        <HeroSlide key={idx} slide={slide} idx={idx} />
      ))}
    </section>
  );
}
