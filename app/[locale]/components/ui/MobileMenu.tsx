"use client";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import BaseButton from "./BaseButton";
import { FaPaintRoller } from "react-icons/fa";
import { useTranslations } from "next-intl";

type MobileMenuPropsType = {
  isDown: boolean;
  isExceeded: boolean;
};

const MobileMenu = ({ isExceeded }: MobileMenuPropsType) => {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>();
  const menuRef = React.useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      id: 1,
      label: t("header.mobileMenu.contactMe"),
      icon: FaPaintRoller,
    },
  ];

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  return (
    <div ref={menuRef} className="h-full relative z-30 md:hidden">
      <button
        onClick={handleToggle}
        className="h-full flex justify-center items-center"
      >
        <span
          className={`${isExceeded ? "text-black dark:text-white" : "text-white dark:text-white"} text-3xl `}
        >
          <CiMenuBurger />
        </span>
      </button>
      <div
        className={`${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${isExceeded ? "top-25" : "top-45"} h-22.5 flex flex-col gap-5 py-5 px-2.5 overflow-hidden fixed right-0 left-0 rounded-2xl transition-all duration-300 border border-zinc-500/30 bg-linear-to-b from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-black`}
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              <BaseButton
                onClick={() => {
                  const section = document.getElementById("overview");
                  if (!section) return;
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="w-full h-12 flex justify-between items-center px-5 transition-all duration-300 rounded-lg border border-white/30 bg-zinc-50 dark:bg-zinc-900"
              >
                <span className="text-black dark:text-white">{item.label}</span>
                <span className="text-white">
                  <Icon />
                </span>
              </BaseButton>

              {index !== menuItems.length - 1 && (
                <span className="w-full h-px flex bg-[#C9A227]/20"></span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
