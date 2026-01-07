"use client";
import * as motion from "motion/react-client";
import { twMerge } from "tailwind-merge";

interface ProjectAdvantagesProps {
  advantages: string[] | null | undefined;
  className?: string;
}

export default function ProjectAdvantages({
  advantages,
  className,
}: ProjectAdvantagesProps) {
  if (!advantages || advantages.length === 0) {
    return null;
  }

  return (
    <motion.div
      className={twMerge("h-full", className)}
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.35,
      }}
    >
      <ul className="flex flex-col gap-2 lg:items-end">
        {advantages.map((advantage, idx) => (
          <li
            key={idx}
            className="relative flex items-center gap-2 px-5 py-2.5 w-fit h-[29px] lg:h-[45px] rounded-full overflow-hidden bg-gray/50 shadow-[inset_0px_2px_16px_rgba(255,255,255,0.25)]"
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(175.34deg, #FF76C1 3.91%, #6A8FFF 123.62%",
                padding: "1px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <p className="text-[10px] lg:text-[14px] font-light leading-[130%]">
              {advantage}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
