"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import MainButton from "@/components/shared/buttons/MainButton";
import CallbackFormModal from "../modals/CallbackFormModal";
import { useTranslations } from "next-intl";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import NotificationModal from "../modals/NotificationModal";

interface ClientApplicationProps {
  buttonText: string;
  title: string;
}

export default function ClientApplication({
  buttonText,
  title,
}: ClientApplicationProps) {
  const t = useTranslations();
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 1, scale: 0.9, y: 30 })}
        className="w-full"
      >
        <MainButton onClick={() => setIsPopUpShown(true)}>
          {buttonText}
        </MainButton>
      </motion.div>
      <CallbackFormModal
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
        setIsNotificationShown={setIsNotificationShown}
        setIsError={setIsError}
        title={title}
        description={t("modals.description")}
      />
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
      <Backdrop
        isVisible={isPopUpShown || isNotificationShown}
        onClick={
          isNotificationShown
            ? () => setIsNotificationShown(false)
            : () => setIsPopUpShown(false)
        }
      />
    </>
  );
}
