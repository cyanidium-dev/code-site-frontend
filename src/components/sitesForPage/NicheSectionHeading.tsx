import { twMerge } from "tailwind-merge";

interface NicheSectionHeadingProps {
  children: string;
  variant?: "pink" | "blue";
  className?: string;
}

/** Статичний h2 для сторінок ніш (без анімації SectionTitle). */
export default function NicheSectionHeading({
  children,
  variant = "blue",
  className = "",
}: NicheSectionHeadingProps) {
  const gradient =
    variant === "blue"
      ? "bg-[linear-gradient(112deg,_#ffffff_22.37%,_#B5DAFF_93.04%)]"
      : "bg-[linear-gradient(112deg,_#ffffff_22.37%,_#FFB5E6_93.04%)]";

  return (
    <h2
      className={twMerge(
        "font-actay font-bold uppercase text-transparent bg-clip-text text-[22px] sm:text-[32px] lg:text-[44px] leading-[1.1]",
        gradient,
        className
      )}
    >
      {children}
    </h2>
  );
}
