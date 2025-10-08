"use client";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslations } from "next-intl";

import { CallBackValidation } from "@/schemas/CallbackValidation";

import CustomizedInput from "../formComponents/CustomizedInput";
import SubmitButton from "../formComponents/SubmitButton";

export interface ValuesCallBackFormType {
  name: string;
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
  className = "",
}: CallBackFormProps) {
  const t = useTranslations("forms");
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Форма "Залиш свої контакти"</b>\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Email:</b> ${values.phone.trim()}\n`;
    try {
      setIsLoading(true);
      setIsError(false);
      await axios({
        method: "post",
        url: "/api/telegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsPopUpShown(false);
      resetForm();
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className={`${className} flex flex-col gap-y-3.5`}>
          <CustomizedInput
            fieldName="name"
            placeholder={t("namePlaceholder")}
            isRequired
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="phone"
            placeholder={t("phonePlaceholder")}
            isRequired
            errors={errors}
            touched={touched}
          />
          <SubmitButton
            dirty={dirty}
            isValid={isValid}
            isLoading={isLoading}
            text={t("submitButton")}
            className="mt-1.5 h-10"
          />
        </Form>
      )}
    </Formik>
  );
}
