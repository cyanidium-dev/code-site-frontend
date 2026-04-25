"use client";

interface ScrollDownLinkProps {
  targetId: string;
  label: string;
}

export default function ScrollDownLink({
  targetId,
  label,
}: ScrollDownLinkProps) {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="inline-flex items-center gap-2 text-[14px] lg:text-[16px] font-actay font-bold uppercase tracking-wider text-white/80 hover:text-white transition cursor-pointer"
    >
      {label}
    </button>
  );
}
