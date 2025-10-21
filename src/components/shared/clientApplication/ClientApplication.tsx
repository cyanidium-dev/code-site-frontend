"use client";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import MainButton from "@/components/shared/buttons/MainButton";
import CallbackFormModal from "../modals/CallbackFormModal";
import { useTranslations } from "next-intl";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import NotificationModal from "../modals/NotificationModal";

interface ClientApplicationProps {
  buttonText: string;
  variant?: "pink" | "blue" | "gradient" | "white";
  className?: string;
  buttonClassName?: string;
  variants?: {};
  onModalStateChange?: (isOpen: boolean) => void;
}

export default function ClientApplication({
  buttonText,
  variant = "white",
  className = "",
  buttonClassName = "",
  variants = {},
  onModalStateChange,
}: ClientApplicationProps) {
  const t = useTranslations();
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  // Повідомляємо батьківський компонент про зміни стану модалки
  useEffect(() => {
    if (onModalStateChange) {
      onModalStateChange(isPopUpShown || isNotificationShown);
    }
  }, [isPopUpShown, isNotificationShown, onModalStateChange]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants}
        className={className}
      >
        <MainButton
          variant={variant}
          onClick={() => setIsPopUpShown(true)}
          className={buttonClassName}
        >
          {buttonText}
        </MainButton>
      </motion.div>
      <CallbackFormModal
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
        setIsNotificationShown={setIsNotificationShown}
        setIsError={setIsError}
        title={t("modals.leaveContacts")}
        description={t("modals.fillData")}
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
