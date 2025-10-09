import * as motion from "motion/react-client";
import { listVariants, listItemVariantsLeft } from "@/utils/animationVariants";
import StarIcon from "@/components/shared/icons/StarIcon";
import { useTranslations } from "next-intl";

export default function BenefitsList() {
  const t = useTranslations("homePage.founder");

  const benefitsList = [
    t("descriptionOne"),
    t("descriptionTwo"),
    t("descriptionThree"),
    t("descriptionFour"),
    t("descriptionFive"),
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
      className="flex flex-col gap-3"
    >
      {benefitsList.map((benefit, idx) => (
        <motion.li
          viewport={{ once: true, amount: 0.2 }}
          variants={listItemVariantsLeft}
          key={idx}
          className="flex items-center gap-3 min-h-[77px] px-8 py-4 backdrop-blur-[5px]"
        >
          <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
          <StarIcon className="shrink-0" />
          <p className="text-[14px] font-normal leading-[108%]">{benefit}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
