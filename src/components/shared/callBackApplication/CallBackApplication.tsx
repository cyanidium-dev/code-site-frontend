"use client";

import CallBackForm from "@/components/shared/forms/CallBackForm";
import { useState } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";
import NotificationModal from "@/components/shared/modals/NotificationModal";

interface ClientApplicationProps {
  buttonText: string;
  variant?: "pink" | "blue" | "gradient" | "white";
  className?: string;
  buttonClassName?: string;
  variants?: {};
}

export default function CallBackApplication() {
  const t = useTranslations();

  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.8, scale: 0.85 })}
        className="md:max-w-[328px]"
      >
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          buttonVariant="pink"
          buttonText={t("articlePage.cta.leaveApplication")}
          inputVariant="gradient"
        />
      </motion.div>
      <NotificationModal
        title={isError ? t("modals.errorTitle") : t("modals.successTitle")}
        description={
          isError
            ? t("modals.errorDescription")
            : t("modals.successDescription")
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
    </>
  );
}
