import { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import MainButton from "../buttons/MainButton";

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
  return (
    <Modal isModalShown={isPopUpShown} setIsModalShown={setIsPopUpShown}>
      <h3 className="mb-3 font-actay text-[24px] xl:text-[32px] font-bold uppercase leading-[122%] text-center">
        {title}
      </h3>
      <p className="mb-8 text-[12px] lg:text-[16px] font-light leading-[122%] text-center text-black">
        {description}
      </p>
    </Modal>
  );
}
