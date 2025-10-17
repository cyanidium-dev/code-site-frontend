import { Link } from "@/i18n/navigation";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

interface LinkButtonProps {
  className?: string;
}

export default function LinkButton({ className = "" }: LinkButtonProps) {
  return (
    <Link href={`/services`} className={className}>
      <button
        type="button"
        aria-label="icon button"
        className={`group cursor-pointer flex items-center justify-center size-[73px] md:size-24 p-5 md:p-7 rounded-full bg-white active:scale-[95%] transition duration-300 ease-out will-change-transform`}
      >
        <ArrowIcon className="group-active:scale-[95%] group-[focus-visible]:translate-x-1 group-[focus-visible]:-translate-y-1 xl:group-hover:translate-x-1 xl:group-hover:-translate-y-1 transition duration-300 ease-out will-change-transform text-black" />
      </button>
    </Link>
  );
}
