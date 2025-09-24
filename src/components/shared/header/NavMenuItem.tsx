"use client";
import { Dispatch, SetStateAction } from "react";
import { Link } from "@/i18n/navigation";

interface NavMenuItemProps {
  menuItem: { title: string; link: string };
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenuItem({
  menuItem,
  setIsHeaderMenuOpened,
}: NavMenuItemProps) {
  const { title, link } = menuItem;

  return (
    <li>
      <Link
        onClick={
          setIsHeaderMenuOpened ? () => setIsHeaderMenuOpened(false) : undefined
        }
        href={link}
        className="block font-actay text-[16px] md:text-[12px] font-bold uppercase
        leading-[120%] xl:hover:text-pink focus-visible:text-pink transition duration-300 ease-in-out"
      >
        <p className="mb-[18px] md:mb-0">{title}</p>
        <div className="md:hidden w-full h-[1.7px] bg-[linear-gradient(270deg,_#121212_7.18%,_#FF8ED2_93.41%)]"></div>
      </Link>
    </li>
  );
}
