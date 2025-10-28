import { Link } from "@/i18n/navigation";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

interface ArrowButtonProps {
  slug: string;
  className?: string;
}

export default function ArrowButton({
  slug,
  className = "",
}: ArrowButtonProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <button
        type="button"
        aria-label="icon button"
        className={`group cursor-pointer flex items-center justify-center size-[66px] lg:size-[50px] p-[15px] rounded-full bg-white active:scale-[95%] transition duration-300 ease-out will-change-transform ${className}`}
      >
        <ArrowIcon className="group-active:scale-[95%] group-[focus-visible]:translate-x-1 group-[focus-visible]:-translate-y-1 xl:group-hover:translate-x-1 xl:group-hover:-translate-y-1 transition duration-300 ease-out will-change-transform text-black" />
      </button>
    </Link>
  );
}
