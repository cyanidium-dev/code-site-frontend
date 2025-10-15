import MainButton from "@/components/shared/buttons/MainButton";
import StarIcon from "@/components/shared/icons/StarIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SiteTypesList() {
  const t = useTranslations("homePage.siteTypes");

  const siteTypesList = [
    {
      title: t("landing.title"),
      list: [
        t("landing.listOne"),
        t("landing.listTwo"),
        t("landing.listThree"),
        t("landing.listFour"),
        t("landing.listFive"),
      ],
      price: 800,
    },
    {
      title: t("multipage.title"),
      list: [
        t("multipage.listOne"),
        t("multipage.listTwo"),
        t("multipage.listThree"),
        t("multipage.listFour"),
      ],
      price: 1500,
    },
    {
      title: t("e-commerce.title"),
      list: [
        t("e-commerce.listOne"),
        t("e-commerce.listTwo"),
        t("e-commerce.listThree"),
        t("e-commerce.listFour"),
        t("e-commerce.listFive"),
      ],
      price: 2500,
    },
  ];

  return (
    <ul className="relative">
      {siteTypesList.map(({ title, list, price }, idx) => (
        <li
          key={idx}
          className={`relative w-[108.7%] md:w-[399px] pt-9 odd:pl-[102px] md:odd-pl-30 odd:pr-9 md:odd:pr-8 even:pl-9 md:even:pl-8 even:pr-[102px]
             md:even:pr-30 odd:ml-[-102px] md:odd:-ml-30 even:mr-[-102px] even:md:-mr-30 even:ml-auto backdrop-blur-[18.95px] bg-black/26
            md:px-8 md:py-13 rounded-[8px] ${
              idx === 0
                ? "mb-[437px] md:mb-0 pb-[47px] md:pb-[138px]"
                : idx === 1
                ? "md:relative md:z-10 mb-[105px] md:mb-0 md:mt-[-38px] pb-[453px] md:pb-[435px]"
                : "relative z-10 pb-[210px] md:pb-[156px] md:mt-[-172px]"
            }`}
        >
          <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
          <div className="max-w-[202px] md:max-w-full mx-auto md:mx-0">
            {" "}
            <h3 className="mb-6 font-actay text-[16px] md:text-[22px] font-bold leading-[108%] uppercase">
              {title}
            </h3>
            <p className="mb-6 md:mb-3 font-actay text-[12px] md:text-[16px] font-bold leading-[122%] uppercase">
              {t("forWhom")}
            </p>
            <ul className="flex flex-col gap-[19px] md:gap-3 mb-9 md:mb-10">
              {list.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <StarIcon className="shrink-0" />
                  <p className="text-[12px] md:text-[14px] font-light leading-[122%]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <MainButton
              variant="pink"
              className="mb-3 md:mb-6 px-5 text-[10px] md:text-[12px]"
            >
              <div className="flex items-center justify-between w-full">
                {t("button")}
                <Image
                  src="/images/homePage/siteTypes/star.svg"
                  alt="star"
                  width={21}
                  height={21}
                  className="inline-block mb-1 rotate-45"
                />
              </div>
            </MainButton>
            <p className="w-fit ml-auto">
              <span className="font-actay text-[16px] md:text-[22px] font-bold leading-[120%] uppercase">
                {t("from")}
              </span>
              &nbsp;&nbsp;
              <span
                className="font-guano-apes text-[40px] md:text-[60px] font-medium leading-[108%] uppercase text-transparent bg-clip-text 
            bg-gradient-to-r from-white to-[#F671C8]"
              >
                {price}$
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
