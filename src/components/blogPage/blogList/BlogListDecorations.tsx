"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";
import BlogListDecorationsStatic from "./BlogListDecorationsStatic";

export default function BlogListDecorations() {
  const { isIos } = useIosDevice();

  // On iOS use static decorations without parallax/blur.
  if (isIos) {
    return <BlogListDecorationsStatic />;
  }
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax
  const { fastY, slowY } = useParallaxVariants(scrollYProgress, {
    fast: [120, -120],
    slow: [-120, 120],
  });

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        style={{ y: slowY }}
        className="absolute -z-20 bottom-[-168px] lg:bottom-[115px] right-[calc(50%-362px)] lg:right-auto lg:left-[calc(50%-716px)] lg:rotate-[20deg]
        w-[596px] h-auto aspect-[1192/1293] bg-black"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
          className="mix-blend-hard-light"
        >
          <Image
            src="/images/blogPage/blogList/hand.webp"
            alt="hand"
            width={1192}
            height={1293}
            sizes="596px"
            className="w-[596px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: fastY }}
        className="absolute lg:z-10 bottom-[184px] lg:bottom-[244px] right-[calc(50%-264px)] lg:right-auto lg:left-[calc(50%-330px)] w-[244px] h-auto aspect-[244/235]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/blogPage/blogList/drops.svg"
            alt="drops"
            width="244"
            height="235"
            className="w-[244px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute -z-20 bottom-[358px] right-[calc(50%-778px)]
        w-[912px] h-auto aspect-[912/225]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ delay: 0.3, duration: 2, scale: 0.8 })}
        >
          <Image
            src="/images/homePage/partners/chainDesk.webp"
            alt="chain"
            width="912"
            height="225"
            sizes="(min-width: 1024px) 912px, 0px"
            className="w-[912px] h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: slowY }}
        className="absolute bottom-[-200px] lg:bottom-[30px] right-[calc(50%-450px)] lg:right-auto lg:left-[calc(50%-486px)] w-[445px] h-[405px] rounded-full bg-black supports-[backdrop-filter]:blur-[55px] will-change-transform"
      />
      <div className="lg:hidden absolute bottom-[702px] left-[calc(50%-712px)] w-[469px] h-[420px] rounded-full bg-pink supports-[backdrop-filter]:blur-[328px] will-change-transform" />
      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute bottom-[297px] right-[calc(50%-130px)] w-[445px] h-[405px] rounded-full bg-black supports-[backdrop-filter]:blur-[65px] will-change-transform"
      />
      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute bottom-[261px] right-[calc(50%-800px)] w-[445px] h-[405px] rounded-full bg-black supports-[backdrop-filter]:blur-[65px] will-change-transform"
      />
    </div>
  );
}
