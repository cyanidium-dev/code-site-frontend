import { Review } from "@/types/review";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ReviewsSwiper from "./ReviewsSwiper";
import ReviewsDecorations from "./ReviewsDecorations";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface ReviewsProps {
  reviewsList: Review[];
}

export default function Reviews({ reviewsList }: ReviewsProps) {
  const t = useTranslations("homePage.reviews");

  if (!reviewsList || !reviewsList?.length) return null;

  return (
    <section className="relative z-10 pt-30 lg:pt-[233px] bg-black">
      <div
        className="relative sm:flex gap-5 xs:max-w-full sm:max-w-full 
  xl:max-w-[1280px] px-6 sm:pr-0 lg:pl-20 xl:px-30 mx-auto sm:mr-0 sm:ml-[calc((100vw-640px)/2)] md:ml-[calc((100vw-768px)/2)] 
  lg:ml-[calc((100vw-1024px)/2)] xl:mx-auto"
      >
        <ReviewsDecorations />
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({
            x: -50,
            y: -50,
            scale: 0.95,
            delay: 0.4,
          })}
          className="relative -z-20 sm:w-[245px] sm:h-[518px] px-5 py-9 mb-9 sm:mb-0 rounded-[8px] bg-white overflow-hidden shrink-0"
        >
          <h2 className="mb-3 font-actay text-[40px] font-bold leading-none bg-[linear-gradient(160deg,#121212_13.21%,#81516E_122.82%)] bg-clip-text text-transparent uppercase">
            {t("title")}
          </h2>
          <p className="max-w-[171px] xs:max-w-full text-[14px] lg:text-[16px] font-light leading-[122%] text-black">
            {t("description")}
          </p>
          <Image
            src="/images/homePage/reviews/head.webp"
            alt="head"
            width={490}
            height={634}
            className="absolute -z-10 bottom-0 right-[-25px] sm:right-0 w-[138px] sm:w-[490px] h-auto mix-blend-hard-light"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({
            x: 50,

            scale: 0.95,
            delay: 0.8,
          })}
          className="hidden sm:block relative z-20 w-[calc(100%-245px-20px)] backdrop-blur-[5px]"
        >
          <ReviewsSwiper reviewsList={reviewsList} />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({
          x: 50,

          scale: 0.95,
          delay: 0.8,
        })}
        className="sm:hidden xs:max-w-full sm:max-w-[640px] pl-6 ml-auto backdrop-blur-[5px]"
      >
        <ReviewsSwiper reviewsList={reviewsList} />
      </motion.div>
    </section>
  );
}
