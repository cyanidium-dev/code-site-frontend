"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";
import Drops from "./Drops";
import GraphMob from "./GraphMob";
import DropsTwo from "./DropsTwo";
import CodeSIteArt from "./CodeSIteArt";
import GraphDesk from "./GraphDesk";

interface HeroSlideDecorationsProps {
  variant: {
    name: string;
    colorMain: string;
    colorSecondary: string;
    textColor: string;
    colorLogo: string;
    counterColor: string;
    graph: {
      colorOne: string;
      colorTwo: string;
      colorThree: string;
      colorFour: string;
    };
    drops: {
      colorOne: string;
      colorTwo: string;
    };
  };
  idx: number;
  mainImage: string;
}

export default function HeroSlideDecorations({
  variant,
  idx,
  mainImage,
}: HeroSlideDecorationsProps) {
  const { textColor, colorMain, colorSecondary, colorLogo, drops, graph } =
    variant;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-[-411px] lg:top-[-683px] left-[calc(50%-550px)] lg:left-[calc(50%-1055px)] w-[1018px] lg:w-[2111px] h-[380px] lg:h-[643px] rounded-full 
      bg-black supports-[backdrop-filter]:blur-[74px] lg:supports-[backdrop-filter]:blur-[67px] will-change-transform"
      />

      <div
        style={{
          backgroundColor: textColor === "#FFFFFF" ? "#121212" : colorMain,
        }}
        className="absolute z-10 bottom-[-97px] md:bottom-[-197px] lg:bottom-[-308px] left-[calc(50%-550px)] md:left-[calc(50%-850px)] lg:left-[calc(50%-930px)]
         w-[1018px] md:w-[1718px] lg:w-[1858px] h-[380px] lg:h-[567px] rounded-full supports-[backdrop-filter]:blur-[30px] 
         md:supports-[backdrop-filter]:blur-[40px] lg:supports-[backdrop-filter]:blur-[130px] will-change-transform"
      />

      <div
        style={{ backgroundColor: colorMain }}
        className="absolute z-10 top-[124px] right-[-454px] w-[443px] h-[440px] rounded-full 
       supports-[backdrop-filter]:blur-[98px] lg:supports-[backdrop-filter]:blur-[65px] will-change-transform"
      />

      <div
        style={{ backgroundColor: colorMain }}
        className="hidden lg:block absolute z-10 top-[4px] lg:top-[-27px] left-[14px] lg:left-[71px] w-[289px] lg:w-[443px] h-[287px] lg:h-[440px] rounded-full 
       supports-[backdrop-filter]:blur-[98px] lg:supports-[backdrop-filter]:blur-[65px] will-change-transform"
      />

      <div
        style={{ backgroundColor: colorSecondary }}
        className="absolute -z-20 left-[-312px] lg:left-[-273px] top-[-420px] lg:top-[-533px] w-[469px] h-[512px] rounded-full 
       supports-[backdrop-filter]:blur-[104px] will-change-transform"
      />

      <motion.div
        className="absolute -z-40 right-[calc(50%-260px)] lg:right-[-145px] bottom-[78px] md:bottom-[-22px] lg:bottom-[-248px]
       w-[417px] lg:w-[725px] h-auto aspect-[725/902] mix-blend-hard-light"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src="/images/homePage/hero/head.png"
            alt="head"
            width={725}
            height={902}
            className="w-[417px] lg:w-[725px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div className="absolute -z-30 left-[-52px] lg:left-[-32px] bottom-[319px] md:bottom-[119px] lg:bottom-[180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <CodeSIteArt colorLogo={colorLogo} />
        </motion.div>
      </motion.div>

      <motion.div className="absolute -z-10 left-[calc(50%-232px)] lg:left-auto lg:right-[-134px] bottom-[155px] md:bottom-[55px] lg:bottom-[-39px] w-[586px] lg:w-[1032px] h-auto aspect-[2064/1548]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Image
            src={mainImage}
            alt="laptops"
            width={2064}
            height={1548}
            className="w-[586px] lg:w-[1032px] h-auto"
          />
        </motion.div>
      </motion.div>

      <div
        style={{ backgroundColor: colorSecondary }}
        className="absolute -z-20 bottom-[185px] md:bottom-[85px] lg:bottom-[213px] right-[calc(50%-176px)] lg:right-[calc(50%-418px)] w-[310px] lg:w-[443px] h-[307px] lg:h-[440px] rounded-full supports-[backdrop-filter]:blur-[142px] will-change-transform"
      />

      <motion.div className="lg:hidden absolute -z-10 bottom-[98px] md:bottom-[-2px] left-[calc(50%-180px)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <GraphMob graph={graph} idx={idx} />
        </motion.div>
      </motion.div>

      <motion.div className="hidden lg:block absolute -z-10 bottom-[68px] left-[504px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <GraphDesk graph={graph} idx={idx} />
        </motion.div>
      </motion.div>

      <motion.div className="lg:hidden absolute z-10 bottom-[-77px] right-[13px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <Drops drops={drops} />
        </motion.div>
      </motion.div>

      <motion.div className="absolute z-10 bottom-[460px] lg:bottom-[290px] right-[24px] lg:right-[calc(50%-25px)] lg:-rotate-[83deg]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className=""
        >
          <DropsTwo drops={drops} />
        </motion.div>
      </motion.div>
    </div>
  );
}
