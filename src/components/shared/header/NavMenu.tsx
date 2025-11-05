"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import NavMenuItem from "./NavMenuItem";
import { twMerge } from "tailwind-merge";

interface NavMenuProps {
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function NavMenu({
  setIsHeaderMenuOpened,
  className = "",
}: NavMenuProps) {
  const t = useTranslations("header");

  const pathname = usePathname();
  const locale = useLocale();
  const isContacts =
    pathname === `/${locale}/contacts` || pathname === "/contacts";

  const navMenuList = [
    { title: t("portfolio"), link: "/portfolio" },
    { title: t("home"), link: "/" },
    { title: t("services"), link: "/services" },
    { title: t("blog"), link: "/blog" },
    { title: t("contacts"), link: "/contacts" },
  ];

  return (
    <ul
      className={twMerge(
        `flex flex-col md:flex-row md:items-center gap-y-9 gap-x-4 w-full md:w-fit ${isContacts ? "lg:text-black" : "lg:text-white"}`,
        className
      )}
    >
      {navMenuList.map((menuItem, idx) => (
        <NavMenuItem
          key={idx}
          menuItem={menuItem}
          setIsHeaderMenuOpened={setIsHeaderMenuOpened}
        />
      ))}
    </ul>
  );
}
