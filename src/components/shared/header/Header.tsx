"use client";
import Container from "../container/Container";
import BurgerMenuButton from "./BurgerButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "../logo/Logo";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <header className="fixed top-0 left-0 z-50 py-6 xl:py-10 w-dvw">
      <Container className="relative flex items-center justify-between">
        <div
          className={`absolute -top-3 md:-top-6 left-0 w-full h-16 xl:h-17 rounded-full z-[-20] transition duration-500 ease-in-out ${
            isScrolled
              ? "bg-black/30 backdrop-blur-md shadow-[inset_0px_2px_16px_rgba(255,255,255,0.25)]"
              : "bg-transparent"
          }`}
        />
        <Logo className="text-[12px] z-[60]" />
        <div className="flex items-center gap-x-6 md:gap-x-14">
          <LocaleSwitcher />
          <div className="hidden md:block">
            <NavMenu />
          </div>
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </Container>
      <BurgerMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />
    </header>
  );
}
