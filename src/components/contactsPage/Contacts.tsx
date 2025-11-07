"use client";
import { useTranslations } from "next-intl";
import Container from "../shared/container/Container";
import PageTitle from "../shared/titles/PageTitle";
import CallBackApplication from "../shared/callBackApplication/CallBackApplication";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import SocialsList from "./SocialsList";
import ContactsDecorations from "./ContactsDecorations";

export default function Contacts() {
  const t = useTranslations("contactsPage");

  return (
    <section>
      <Container className="relative flex flex-col lg:flex-row-reverse lg:justify-between gap-15 pt-[569px] lg:pt-[180px] pb-30 lg:pb-[174px]">
        <ContactsDecorations />
        <div>
          <PageTitle
            variant="pink"
            className="max-w-[312px] lg:max-w-[328px] mb-6 lg:mb-7 text-[40px] lg:text-[48px] xl:text-[48px] font-bold leading-none"
          >
            {t("title")}
          </PageTitle>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({ delay: 0.4, y: 30 })}
            className="max-w-[250px] lg:max-w-[328px] mb-6 lg:mb-[45px] text-[14px] lg:text-[16px] font-light leading-[120%]"
          >
            {t("description")}
          </motion.p>
          <CallBackApplication />
        </div>
        <SocialsList />
      </Container>
    </section>
  );
}
