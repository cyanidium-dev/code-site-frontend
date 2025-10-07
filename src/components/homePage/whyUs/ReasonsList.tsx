import { useTranslations } from "next-intl";
import ReasonCard from "./ReasonCard";

export default function ReasonsList() {
  const t = useTranslations("homePage.whyUs");

  const reasonsList = [
    { title: t("reasonOne.title"), description: t("reasonOne.description") },
    { title: t("reasonTwo.title"), description: t("reasonTwo.description") },
    {
      title: t("reasonThree.title"),
      description: t("reasonThree.description"),
    },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-5 md:flex-wrap">
      {reasonsList.map((reason, idx) => (
        <ReasonCard key={idx} reason={reason} idx={idx} />
      ))}
    </ul>
  );
}
