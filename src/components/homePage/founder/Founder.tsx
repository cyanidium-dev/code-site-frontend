import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Founder() {
  const t = useTranslations("homePage.founder");

  return (
    <section className="pt-30 xl:pt-[130px]">
      <Container className="md:flex gap-[19px]">
        <div className="relative rounded-[8px] overflow-hidden w-full md:w-[calc(100%-19px-334px)] h-[514px]">
          <Image
            src="/images/homePage/founder/founder.webp"
            alt="founder"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 hidden md:flex flex-col justify-between w-[334px] h-auto px-8 pt-11 pb-[25px] rounded-[8px] overflow-hidden bg-[linear-gradient(180deg,#61C5FD_0%,#6D92FE_100%)]">
          <p className="font-actay text-[32px] font-bold leading-[108%] uppercase">
            {t("actualSolutions")}
          </p>
          <p className="relative z-10 font-guano-apes text-[61px] uppercase leading-none">
            {t("designOne")}
            <br />
            <span className=" text-transparent bg-clip-text bg-[linear-gradient(90deg,_#ffffff_0%,_#F671C8_100%)]">
              {" "}
              {t("designTwo")}
            </span>
          </p>
          <Image
            src="/images/homePage/founder/figure.webp"
            alt="figure"
            width={240}
            height={380}
            className="absolute right-0 bottom-0 mix-blend-darken"
          />
          <Image
            src="/images/homePage/founder/drops.svg"
            alt="figure"
            width="184"
            height="350"
            className="absolute z-5 right-0 bottom-[23px]"
          />
        </div>
      </Container>
    </section>
  );
}
