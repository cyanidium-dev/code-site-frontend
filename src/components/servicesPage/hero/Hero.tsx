import Container from "@/components/shared/container/Container";
import PageTitle from "@/components/shared/titles/PageTitle";
import { useTranslations } from "next-intl";
import DesignToggle from "../designToggle/DesignToggle";

export default function Hero() {
  const t = useTranslations("servicesPage");
  return (
    <section className="pt-[118px] lg:pt-[159px] pb-10 lg:pb-[50px]">
      <Container>
        <PageTitle
          variant="pink"
          className="mb-4 lg:mb-[50px] text-[24px] lg:text-[40px] xl:text-[40px] leading-[108%]"
        >
          {t("title")}
        </PageTitle>
        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
          <p className="text-[14px] lg:text-[16px] font-light leading-[122%] mb-4 lg:mb-0 max-w-[297px]">
            {t("description")}
          </p>
          <DesignToggle />
        </div>
      </Container>
    </section>
  );
}
