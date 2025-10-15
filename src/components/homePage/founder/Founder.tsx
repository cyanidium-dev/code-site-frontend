import { useTranslations } from "next-intl";
import FounderAnimated from "./FounderAnimated";
import FounderContent from "./FounderContent";

export default function Founder() {
  const t = useTranslations("homePage.founder");

  return (
    <FounderAnimated>
      <FounderContent actualSolutionsText={t("actualSolutions")} />
    </FounderAnimated>
  );
}
