"use client";

import { useState } from "react";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import CustomizedInput from "@/components/shared/formComponents/CustomizedInput";
import SubmitButton from "@/components/shared/formComponents/SubmitButton";
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
      className="py-[56px] sm:py-[80px] lg:py-[140px] bg-[radial-gradient(circle_at_top_left,_rgba(255,73,184,0.18)_0%,_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(8,153,252,0.15)_0%,_transparent_55%)]"
    >
      <Container>
        <div className="max-w-[680px] mx-auto">
          <SectionTitle
            variant="pink"
            className="mb-6 text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.05]"
          >
            {data.h2}
          </SectionTitle>
          <p className="mb-8 lg:mb-10 text-[15px] lg:text-[17px] leading-[150%] text-white/80">
            {data.subtitle}
          </p>

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
                    fieldName="contact"
                    placeholder={data.formFields.contact.placeholder}
                    isRequired
                    errors={errors}
                    touched={touched}
                    variant="gradient"
                  />
                  <CustomizedInput
                    fieldName="message"
                    as="textarea"
                    placeholder={data.formFields.message.placeholder}
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
          </div>

          <p className="mt-6 text-center text-[13px] lg:text-[14px] text-white/65">
            {data.altContactPrefix}{" "}
            <a
              href={data.altContactUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-actay font-bold text-white underline-offset-4 hover:underline"
            >
              {data.altContactLabel}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
