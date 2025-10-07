import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import FaqList from "./FaqList";
import { TELEGRAM_LINK, EMAIL } from "@/constants/constants";

export default function FAQ() {
  const t = useTranslations("homePage.faq");

  return (
    <section className="pt-[118px] lg:pt-[155px]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">
          <SectionTitle
            variant="pink"
            className="max-w-[501px] text-[40px] lg:text-[64px] font-bold leading-none"
          >
            {t("title")}
          </SectionTitle>
          <div className="lg:max-w-[271px] text-[16px] font-light leading-[120%]">
            <p className="mb-6">{t("descriptionOne")}</p>
            <p>
              {t("descriptionTwo")}{" "}
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-semibold xl:hover:text-blue-light focus-visible:text-blue-light transition duration-300 ease-in-out"
              >
                Telegram
              </a>
              {t("descriptionThree")}
              <a
                href={`mailto:${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-semibold xl:hover:text-blue-light focus-visible:text-blue-light transition duration-300 ease-in-out"
              >
                {EMAIL}
              </a>
              .
            </p>
            <p> {t("descriptionFour")}</p>
          </div>
        </div>
        <FaqList />
      </Container>
    </section>
  );
}
