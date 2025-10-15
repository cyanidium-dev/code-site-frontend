import { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import { TELEGRAM_LINK } from "@/constants/constants";
import { useTranslations } from "next-intl";
import TelegramIcon from "../icons/TelegramIcon";

interface NotificationModalProps {
  title: string;
  description: string;
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationModal({
  title,
  description,
  isPopUpShown,
  setIsPopUpShown,
}: NotificationModalProps) {
  const t = useTranslations("modals");

  return (
    <Modal isModalShown={isPopUpShown} setIsModalShown={setIsPopUpShown}>
      <h3 className="mb-3 font-actay text-[24px] xl:text-[32px] font-bold uppercase leading-[122%] text-center text-black">
        {title}
      </h3>
      <p className="mb-8 text-[12px] lg:text-[16px] font-light leading-[122%] text-center text-black">
        {description}
      </p>
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="relative flex justify-between lg:justify-center items-center rounded-full max-w-[276px] lg:max-w-[376px] h-[54px] mx-auto px-6 lg:px-4 text-[12px] lg:text-[16px] 
        bg-[linear-gradient(90deg,#0899FC_0%,#FF49B8_116.67%)] active:scale-[98%] focus-visible:brightness-125 xl:hover:brightness-125 
        font-bold uppercase transition duration-300 ease-in-out"
      >
        {t("sendMessage")}
        <TelegramIcon className="absolute top-[7px] right-[7px] size-10" />
      </a>
    </Modal>
  );
}
