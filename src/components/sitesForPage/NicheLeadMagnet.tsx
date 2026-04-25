"use client";

import { useState } from "react";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import CustomizedInput from "@/components/shared/formComponents/CustomizedInput";
import SubmitButton from "@/components/shared/formComponents/SubmitButton";
import type { NicheLeadMagnet as NicheLeadMagnetData } from "@/types/niche";

interface NicheLeadMagnetProps {
  data: NicheLeadMagnetData;
  slug: string;
}

interface AuditFormValues {
  name: string;
  email: string;
  phone: string;
  websiteUrl: string;
  hp: string;
}

const TELEGRAM_NICK_REGEX = /^@?[a-zA-Z0-9_]{5,32}$/;
const PHONE_REGEX = /^[0-9+\-()\s]{7,20}$/;

const ValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Мінімум 2 символи")
    .required("Обов'язкове поле"),
  email: Yup.string()
    .trim()
    .test(
      "email-or-telegram",
      "Вкажіть email або Telegram-нік (наприклад, @username)",
      (value) => {
        const v = (value ?? "").trim();
        if (!v) return false;
        return Yup.string().email().isValidSync(v) || TELEGRAM_NICK_REGEX.test(v);
      }
    )
    .required("Обов'язкове поле"),
  phone: Yup.string()
    .trim()
    .test("phone", "Некоректний номер телефону", (value) =>
      PHONE_REGEX.test((value ?? "").trim())
    )
    .required("Обов'язкове поле"),
  websiteUrl: Yup.string()
    .trim()
    .url("Введіть посилання, що починається з https://")
    .required("Обов'язкове поле"),
  hp: Yup.string(),
});

export default function NicheLeadMagnet({ data, slug }: NicheLeadMagnetProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const initialValues: AuditFormValues = {
    name: "",
    email: "",
    phone: "",
    websiteUrl: "",
    hp: "",
  };

  const submit = async (
    values: AuditFormValues,
    helpers: FormikHelpers<AuditFormValues>
  ) => {
    if (values.hp) {
      helpers.resetForm();
      setStatus("success");
      return;
    }
    try {
      setIsLoading(true);
      setStatus("idle");
      await axios.post("/api/audit-request", {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        websiteUrl: values.websiteUrl.trim(),
        niche: slug,
      });
      helpers.resetForm();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="lead-magnet"
      className="py-[80px] lg:py-[140px] bg-[radial-gradient(circle_at_top_right,_rgba(8,153,252,0.15)_0%,_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(255,73,184,0.18)_0%,_transparent_55%)]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionTitle
              variant="blue"
              className="mb-6 text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.05]"
            >
              {data.h2}
            </SectionTitle>
            <p className="mb-8 text-[15px] lg:text-[17px] leading-[150%] text-white/80">
              {data.subtitle}
            </p>
            <ul className="flex flex-col gap-3">
              {data.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[14px] lg:text-[16px] leading-[145%] text-white/85"
                >
                  <span className="mt-1 text-blue-light" aria-hidden="true">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[13px] lg:text-[14px] text-white/60 italic">
              {data.promise}
            </p>
          </div>

          <div className="p-6 lg:p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm">
            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={submit}
            >
              {({ errors, touched, dirty, isValid }) => (
                <Form className="flex flex-col gap-y-4">
                  <input type="hidden" name="niche" value={slug} />
                  <CustomizedInput
                    fieldName="name"
                    placeholder={data.formFields.name.placeholder}
                    isRequired
                    errors={errors}
                    touched={touched}
                    variant="gradient"
                  />
                  <CustomizedInput
                    fieldName="email"
                    inputType="text"
                    placeholder={data.formFields.email.placeholder}
                    isRequired
                    errors={errors}
                    touched={touched}
                    variant="gradient"
                  />
                  <CustomizedInput
                    fieldName="phone"
                    inputType="tel"
                    placeholder={data.formFields.phone?.placeholder ?? "+380 (__) ___-__-__"}
                    isRequired
                    errors={errors}
                    touched={touched}
                    variant="gradient"
                  />
                  <CustomizedInput
                    fieldName="websiteUrl"
                    inputType="url"
                    placeholder={data.formFields.websiteUrl.placeholder}
                    isRequired
                    errors={errors}
                    touched={touched}
                    variant="gradient"
                  />
                  <CustomizedInput
                    fieldName="hp"
                    placeholder=""
                    errors={errors}
                    touched={touched}
                    labelClassName="absolute left-[-9999px] w-px h-px overflow-hidden"
                  />
                  <SubmitButton
                    variant="gradient"
                    dirty={dirty}
                    isValid={isValid}
                    isLoading={isLoading}
                    text={data.ctaText}
                    className="mt-2 h-[52px]"
                  />
                  {status === "success" ? (
                    <p
                      role="status"
                      className="mt-2 text-[13px] lg:text-[14px] text-emerald-300"
                    >
                      Дякуємо! Надішлемо розбір протягом 24 годин.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p
                      role="alert"
                      className="mt-2 text-[13px] lg:text-[14px] text-red-400"
                    >
                      Щось пішло не так. Спробуйте ще раз або напишіть нам у
                      Telegram.
                    </p>
                  ) : null}
                </Form>
              )}
            </Formik>
            <p className="mt-5 text-[12px] lg:text-[13px] text-white/55 leading-[145%]">
              {data.smallText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
