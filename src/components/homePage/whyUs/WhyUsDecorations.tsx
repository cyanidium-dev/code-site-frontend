import Image from "next/image";
import * as motion from "motion/react-client";
import AnimatedMapWithDots from "./AnimatedMapWithDots";

export default function WhyUsDecorations() {
  return (
    <>
      <motion.div className="lg:hidden absolute top-[-177px] lg:top-[-115px] left-[-52px] lg:left-[-12px] z-10 pointer-events-none">
        <Image
          src="/images/homePage/whyUs/drops.svg"
          alt="drops"
          width="232"
          height="251"
          className="w-[232px] lg:w-[263px] h-auto"
        />
      </motion.div>
      <motion.div className="hidden lg:block absolute top-[118px] left-[-86px] z-10 pointer-events-none">
        <Image
          src="/images/homePage/whyUs/dropsDesk.svg"
          alt="drops"
          width="348"
          height="350"
        />
      </motion.div>
      <motion.div className="absolute top-[-45px] lg:top-[246px] right-[-16px] lg:right-[calc(50%-566px)] z-10 pointer-events-none">
        <Image
          src="/images/homePage/whyUs/tag-small.svg"
          alt="tag"
          width="82"
          height="63"
          className="w-[82px] h-auto"
        />
      </motion.div>
      <motion.div className="absolute top-[82px] lg:top-[71px] right-[89px] lg:right-[calc(50%-78px)] -z-20 pointer-events-none">
        <Image
          src="/images/homePage/whyUs/tag-large.svg"
          alt="tag"
          width="110"
          height="85"
          className="w-[110px] lg:w-[229px] h-auto"
        />
      </motion.div>
      <motion.div className="absolute -z-30 lg:-z-20 top-[-33px] lg:top-[82px] left-[calc(50%-206px)] lg:left-auto lg:right-[39px]">
        <AnimatedMapWithDots className="w-[377px] lg:w-[604px] h-auto" />
      </motion.div>
      <div className="absolute -z-10 top-[-66px] left-[-51px] lg:top-[-290px] lg:left-auto lg:right-[43px] w-[303px] lg:w-[777px] h-[238px] lg:h-[611px] rounded-full bg-black supports-[backdrop-filter]:blur-[53px] lg:supports-[backdrop-filter]:blur-[72px] will-change-transform" />
    </>
  );
}
