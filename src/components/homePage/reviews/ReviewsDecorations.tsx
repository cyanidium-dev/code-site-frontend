import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function ReviewsDecorations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Різні варіації parallax
  const fastY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const slowY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div className="absolute">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/reviews/site-types.svg"
            alt="head"
            width="359"
            height="423"
            className=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
