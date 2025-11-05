import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";

interface SocialItemProps {
  social: { title: string; name: string; url: string };
}

export default function SocialItem({ social }: SocialItemProps) {
  const { title, name, url } = social;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="xs:w-[calc(50%-26px)] h-fit"
    >
      <h3 className="mb-3 text-[14px] font-light leading-[120%] uppercase lg:text-black">
        {title}
      </h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="font-actay text-[12px] font-bold leading-[120%] uppercase lg:text-black xl:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
      >
        {name}
      </a>
    </motion.li>
  );
}
