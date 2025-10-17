import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";
import HeroSlide from "./HeroSlide";

export default function Hero() {
  const t = useTranslations("homePage.hero");

  const heroSlides = [
    {
      mainImage: "/images/homePage/hero/slideOne.png",
      variant: "blue",
      title: t("slideOne.title"),
      description: t("slideOne.description"),
      button: t("slideOne.button"),
      subtitle: t("slideOne.subtitle"),
      list: {
        listOne: {
          value: t("slideOne.list.listOne.value"),
          description: t("slideOne.list.listOne.description"),
        },
        listTwo: {
          value: t("slideOne.list.listTwo.value"),
          description: t("slideOne.list.listTwo.description"),
        },
        listThree: {
          value: t("slideOne.list.listThree.value"),
          description: t("slideOne.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideTwo.png",
      variant: "neon",
      title: t("slideTwo.title"),
      description: t("slideTwo.description"),
      button: t("slideTwo.button"),
      subtitle: t("slideTwo.subtitle"),
      list: {
        listOne: {
          value: t("slideTwo.list.listOne.value"),
          description: t("slideTwo.list.listOne.description"),
        },
        listTwo: {
          value: t("slideTwo.list.listTwo.value"),
          description: t("slideTwo.list.listTwo.description"),
        },
        listThree: {
          value: t("slideTwo.list.listThree.value"),
          description: t("slideTwo.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideThree.png",
      variant: "gray",
      title: t("slideThree.title"),
      description: t("slideThree.description"),
      button: t("slideThree.button"),
      subtitle: t("slideThree.subtitle"),
      list: {
        listOne: {
          value: t("slideThree.list.listOne.value"),
          description: t("slideThree.list.listOne.description"),
        },
        listTwo: {
          value: t("slideThree.list.listTwo.value"),
          description: t("slideThree.list.listTwo.description"),
        },
        listThree: {
          value: t("slideThree.list.listThree.value"),
          description: t("slideThree.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideFour.png",
      variant: "navy",
      title: t("slideFour.title"),
      description: t("slideFour.description"),
      button: t("slideFour.button"),
      subtitle: t("slideFour.subtitle"),
      list: {
        listOne: {
          value: t("slideFour.list.listOne.value"),
          description: t("slideFour.list.listOne.description"),
        },
        listTwo: {
          value: t("slideFour.list.listTwo.value"),
          description: t("slideFour.list.listTwo.description"),
        },
        listThree: {
          value: t("slideFour.list.listThree.value"),
          description: t("slideFour.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideFive.png",
      variant: "green",
      title: t("slideFive.title"),
      description: t("slideFive.description"),
      button: t("slideFive.button"),
      subtitle: t("slideFive.subtitle"),
      list: {
        listOne: {
          value: t("slideFive.list.listOne.value"),
          description: t("slideFive.list.listOne.description"),
        },
        listTwo: {
          value: t("slideFive.list.listTwo.value"),
          description: t("slideFive.list.listTwo.description"),
        },
        listThree: {
          value: t("slideFive.list.listThree.value"),
          description: t("slideFive.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideSix.png",
      variant: "yellow",
      title: t("slideSix.title"),
      description: t("slideSix.description"),
      button: t("slideSix.button"),
      subtitle: t("slideSix.subtitle"),
      list: {
        listOne: {
          value: t("slideSix.list.listOne.value"),
          description: t("slideSix.list.listOne.description"),
        },
        listTwo: {
          value: t("slideSix.list.listTwo.value"),
          description: t("slideSix.list.listTwo.description"),
        },
        listThree: {
          value: t("slideSix.list.listThree.value"),
          description: t("slideSix.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideSeven.png",
      variant: "orange",
      title: t("slideSeven.title"),
      description: t("slideSeven.description"),
      button: t("slideSeven.button"),
      subtitle: t("slideSeven.subtitle"),
      list: {
        listOne: {
          value: t("slideSeven.list.listOne.value"),
          description: t("slideSeven.list.listOne.description"),
        },
        listTwo: {
          value: t("slideSeven.list.listTwo.value"),
          description: t("slideSeven.list.listTwo.description"),
        },
        listThree: {
          value: t("slideSeven.list.listThree.value"),
          description: t("slideSeven.list.listThree.description"),
        },
      },
    },
    {
      mainImage: "/images/homePage/hero/slideEight.png",
      variant: "red",
      title: t("slideEight.title"),
      description: t("slideEight.description"),
      button: t("slideEight.button"),
      subtitle: t("slideSeven.subtitle"),
      list: {
        listOne: {
          value: t("slideEight.list.listOne.value"),
          description: t("slideEight.list.listOne.description"),
        },
        listTwo: {
          value: t("slideEight.list.listTwo.value"),
          description: t("slideEight.list.listTwo.description"),
        },
        listThree: {
          value: t("slideEight.list.listThree.value"),
          description: t("slideEight.list.listThree.description"),
        },
      },
    },
  ];

  return (
    <section className="pt-25 lg:pt-[157px] pb-6 lg:pb-0">
      <Container className="md:flex justify-between">
        {heroSlides.map((slide, idx) => (
          <HeroSlide key={idx} slide={slide} />
        ))}
      </Container>
    </section>
  );
}
