import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface LoaderProps {
  className?: string;
}

export default function Loader({ className = "" }: LoaderProps) {
  return (
    <div
      className={twMerge(
        clsx(`w-full h-[620px] lg:h-[750px] flex items-center justify-center`),
        className
      )}
    >
      <div className="loader"></div>
    </div>
  );
}
