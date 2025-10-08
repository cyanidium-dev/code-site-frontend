import * as yup from "yup";
import { useTranslations } from "next-intl";
import { nameRegex } from "../regex/regex";

export const CallBackValidation = () => {
  const t = useTranslations("forms.errors");

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    phone: yup.string().required(t("required")),
  });

  return callBackFormValidationSchema;
};
