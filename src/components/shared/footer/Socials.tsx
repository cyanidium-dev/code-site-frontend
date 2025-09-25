import { Link } from "@/i18n/navigation";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TiktokIcon from "../icons/TiktokIcon";

export default function Socials() {
  const socialsList = [
    { icon: <LinkedinIcon />, url: "/" },
    { icon: <InstagramIcon />, url: "/" },
    { icon: <TelegramIcon />, url: "/" },
    { icon: <TiktokIcon />, url: "/" },
  ];

  return (
    <ul className="flex items-center gap-x-5 mb-[43px] md:mb-0">
      {socialsList.map(({ icon, url }, idx) => (
        <li key={idx}>
          <Link
            href={url}
            className="xl:hover:text-blue-light focus-visible:text-blue-light transition duration-300 ease-in-out"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
