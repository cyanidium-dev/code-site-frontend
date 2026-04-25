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
      aria-label={`Перейти до секції: ${label}`}
      className="group inline-flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-full border border-white/30 text-[13px] lg:text-[15px] font-actay font-bold uppercase tracking-wider text-white/85 transition cursor-pointer hover:bg-[linear-gradient(125deg,_rgba(8,153,252,0.18)_0%,_rgba(255,73,184,0.18)_100%)] hover:border-transparent hover:text-white"
    >
      <span>{label}</span>
      <svg
        viewBox="0 0 20 20"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="transition-transform group-hover:translate-y-0.5"
      >
        <path d="M10 4v12" />
        <path d="M5 11l5 5 5-5" />
      </svg>
    </button>
  );
}
