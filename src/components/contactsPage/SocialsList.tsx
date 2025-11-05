import {
  LINKEDIN_LINK,
  TELEGRAM_LINK,
  INSTAGRAM_LINK,
  EMAIL,
  TELEGRAM_NAME,
  INSTAGRAM_NAME,
  LINKEDIN_NAME,
} from "@/constants/constants";
import SocialItem from "./SocialItem";

export default function SocialsList() {
  const socialsList = [
    { title: "Email", name: EMAIL, url: `mailto:${EMAIL}` },
    { title: "Telegram", name: TELEGRAM_NAME, url: TELEGRAM_LINK },
    { title: "Instagram", name: INSTAGRAM_NAME, url: INSTAGRAM_LINK },
    { title: "Linkedin", name: LINKEDIN_NAME, url: LINKEDIN_LINK },
  ];

  return (
    <ul className="flex flex-col xs:flex-row xs:flex-wrap gap-[52px] lg:ml-[132px] lg:mt-9 h-fit">
      {socialsList.map((social, idx) => (
        <SocialItem key={idx} social={social} />
      ))}
    </ul>
  );
}
