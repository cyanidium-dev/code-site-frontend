import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
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
        textColor: "var(--color-white)",
        colorLogo: "#93B4FF26",
        counterColor: "#87CBFF",
        graph: {
          colorOne: "#4A0124",
          colorTwo: "#FC077D",
          colorThree: "#F4F8FF",
          colorFour: "#0486F8",
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
    // {
    //   variant: {
    //     name: "neon",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideTwo.png",
    //   title: t("slideTwo.title"),
    //   description: t("slideTwo.description"),
    //   button: t("slideTwo.button"),
    //   subtitle: t("slideTwo.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideTwo.list.listOne.value"),
    //       description: t("slideTwo.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideTwo.list.listTwo.value"),
    //       description: t("slideTwo.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideTwo.list.listThree.value"),
    //       description: t("slideTwo.list.listThree.description"),
    //     },
    //   },
    // },
    // {
    //   variant: {
    //     name: "gray",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideThree.png",
    //   title: t("slideThree.title"),
    //   description: t("slideThree.description"),
    //   button: t("slideThree.button"),
    //   subtitle: t("slideThree.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideThree.list.listOne.value"),
    //       description: t("slideThree.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideThree.list.listTwo.value"),
    //       description: t("slideThree.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideThree.list.listThree.value"),
    //       description: t("slideThree.list.listThree.description"),
    //     },
    //   },
    // },
    // {
    //   variant: {
    //     name: "navy",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideFour.png",
    //   title: t("slideFour.title"),
    //   description: t("slideFour.description"),
    //   button: t("slideFour.button"),
    //   subtitle: t("slideFour.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideFour.list.listOne.value"),
    //       description: t("slideFour.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideFour.list.listTwo.value"),
    //       description: t("slideFour.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideFour.list.listThree.value"),
    //       description: t("slideFour.list.listThree.description"),
    //     },
    //   },
    // },
    // {
    //   variant: {
    //     name: "green",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideFive.png",
    //   title: t("slideFive.title"),
    //   description: t("slideFive.description"),
    //   button: t("slideFive.button"),
    //   subtitle: t("slideFive.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideFive.list.listOne.value"),
    //       description: t("slideFive.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideFive.list.listTwo.value"),
    //       description: t("slideFive.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideFive.list.listThree.value"),
    //       description: t("slideFive.list.listThree.description"),
    //     },
    //   },
    // },
    // {
    //   variant: {
    //     name: "yellow",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideSix.png",
    //   title: t("slideSix.title"),
    //   description: t("slideSix.description"),
    //   button: t("slideSix.button"),
    //   subtitle: t("slideSix.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideSix.list.listOne.value"),
    //       description: t("slideSix.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideSix.list.listTwo.value"),
    //       description: t("slideSix.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideSix.list.listThree.value"),
    //       description: t("slideSix.list.listThree.description"),
    //     },
    //   },
    // },
    // {
    //   variant: {
    //     name: "orange",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideSeven.png",
    //   title: t("slideSeven.title"),
    //   description: t("slideSeven.description"),
    //   button: t("slideSeven.button"),
    //   subtitle: t("slideSeven.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideSeven.list.listOne.value"),
    //       description: t("slideSeven.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideSeven.list.listTwo.value"),
    //       description: t("slideSeven.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideSeven.list.listThree.value"),
    //       description: t("slideSeven.list.listThree.description"),
    //     },
    //   },
    // },
    // {
    //   variant: {
    //     name: "red",
    //     colorMain: "#020AAC",
    //     colorSecondary: "#48CEFF",
    //     colorLogo: "#93B4FF26",
    //     graph: {
    //       colorOne: "#4A0124",
    //       colorTwo: "#FC077D",
    //       colorThree: "#F4F8FF",
    //       colorFour: "#0486F8",
    //     },
    //   },
    //   mainImage: "/images/homePage/hero/slideEight.png",
    //   title: t("slideEight.title"),
    //   description: t("slideEight.description"),
    //   button: t("slideEight.button"),
    //   subtitle: t("slideSeven.subtitle"),
    //   list: {
    //     listOne: {
    //       value: t("slideEight.list.listOne.value"),
    //       description: t("slideEight.list.listOne.description"),
    //     },
    //     listTwo: {
    //       value: t("slideEight.list.listTwo.value"),
    //       description: t("slideEight.list.listTwo.description"),
    //     },
    //     listThree: {
    //       value: t("slideEight.list.listThree.value"),
    //       description: t("slideEight.list.listThree.description"),
    //     },
    //   },
    // },
  ];

  return (
    <section>
      {heroSlides.map((slide, idx) => (
        <HeroSlide key={idx} slide={slide} idx={idx} />
      ))}
    </section>
  );
}
