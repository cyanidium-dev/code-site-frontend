"use client";
import { Link } from "@/i18n/navigation";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import { twMerge } from "tailwind-merge";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface ArrowButtonProps {
  slug: string;
  className?: string;
}

export default function ArrowButton({
  slug,
  className = "",
}: ArrowButtonProps) {
  const { isIos } = useIosDevice();
  const wc = isIos ? "" : "will-change-transform";
  return (
    <Link href={`/portfolio/${slug}`}>
      <button
        type="button"
        aria-label="icon button"
        className={twMerge(
          "group cursor-pointer flex items-center justify-center size-10 lg:size-[50px] p-[13px] lg:p-[15px] rounded-full bg-white active:scale-[95%] transition duration-300 ease-out",
          wc,
          className
        )}
      >
        <ArrowIcon className={twMerge("group-active:scale-[95%] group-[focus-visible]:translate-x-0.5 group-[focus-visible]:-translate-y-0.5 xl:group-hover:translate-x-0.5 xl:group-hover:-translate-y-0.5 transition duration-300 ease-out text-black", wc)} />
      </button>
    </Link>
  );
}
