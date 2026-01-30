"use client";

import { Dispatch, SetStateAction } from "react";
import NavMenu from "./NavMenu";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../container/Container";
import { fadeInAnimation, burgerMenuVariants } from "@/utils/animationVariants";
import CodeSiteMarquee from "../marquee/CodeSiteMarquee";
import { useIosDevice } from "@/contexts/IosDeviceContext";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
  setIsHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  const { isIos } = useIosDevice();

  return (
    <AnimatePresence>
      {isHeaderMenuOpened && (
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
          className={`${
            isHeaderMenuOpened ? "no-doc-scroll" : "pointer-events-none"
          } md:hidden absolute z-50 top-0 right-0 w-[100vw] h-[100dvh] bg-black overflow-hidden`}
        >
          <div
            className={`absolute top-[144px] left-[-590px] w-[469px] h-[512px] rounded-full bg-main ${!isIos ? "supports-[backdrop-filter]:blur-[164px] will-change-transform" : ""}`}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
            className="absolute -z-10 top-[-82px] left-[calc(50%-95px)] pointer-events-none"
          >
            <p
              className={`max-w-[240px] font-guano-apes text-[76.75px] rotate-[-16.85deg] bg-[linear-gradient(241deg,_#F979CB99_55.77%,_#11111199_95.53%)] 
                font-normal leading-[120%] uppercase bg-clip-text text-transparent`}
            >
              Code-site.
              <br />
              art
            </p>
          </motion.div>
          <div className="flex flex-col gap-y-16 justify-between w-[100vw] h-[calc(100dvh-88px)] mt-22 pt-[120px] pb-[52px] overflow-y-auto overflow-x-hidden">
            <Container className="w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInAnimation({ delay: 0.3, x: 30 })}
              >
                <NavMenu setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
              </motion.div>
            </Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({})}
            >
              <CodeSiteMarquee />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
