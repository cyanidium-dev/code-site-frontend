"use client";

import {
  ErrorMessage,
  Field,
  FormikErrors,
  FormikTouched,
  useFormikContext,
} from "formik";
import LoaderIcon from "../icons/LoaderIcon";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  isRequired?: boolean;
  as?: string;
  labelClassName?: string;
  fieldClassName?: string;
  mask?: string | RegExp | (string | RegExp)[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  inputType?: string;
  fieldFontSize?: string;
}

const labelStyles = "relative flex flex-col w-full";
const fieldStyles =
  "relative w-full h-12 px-6 py-3 text-[12px] lg:text-[14px] font-normal leading-[143%] text-black placeholder:text-black border-[1.5px] rounded-full outline-none resize-none transition duration-300 ease-out";
const errorStyles =
  "absolute bottom-[-11px] left-2 text-[9px] font-normal leading-none text-red-500";

export default function CustomizedInput({
  fieldName,
  placeholder,
  errors,
  touched,
  as,
  labelClassName = "",
  fieldClassName = "",
  fieldFontSize = "",
  mask = "",
  onChange,
  onFocus,
  inputType = "text",
  isLoading = false,
}: CustomizedInputProps) {
  const { handleChange } = useFormikContext<Values>();
  const isError = (errors as Record<string, unknown>)[fieldName];
  const isTouched = (touched as Record<string, unknown>)[fieldName];

  return (
    <label className={`${labelStyles} ${labelClassName}`}>
      <Field
        as={as}
        mask={mask}
        placeholder={placeholder}
        name={fieldName}
        type={inputType}
        autoComplete="on"
        onChange={onChange || handleChange}
        onFocus={onFocus}
        className={`${fieldStyles} ${
          as === "textarea" ? "h-[112px]" : ""
        } ${fieldClassName} ${fieldFontSize} ${
          isError && isTouched ? "border-red" : "border-black"
        }`}
      />
      {isLoading && <LoaderIcon />}

      <ErrorMessage name={fieldName} component="p" className={errorStyles} />
    </label>
  );
}
