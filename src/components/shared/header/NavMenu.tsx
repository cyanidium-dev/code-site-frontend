import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import NavMenuItem from "./NavMenuItem";

interface NavMenuProps {
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenu({ setIsHeaderMenuOpened }: NavMenuProps) {
  const t = useTranslations("header");

  const navMenuList = [
    { title: t("home"), link: "/" },
    { title: t("portfolio"), link: "/portfolio" },
    { title: t("blog"), link: "/blog" },
    { title: t("contacts"), link: "/contacts" },
  ];

  return (
    <ul className="flex flex-col md:flex-row md:items-center gap-y-9 gap-x-4 w-full">
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
