"use client";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useTranslations } from "next-intl";

const QuickContact = () => {
  const [ShowSocial, setShowSocial] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const t = useTranslations();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSocial(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSocial(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);
  return (
    <div className="w-20 h-20 fixed bottom-5 inset-s-5 z-30" ref={containerRef}>
      <button
        onClick={() => setShowSocial((prev) => !prev)}
        className="w-full h-full flex justify-center items-center relative z-30 cursor-pointer rounded-full bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black"
      >
        <span className="text-4xl">
          <CgMenuGridO />
        </span>
      </button>
      <a
        title={t("titles.email")}
        href="mailto:Salah20131011@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${ShowSocial ? "translate-y-[-120%] pointer-events-auto" : "translate-y-0 pointer-events-none"} w-full h-full flex justify-center items-center absolute top-0 right-0 duration-300 transition-all rounded-full text-2xl bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black`}
      >
        <span>
          <MdOutlineAlternateEmail />
        </span>
      </a>
      <a
        title={t("titles.phoneNumber")}
        href="tel:+966537794871"
        target="_blank"
        rel="noopener noreferrer"
        className={`${ShowSocial ? "ltr:translate-x-[120%] rtl:translate-x-[-120%] pointer-events-auto" : "translate-x-0 pointer-events-none"} w-full h-full flex justify-center items-center absolute top-0 right-0 duration-300 transition-all rounded-full text-2xl bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black`}
      >
        <span>
          <IoIosCall />
        </span>
      </a>
    </div>
  );
};

export default QuickContact;
