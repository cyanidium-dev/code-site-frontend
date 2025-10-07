import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BenefitsList from "./BenefitsList";

export default function Founder() {
  const t = useTranslations("homePage.founder");

  return (
    <section className="pt-30 xl:pt-[130px]">
      <Container className="flex flex-col md:flex-row gap-12 md:gap-5">
        <div className="relative rounded-[8px] overflow-hidden w-full md:w-[calc(100%-19px-334px)] h-[514px]">
          <Image
            src="/images/homePage/founder/founder.webp"
            alt="founder"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:w-[333px]">
          <h2 className="mb-8 font-actay text-[22px] font-bold leading-[108%] uppercase">
            {t("actualSolutions")}
          </h2>
          <BenefitsList />
        </div>
      </Container>
    </section>
  );
}
