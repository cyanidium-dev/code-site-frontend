"use client";

import { useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import type { NicheProjectFormData } from "@/types/nicheExtras";

interface NicheProjectFormProps {
  data: NicheProjectFormData;
  slug: string;
}

interface ProjectFormValues {
  name: string;
  contact: string;
  message: string;
  hp: string;
}

const ValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Мінімум 2 символи")
    .required("Обов'язкове поле"),
  contact: Yup.string()
    .trim()
    .min(5, "Мінімум 5 символів")
    .required("Обов'язкове поле"),
  message: Yup.string().trim().max(2000, "Максимум 2000 символів"),
  hp: Yup.string(),
});

export default function NicheProjectForm({
  data,
  slug,
}: NicheProjectFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const initialValues: ProjectFormValues = {
    name: "",
    contact: "",
    message: "",
    hp: "",
  };

  const submit = async (
    values: ProjectFormValues,
    helpers: FormikHelpers<ProjectFormValues>
  ) => {
    if (values.hp) {
      helpers.resetForm();
      setStatus("success");
      return;
    }
    try {
      setIsLoading(true);
      setStatus("idle");
      await axios.post("/api/project-request", {
        name: values.name.trim(),
        contact: values.contact.trim(),
        message: values.message.trim(),
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
      id="project-form"
      className="cmp"
    >
      <div className="cmp-bg" />
      <div className="cmp-inner">
        <div className="cmp-contact">
          <div className="cmp-contact-inner">
          <h2 className="cmp-contact-h">
            {data.h2}
          </h2>
          <p className="cmp-contact-sub">
            {data.subtitle}
          </p>

            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={submit}
            >
              {({ errors, touched, dirty, isValid }) => (
                <Form className="cmp-form">
                  <input type="hidden" name="niche" value={slug} />
                  <Field name="name" type="text" className="cmp-input" placeholder={data.formFields.name.placeholder} />
                  <ErrorMessage name="name" component="p" className="text-[11px] text-red-400 -mt-1 text-left" />
                  <Field name="contact" type="text" className="cmp-input" placeholder={data.formFields.contact.placeholder} />
                  <ErrorMessage name="contact" component="p" className="text-[11px] text-red-400 -mt-1 text-left" />
                  <Field name="message" as="textarea" className="cmp-textarea" placeholder={data.formFields.message.placeholder} />
                  <ErrorMessage name="message" component="p" className="text-[11px] text-red-400 -mt-1 text-left" />
                  <Field name="hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
                  <button
                    type="submit"
                    disabled={!(dirty && isValid) || isLoading}
                    className="cmp-submit mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Надсилаємо..." : data.ctaText}
                  </button>
                  {status === "success" ? (
                    <p
                      role="status"
                      className="mt-2 text-[13px] lg:text-[14px] text-emerald-300"
                    >
                      Дякуємо! Відповімо протягом 1–2 годин у робочий час.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p
                      role="alert"
                      className="mt-2 text-[13px] lg:text-[14px] text-red-400"
                    >
                      Щось пішло не так. Напишіть напряму у Telegram.
                    </p>
                  ) : null}
                </Form>
              )}
            </Formik>
          <p className="cmp-contact-foot">
            {data.altContactPrefix}{" "}
            <a
              href={data.altContactUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline-offset-4 hover:underline"
            >
              {data.altContactLabel}
            </a>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
