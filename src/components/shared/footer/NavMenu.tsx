import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NavMenu() {
  const t = useTranslations("footer");

  const navListOne = [
    { title: t("home"), link: "/" },
    { title: t("portfolio"), link: "/portfolio" },
    { title: t("blog"), link: "/blog" },
    { title: t("contacts"), link: "/contacts" },
  ];

  const navListTwo = [
    { title: t("legalData"), link: "/legal" },
    { title: t("publicContract"), link: "/public-contract" },
    { title: t("offer"), link: "/offer" },
    { title: t("policy"), link: "/policy" },
  ];

  return (
    <div className="flex sm:justify-between gap-x-14 md:gap-x-8 lg:gap-x-[76px] mb-[54px] md:mb-0 sm:w-[60%]">
      <ul className="flex flex-col gap-y-4">
        {navListOne.map(({ title, link }, idx) => (
          <li key={idx}>
            <Link
              href={link}
              className="block font-actay text-[12px] font-bold uppercase leading-[150%] xl:hover:text-blue-light focus-visible:text-blue-light transition duration-300 ease-in-out"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-y-4">
        {navListTwo.map(({ title, link }, idx) => (
          <li key={idx}>
            <Link
              href={link}
              className="block font-actay text-[12px] font-bold uppercase leading-[150%] xl:hover:text-blue-light focus-visible:text-blue-light transition duration-300 ease-in-out"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
