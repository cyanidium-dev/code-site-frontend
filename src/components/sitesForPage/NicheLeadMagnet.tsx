"use client";

import { useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

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
      className="audit"
    >
      <div className="audit-bg" />
      <div className="audit-inner">
        <div className="audit-text">
            <h2 className="audit-h">{data.h2}</h2>
            <p className="audit-sub">
              {data.subtitle}
            </p>
            <ul className="audit-list">
              {data.benefits.map((b) => (
                <li key={b}>
                  <span className="audit-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="audit-foot">
              {data.promise}
            </p>
          </div>

          <div className="audit-form-card">
            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={submit}
            >
              {({ errors, touched, dirty, isValid }) => (
                <Form className="flex flex-col gap-y-3">
                  <input type="hidden" name="niche" value={slug} />
                  <Field name="name" type="text" className="audit-input" placeholder={data.formFields.name.placeholder} />
                  <ErrorMessage name="name" component="p" className="text-[11px] text-red-400 -mt-1" />
                  <Field name="email" type="text" className="audit-input" placeholder={data.formFields.email.placeholder} />
                  <ErrorMessage name="email" component="p" className="text-[11px] text-red-400 -mt-1" />
                  <Field name="phone" type="tel" className="audit-input" placeholder={data.formFields.phone?.placeholder ?? "+380 (__) ___-__-__"} />
                  <ErrorMessage name="phone" component="p" className="text-[11px] text-red-400 -mt-1" />
                  <Field name="websiteUrl" type="url" className="audit-input" placeholder={data.formFields.websiteUrl.placeholder} />
                  <ErrorMessage name="websiteUrl" component="p" className="text-[11px] text-red-400 -mt-1" />
                  <Field name="hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
                  <button
                    type="submit"
                    disabled={!(dirty && isValid) || isLoading}
                    className="audit-submit mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Надсилаємо..." : data.ctaText}
                  </button>
                  {status === "success" ? (
                    <p role="status" className="mt-2 text-[13px] text-emerald-300">
                      Дякуємо! Надішлемо розбір протягом 24 годин.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p role="alert" className="mt-2 text-[13px] text-red-400">
                      Щось пішло не так. Спробуйте ще раз або напишіть нам у
                      Telegram.
                    </p>
                  ) : null}
                </Form>
              )}
            </Formik>
            <p className="audit-disclaim">
              {data.smallText}
            </p>
          </div>
      </div>
    </section>
  );
}
