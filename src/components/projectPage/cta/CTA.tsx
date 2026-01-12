import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import CTADecorations from "./CTADecorations";
import ClientApplication from "@/components/shared/clientApplication/ClientApplication";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function CTA() {
  const t = useTranslations("projectPage.cta");

  return (
    <section>
      <Container className="relative pt-[128px] lg:pt-[206px] pb-[605px] lg:pb-[274px]">
        <CTADecorations />
        <SectionTitle
          variant="pink"
          text="separated"
          className="mb-8 text-[40px] sm:text-[44px] lg:text-[64px] font-bold leading-[108%]"
        >
          {t("title")}
        </SectionTitle>
        <ClientApplication
          variant="pink"
          variants={fadeInAnimation({ delay: 0.8, scale: 0.85 })}
          buttonText={t("button")}
          className="sm:max-w-[328px]"
        />
      </Container>
    </section>
  );
}
