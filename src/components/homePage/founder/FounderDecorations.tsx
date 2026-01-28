"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { MotionValue } from "motion/react";
import { fadeInAnimation } from "@/utils/animationVariants";

interface FounderDecorationsProps {
  fastY: MotionValue<number>;
  slowY: MotionValue<number>;
}

export default function FounderDecorations({
  fastY,
  slowY,
}: FounderDecorationsProps) {
  return (
    <>
      {/* Швидкий шар - drops. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="absolute top-[-33px] lg:top-[-115px] left-[-11px] lg:left-[-12px] z-10 pointer-events-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/founder/drops.svg"
            alt="drops"
            width={179}
            height={130}
            className="w-[179px] lg:w-[263px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        className="hidden lg:block absolute top-[-99px] left-[-96px] -z-10 pointer-events-none"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/founder/code-site.svg"
            alt="logo"
            width={379}
            height={417}
            className="w-[379px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Повільний шар - figure. PARALLAX DISABLED: style={{ y: fastY }} закоментовано */}
      <motion.div
        className="absolute bottom-[-254px] lg:bottom-[-295px] right-[-254px] lg:right-[-506px] -z-30 pointer-events-none w-[463px] lg:w-[851px] 
        aspect-[851/781] overflow-visible"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="bg-black"
        >
          {" "}
          <Image
            src="/images/homePage/founder/tag.svg"
            alt="tag"
            width="180"
            height="157"
            className="hidden lg:block absolute left-[207px] top-[62px]"
          />
          <Image
            src="/images/homePage/founder/figure.webp"
            alt="figure"
            width={851}
            height={781}
            sizes="(max-width: 1024px) 463px, 851px"
            className="object-cover w-full h-full object-top-left  mix-blend-color-dodge"
          />
        </motion.div>
        <div className="absolute bottom-[-520px] lg:bottom-[-420px] left-[20px] lg:left-[-50px] w-[806px] h-[768px] rounded-full bg-black supports-[backdrop-filter]:blur-[80px] will-change-transform" />
      </motion.div>

      {/* PARALLAX DISABLED: style={{ y: slowY }} закоментовано */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute -z-20 bottom-[-128px] lg:bottom-[-46px] right-[-391px] lg:right-[-748px]"
      >
        <motion.div
          className="w-[337px] lg:w-[618px] h-[301px] lg:h-[553px] 2xl:opacity-50 rounded-full bg-blue-bright supports-[backdrop-filter]:blur-[107px] lg:supports-[backdrop-filter]:blur-[197px] will-change-transform"
        ></motion.div>
      </motion.div>
    </>
  );
}
