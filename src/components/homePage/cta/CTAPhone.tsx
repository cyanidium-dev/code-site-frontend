"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import {
  useParallaxScroll,
  useParallaxVariants,
} from "@/hooks/useParallaxScroll";
import { useIosDevice } from "@/contexts/IosDeviceContext";

export default function CTAPhone() {
  const { isIos } = useIosDevice();
  // Оптимізований хук для parallax скролу
  const { sectionRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  // Різні варіації parallax з мемоізацією
  const { fastY, mediumY, slowY, extraSlowY } = useParallaxVariants(
    scrollYProgress,
    {
      fast: [150, -150],
      medium: [80, -80],
      slow: [-100, 100],
      extraSlow: [-50, 50],
    }
  );

  const fadeProps = isIos
    ? {
      initial: "visible" as const,
      variants: {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
        exit: { opacity: 1 },
      },
    }
    : {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      exit: "exit" as const,
      viewport: { once: true, amount: 0.1 },
      variants: fadeInAnimation({ delay: 0.3, scale: 0.95 }),
    };

  return (
    <div
      ref={sectionRef}
      className="absolute left-[calc(50%-233px)] lg:left-[calc(50%-395px)] xl:left-[calc(50%-465px)] top-[203px] lg:top-[-200px] xl:top-[-250px] w-[467px] lg:w-[671px] xl:w-[721px] aspect-[721/820]"
    >
      {/* Phone - середній parallax */}
      <motion.div style={{ y: mediumY }}>
        <motion.div {...fadeProps}>
          <Image
            src="/images/homePage/cta/phone.webp"
            alt="phone"
            width={721}
            height={820}
            sizes="(max-width: 1024px) 467px, (max-width: 1280px) 671px, 721px"
            className="w-[467px] lg:w-[671px] xl:w-[721px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Drops - повільний parallax */}
      <motion.div
        style={{ y: slowY }}
        className="hidden lg:block absolute -z-10 top-[-66px] left-[55px] w-[291px] h-[301px]"
      >
        <motion.div {...fadeProps}>
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
        <motion.div {...fadeProps}>
          <Image
            src="/images/homePage/cta/code-site.webp"
            alt="code-site.art"
            width={2711}
            height={347}
            sizes="(max-width: 1024px) 613px, 1300px"
            className="w-[613px] lg:w-[1300px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Tag - швидкий parallax */}
      <motion.div
        style={{ y: fastY }}
        className="absolute -z-10 top-[-27px] lg:top-0 right-[64px] lg:right-[23px] w-[180px] lg:w-[341px] h-auto aspect-[341/300]"
      >
        <motion.div {...fadeProps}>
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
        <motion.div {...fadeProps}>
          <Image
            src="/images/homePage/cta/heart-pink.webp"
            alt="heart"
            width={781}
            height={755}
            sizes="390px"
            className="w-[390px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Blur oval (blur overflows element bounds); non‑iOS only */}
      {!isIos && (
        <div
          className="absolute -z-40 top-[131px] lg:top-[255px] left-[calc(50%-100px)] lg:left-[284px] w-[196px] lg:w-[282px] h-[273px] lg:h-[393px] rounded-full bg-main supports-[backdrop-filter]:blur-[106px] lg:supports-[backdrop-filter]:blur-[114px]"
        />
      )}
      {/* Gradient oval (sized to match visual blur spread); iOS only */}
      {isIos && (
        <div
          className="absolute -z-40 top-[77px] lg:top-[201px] left-[calc(50%-150px)] lg:left-[225px] w-[330px] lg:w-[440px] h-[418px] lg:h-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-main)_50%,transparent)_0%,transparent_70%)]"
        />
      )}
    </div>
  );
}
