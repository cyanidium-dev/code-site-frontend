"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function SiteTypesDecorations() {
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
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      {/* Head One - повільний parallax */}
      <motion.div
        // style={{ y: slowY }}
        className="absolute -z-20 left-[-840px] md:left-[-885px] top-[-856px] md:top-[-696px] mix-blend-hard-light md:rotate-[-30deg]"
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
            src="/images/homePage/siteTypes/headOne.png"
            alt="head"
            width={1152}
            height={1177}
            className="w-[1152px] md:w-[1193px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="hidden md:block absolute -z-10 top-[-213px] left-[143px]"
      >
        <Image
          src="/images/homePage/siteTypes/drops-left-top-desk.svg"
          alt="drops"
          width="255"
          height="252"
          className=""
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        className="hidden md:block absolute -z-10 top-[233px] left-[-60px]"
      >
        <Image
          src="/images/homePage/siteTypes/tags.svg"
          alt="tags"
          width="291"
          height="189"
          className=""
        />
      </motion.div>

      {/* Texture*/}
      <div className="xs:hidden absolute -z-40 left-[-34px] top-[768px] h-[1539px]">
        <div className="absolute z-10 top-[-240px] left-[62px] w-[512px] h-[339px] rounded-full bg-black supports-[backdrop-filter]:blur-[67px] will-change-transform" />

        <Image
          src="/images/homePage/siteTypes/texture.png"
          alt="texture"
          width="577"
          height="1539"
          className="h-[1539px] w-auto"
        />
      </div>

      {/* Code Site Pink Gradient - середній parallax */}
      <motion.div
        style={{ y: mediumY }}
        className="md:hidden absolute top-[-294px] right-[-174px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
        >
          <Image
            src="/images/homePage/siteTypes/code-site-pink-gradient.svg"
            alt="code-site"
            width="338"
            height="330"
            className=""
          />
        </motion.div>
      </motion.div>

      {/* Laptop One  */}
      <motion.div
        // style={{ y: slowY }}
        className="absolute top-[139px] md:top-0 left-[calc(50%-316px)] md:left-[219px] w-[688px] md:w-[1377px] h-auto aspect-[1037/1033]"
      >
        <div className="absolute -z-30 top-[111px] left-[238px] w-[209px] h-[224px] rounded-full bg-main supports-[backdrop-filter]:blur-[83px] will-change-transform" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute -z-20 top-[80px] md:top-[192px] left-[163px] md:left-[261px]"
        >
          <Image
            src="/images/homePage/siteTypes/phoneOne.png"
            alt="phone"
            width={299}
            height={529}
            className="w-[158px] md:w-[299px] h-auto rotate-[-12deg] md:rotate-[0deg]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute -z-20 top-[-13px] md:top-[-105px] right-[187px] md:right-[366px]"
        >
          <Image
            src="/images/homePage/siteTypes/dollars.svg"
            alt="dollars"
            width="235"
            height="168"
            className="md:hidden w-[200px] md:w-[393px] h-auto"
          />
          <Image
            src="/images/homePage/siteTypes/dollarsDesk.svg"
            alt="dollars"
            width="393"
            height="335"
            className="hidden md:block md:w-[393px] h-auto"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="relative -z-10"
        >
          <Image
            src="/images/homePage/siteTypes/laptopOne.png"
            alt="laptop"
            width={1037}
            height={1033}
            className=" w-[688px] md:w-[1377px] h-auto"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="md:hidden absolute z-10 bottom-[52px] right-[188px]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-pink.svg"
            alt="drops"
            width={200}
            height={200}
            className=""
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="md:hidden absolute -z-20 bottom-[-277px] right-[119px]"
        >
          <Image
            src="/images/homePage/siteTypes/code-site-blue-gradient.svg"
            alt="code-site"
            width={259}
            height={285}
            className=""
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="hidden md:block absolute -z-30 top-[260px] left-[123px] mix-blend-color-burn"
        >
          <Image
            src="/images/homePage/siteTypes/code-site-burn-gradient.svg"
            alt="code-site"
            width="542"
            height="623"
            className=""
          />
        </motion.div>

        <div className="hidden md:block absolute top-[518px] left-[-221px] w-[2040px] h-[564px] rounded-full bg-black supports-[backdrop-filter]:blur-[87px] will-change-transform" />
      </motion.div>

      {/* Laptop Two */}
      <motion.div
        // style={{ y: fastY }}
        className="absolute top-[1029px] md:top-[600px] left-[calc(50%-366px)] md:left-[calc(50%-1135px)] w-[743px] md:w-[1598px] h-auto aspect-[3196/2709]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="relative md:z-[5]"
        >
          <Image
            src="/images/homePage/siteTypes/laptopTwo.png"
            alt="laptop"
            width={3196}
            height={2709}
            className=" w-[743px] md:w-[1598px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute -z-10 top-[83px] md:top-[252px] left-[141px] md:left-auto md:right-[303px]"
        >
          <Image
            src="/images/homePage/siteTypes/wing.svg"
            alt="laptop"
            width="277"
            height="321"
            className="md:hidden w-[237px] h-auto"
          />
          <Image
            src="/images/homePage/siteTypes/wingDesk.png"
            alt="laptop"
            width="487"
            height="481"
            className="hidden md:block w-[487px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute z-10 top-[328px] left-[184px]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-blue-left-mob.svg"
            alt="drops"
            width="212"
            height="201"
            className="w-[175px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute md:z-[7] top-[158px] md:top-[261px] right-[186px] md:right-[400px]"
        >
          <Image
            src="/images/homePage/siteTypes/phoneTwo.png"
            alt="phone"
            width={753}
            height={926}
            className="w-[175px] md:w-[377px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute -z-30 top-[78px] md:top-[543px] right-[-276px] md:right-[-341px] w-[1336px] h-auto aspect-[2673/1609] md:mix-blend-difference"
        >
          <Image
            src="/images/homePage/siteTypes/headTwo.png"
            alt="head"
            width={2673}
            height={1609}
            className="md:hidden w-[1336px] h-auto"
          />
          <Image
            src="/images/homePage/siteTypes/headTwoDesk.png"
            alt="head"
            width={1194}
            height={1232}
            className="hidden md:block w-[1194px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="hidden md:block absolute z-20 bottom-[158px] left-[401px]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-left-middle-desk.svg"
            alt="drops"
            width="316"
            height="285"
            className=""
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="hidden md:block absolute z-20 bottom-[99px] left-[1453px] w-[342px] h-auto aspect-[342/326]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-right-middle-desk.svg"
            alt="drops"
            width="342"
            height="326"
            className="w-[342px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="hidden md:block absolute -z-20 bottom-[577px] right-[-350px] w-[342px] h-auto aspect-[342/326]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-pink-desk.svg"
            alt="drops"
            width="157"
            height="291"
            className="w-[157px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="hidden md:block absolute -z-20 top-[679px] right-[333px]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-blue-middle-desk.svg"
            alt="drops"
            width="225"
            height="315"
            className="w-[225px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="hidden md:block absolute -z-20 bottom-[135px] left-[1178px] md:w-[586px] h-auto aspect-[259/285]"
        >
          <Image
            src="/images/homePage/siteTypes/code-site-blue-gradient.svg"
            alt="code-site"
            width={259}
            height={285}
            className="w-[586px] h-auto"
          />
        </motion.div>

        <div
          className="absolute md:z-[7] md:rotate-[-15deg] bottom-[-103px] md:bottom-[-135px] left-[-157px] md:left-[-442px] w-[1025px] md:w-[1838px] h-[381px] md:h-[595px]
         rounded-full bg-black supports-[backdrop-filter]:blur-[105px] md:supports-[backdrop-filter]:blur-[41px] will-change-transform"
        />

        <div
          className="hidden md:block absolute -z-10 top-[780px] right-[55px] w-[684px] h-[722px]
         rounded-full bg-black supports-[backdrop-filter]:blur-[127px]  will-change-transform"
        />
      </motion.div>

      {/* Laptop Three */}
      <motion.div className="absolute top-[2190px] md:top-[1662px] left-[-93px] md:left-[216px] w-[620px] md:w-[1377px] h-auto aspect-[2755/2066]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="relative z-10 md:z-20"
        >
          <Image
            src="/images/homePage/siteTypes/laptopThree.png"
            alt="laptop"
            width={2755}
            height={2066}
            className=" w-[620px] md:w-[1377px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute z-[7] md:z-[15] top-[-25px] md:top-[-55px] left-[-13px] md:left-[-29px]"
        >
          <Image
            src="/images/homePage/siteTypes/phoneThree.png"
            alt="phone"
            width={1885}
            height={1524}
            className="w-[425px] md:w-[943px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="absolute z-[3] md:-z-30 top-[-76px] md:top-[237px] left-[48px] md:left-[120px]"
        >
          <Image
            src="/images/homePage/siteTypes/shoppers.svg"
            alt="shoppers"
            width="364"
            height="338"
            className="md:hidden w-[364px] h-auto"
          />
          <Image
            src="/images/homePage/siteTypes/shoppersDesk.svg"
            alt="shoppers"
            width="335"
            height="423"
            className="hidden md:block w-[335px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="md:hidden absolute z-20 top-[-45px] left-[175px]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-blue-middle-mob.svg"
            alt="drops"
            width="138"
            height="127"
            className="w-[138px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="md:hidden absolute z-20 right-[114px] bottom-[-68px]"
        >
          <Image
            src="/images/homePage/siteTypes/drops-blue-right-mob.svg"
            alt="drops"
            width={206}
            height={214}
            className="w-[206px] h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, scale: 0.95 })}
          className="md:hidden absolute -z-20 bottom-[-337px] right-[90px]"
        >
          <Image
            src="/images/homePage/siteTypes/code-site-blue-gradient.svg"
            alt="code-site"
            width={259}
            height={285}
            className="w-[267px] h-auto"
          />
        </motion.div>

        <div
          className="absolute z-[5] md:-z-20 top-[59px] md:top-[406px] left-[-103px] md:left-[-72px] w-[357px] md:w-[448px] h-[360px] md:h-[451px] rounded-full bg-[#089AFA] 
        supports-[backdrop-filter]:blur-[105px] md:supports-[backdrop-filter]:blur-[131px] will-change-transform"
        />
        <div
          className="absolute md:z-20 rotate-[-8.44deg] md:rotate-0 bottom-[-125px] md:bottom-[-198px] left-[-96px] md:left-[-557px] w-[829px] md:w-[1964px] h-[330px] md:h-[636px] rounded-full bg-black 
        supports-[backdrop-filter]:blur-[55px] md:supports-[backdrop-filter]:blur-[41px] will-change-transform"
        />
      </motion.div>
    </div>
  );
}
