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
      {/* Швидкий шар - drops */}
      <motion.div
        style={{ y: fastY }}
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

      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute top-[-99px] left-[-96px] -z-10 pointer-events-none "
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

      {/* Повільний шар - figure */}
      <motion.div
        style={{ y: slowY }}
        className="absolute bottom-[-332px] lg:bottom-[-669px] right-[-380px] lg:right-[-883px] -z-30 pointer-events-none w-[549px] lg:w-[1243px] aspect-[1243/1167] overflow-visible"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          {" "}
          <Image
            src="/images/homePage/founder/tag.svg"
            alt="figure"
            width="180"
            height="157"
            className="hidden lg:block absolute left-[207px] top-[62px]"
          />
          <Image
            src="/images/homePage/founder/figure.png"
            alt="figure"
            width={1243}
            height={1167}
            className="object-cover mix-blend-color-dodge w-full h-full object-top-left"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="absolute -z-20 bottom-[-128px] lg:bottom-[-46px] right-[-391px] lg:right-[-748px]"
      >
        <motion.div
          style={{ y: slowY }}
          className="w-[337px] lg:w-[618px] h-[301px] lg:h-[553px] 2xl:opacity-50 rounded-full bg-blue-bright supports-[backdrop-filter]:blur-[107px] lg:supports-[backdrop-filter]:blur-[197px] will-change-transform"
        ></motion.div>
      </motion.div>
    </>
  );
}
