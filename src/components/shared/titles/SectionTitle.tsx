import * as motion from "motion/react-client";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  children: string;
  variant?: "pink" | "blue";
  className?: string;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.25, 0.1, 0.25, 1] as const, duration: 0.6 },
  },
};

export default function SectionTitle({
  children,
  variant = "blue",
  className = "",
}: SectionTitleProps) {
  const words = children.split(" ").map((word) => word.split(""));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={twMerge(
        `relative w-fit font-actay text-[48px] lg:text-[96px] font-bold leading-none`,
        className
      )}
    >
      {/* Тінь */}
      <motion.p
        className={`absolute inset-0 pt-2 xl:pt-4 uppercase text-transparent pointer-events-none select-none
           ${
             variant === "blue"
               ? "[text-shadow:3.508px_2.923px_8.916px_rgba(181,218,255,0.2)]"
               : "[text-shadow:3.508px_2.923px_8.916px_rgba(255,0,166,0.2)]"
           }`}
        aria-hidden="true"
        variants={container}
      >
        {words.map((word, wordIdx) => (
          <span
            key={`shadow-word-${wordIdx}`}
            className="inline-block whitespace-nowrap not-last:mr-[0.25em] leading-none overflow-visible"
          >
            {word.map((char, charIdx) => (
              <motion.span
                key={`shadow-char-${wordIdx}-${charIdx}`}
                variants={letter}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.p>

      {/* Текст */}
      <motion.h2
        className={`relative pt-2 xl:pt-4 uppercase text-transparent bg-clip-text ${
          variant === "blue"
            ? "bg-[linear-gradient(112deg,_#ffffff_22.37%,_#B5DAFF_93.04%)]"
            : "bg-[linear-gradient(112deg,_#ffffff_22.37%,_#FFB5E6_93.04%)]"
        }`}
      >
        {words.map((word, wordIdx) => (
          <span
            key={`word-${wordIdx}`}
            className="whitespace-nowrap not-last:mr-[0.25em] inline-block leading-none overflow-visible"
          >
            {word.map((char, charIdx) => (
              <motion.span
                key={`char-${wordIdx}-${charIdx}`}
                variants={letter}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>
    </motion.div>
  );
}
