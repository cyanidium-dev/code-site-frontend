import Container from "@/components/shared/container/Container";
import { Blog } from "@/types/blog";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";

interface HeroProps {
  article: Blog;
}

export default function Hero({ article }: HeroProps) {
  const { mainImageMobile, mainImageDesktop, name, description } = article;

  return (
    <section className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({})}
        className="sm:hidden absolute -z-10 top-0 left-0 w-full h-full"
      >
        <Image
          src={mainImageMobile?.url || ""}
          fill
          alt="article image"
          sizes="100vw"
          priority
          className="-z-10 object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({})}
        className="hidden sm:block absolute -z-10 top-0 left-0 w-full h-full"
      >
        <Image
          src={mainImageDesktop?.url || ""}
          fill
          alt="article image"
          sizes="100vw"
          priority
          className="-z-10 object-cover"
        />
      </motion.div>
      <Container className="py-[154px] lg:pt-[171px] lg:pb-[78px]">
        <h1 className="max-w-[497px] mb-5 font-actay text-[32px] lg:text-[40px] font-bold leading-[107%]">
          {name}
        </h1>
        <p className="max-w-[573px] mb-8 text-[14px] font-light leading-[120%]">
          {description}
        </p>
        <EstimatedReadingTime post={article} />
      </Container>
    </section>
  );
}
