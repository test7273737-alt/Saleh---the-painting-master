"use client";

import React, { useRef, useEffect } from "react";
import { FaPaintRoller } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import BaseButton from "./BaseButton";
import { useMenuStore } from "@/store/useMenuStore";
import { useLocale } from "next-intl";

const MobileMenu = () => {
  const t = useTranslations();
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const closeMenu = useMenuStore((state) => state.closeMenu);
  const menuRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isRtl = locale === "ar";
  const slideOffscreen = isRtl ? "-100%" : "100%";

  const menuItems = [
    {
      id: 1,
      label: t("header.mobileMenu.contactMe"),
      icon: FaPaintRoller,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.aside
          ref={menuRef}
          initial={{ x: slideOffscreen, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: slideOffscreen, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 35,
          }}
          className="fixed inset-y-0 right-0 z-100 w-80 bg-zinc-300 dark:bg-black"
        >
          <div className="w-full h-full flex flex-col gap-5 p-5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.id}>
                  <BaseButton
                    onClick={() => {
                      closeMenu();
                      const section = document.getElementById("overview");
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="w-full h-12 flex justify-between items-center px-5 rounded-lg shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]"
                  >
                    <span className="text-black dark:text-white">
                      {item.label}
                    </span>
                    <span className="text-white">
                      <Icon />
                    </span>
                  </BaseButton>
                </React.Fragment>
              );
            })}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
