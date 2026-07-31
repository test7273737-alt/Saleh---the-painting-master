"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { BsFillTelephoneFill } from "react-icons/bs";
import MobileMenu from "../ui/MobileMenu";
import BaseLink from "../ui/BaseLink";
import BaseButton from "../ui/BaseButton";
import { CgDarkMode } from "react-icons/cg";
import { IoLanguageSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Header = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const route = useRouter();
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [scrollY, setScrollY] = React.useState<number>(0);
  const [isDown, setIsdown] = React.useState<boolean>(false);
  const [isExceeded, setIsExceeded] = React.useState<boolean>(false);

  const handleChangeLang = () => {
    const newLang = locale === "ar" ? "en" : "ar";
    const paths = pathname.split("/");
    paths[1] = newLang;
    route.push(paths.join("/"));
  };

  const handleChangeMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  React.useEffect(() => {
    const handleDown = () => {
      const currentY = window.scrollY;
      if (currentY > scrollY && currentY > 700) {
        setIsdown(true);
      } else {
        setIsdown(false);
      }
      setScrollY(currentY);
    };
    const handleExceeded = () => {
      const currentY = window.scrollY;
      if (currentY > 700) {
        setIsExceeded(true);
      } else {
        setIsExceeded(false);
      }
    };
    document.addEventListener("scroll", handleExceeded);
    document.addEventListener("scroll", handleDown);
    return () => {
      document.removeEventListener("scroll", handleDown);
      document.removeEventListener("scroll", handleExceeded);
    };
  }, [scrollY]);

  return (
    <header
      className={`${isDown ? "-top-full" : "top-5"} ${isExceeded ? "h-20 border-t border-zinc-500/30 bg-linear-to-b from-zinc-50 to-zinc-300 dark:from-zinc-900 dark:to-black" : "h-40 border-none rounded-bl-2xl backdrop-blur-2xl bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(0,0,0,0.1)]"} flex flex-col fixed right-5 left-5 translate-x-0 rounded-2xl z-30 transition-all duration-300`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_top,#71717b,transparent_60%)]" />
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-zinc-400 to-transparent" />
      <div
        className={`${isExceeded ? "h-0" : "h-1/2"} overflow-hidden flex justify-between relative transition-all duration-300 px-5`}
      >
        <div className="hidden lg:h-full lg:flex lg:items-center lg:gap-5">
          <a
            href="tel:+966537794871"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex justify-center items-center gap-2.5 text-white dark:text-white"
          >
            <span> +966537794871</span>
            <span>
              <BsFillTelephoneFill />
            </span>
          </a>
          <span className="h-1/3 w-0.5 flex bg-neutral-400/40"></span>
          <a
            href="mailto:Salah20131011@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-white"
          >
            Salah20131011@gmail.com
          </a>
        </div>
        <h1 className="w-full h-full flex justify-center items-center text-center text-white dark:text-white lg:w-max lg:h-full">
          {t("header.topBar")}
        </h1>
        <div className="w-full h-px absolute left-0 bottom-0 bg-linear-to-r from-transparent via-neutral-400 to-transparent"></div>
      </div>
      <div
        className={`${isExceeded ? "h-full text-zinc-900 dark:text-zinc-100" : "h-1/2 text-zinc-100 dark:text-zinc-100"} flex justify-between px-5 lg:px-20`}
      >
        <nav className="hidden md:h-full md:flex md:items-center md:gap-10">
          <ul className="h-full flex justify-center items-center gap-10">
            <li>
              <BaseLink className="" href="tel:+966537794871">
                {t("header.nav.contactMe")}
              </BaseLink>
            </li>
          </ul>
        </nav>
        <div className="h-full flex justify-start items-center gap-10">
          <MobileMenu isDown={isDown} isExceeded={isExceeded} />
          <BaseButton onClick={handleChangeMode}>
            <span
              className={`${isExceeded ? "text-black dark:text-white" : "text-white dark:text-white"} text-2xl`}
            >
              <CgDarkMode />
            </span>
          </BaseButton>
          <BaseButton onClick={handleChangeLang}>
            <span
              className={`${isExceeded ? "text-black dark:text-white" : "text-white dark:text-white"} text-2xl`}
            >
              <IoLanguageSharp />
            </span>
          </BaseButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
