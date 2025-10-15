"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function CTAPhone() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Відслідковуємо скрол секції
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Різні варіації parallax
  const fastY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const slowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const extraSlowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div
      ref={sectionRef}
      className="absolute left-[calc(50%-233px)] lg:left-[calc(50%-395px)] xl:left-[calc(50%-465px)] top-[203px] lg:top-[-200px] xl:top-[-250px] w-[467px] lg:w-[671px] xl:w-[721px] aspect-[721/820]"
    >
      {/* Phone - середній parallax */}
      <motion.div style={{ y: mediumY }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/cta/phone.png"
            alt="phone"
            width={721}
            height={820}
            className="w-[467px] lg:w-[671px] xl:w-[721px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Drops - повільний parallax */}
      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute -z-10 top-[-66px] left-[55px] w-[291px] h-[301px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/cta/drops.svg"
            alt="drops"
            width={291}
            height={301}
            className="w-[291px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Code Site - дуже повільний parallax */}
      <motion.div
        style={{ y: extraSlowY }}
        className="absolute -z-20 left-[calc(50%-126px)] lg:left-[-114px] top-[-22px] lg:top-[204px] w-[613px] lg:w-[1300px] h-auto aspect-[2711/347]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/cta/code-site.png"
            alt="code-site.art"
            width={2711}
            height={347}
            className="w-[613px] lg:w-[1300px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Tag - швидкий parallax */}
      <motion.div
        style={{ y: fastY }}
        className="absolute -z-10 top-[-27px] lg:top-0 right-[64px] lg:right-[23px] w-[180px] lg:w-[341px] h-auto aspect-[341/300]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/cta/tag.svg"
            alt="tag"
            width={341}
            height={300}
            className="w-[209px] lg:w-[341px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Heart Pink - середній parallax */}
      <motion.div
        style={{ y: slowY }}
        className="lg:hidden absolute -z-20 top-[71px] left-[calc(50%-203px)] w-[390px] h-auto aspect-[781/755]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/cta/heart-pink.png"
            alt="heart"
            width={781}
            height={755}
            className="w-[390px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Blur елемент - повільний parallax */}
      <motion.div
        style={{ y: slowY }}
        className="absolute -z-40 top-[131px] lg:top-[255px] left-[calc(50%-100px)] lg:left-[284px] w-[196px] lg:w-[282px] h-[273px] lg:h-[393px] rounded-full bg-main supports-[backdrop-filter]:blur-[105px] lg:supports-[backdrop-filter]:blur-[114px]"
      />
    </div>
  );
}
