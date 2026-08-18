"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/useMenuStore";
import { useLocale } from "next-intl";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const locale = useLocale();
  const shiftValue = locale === "ar" ? 300 : -300;

  return (
    <motion.div
      animate={{
        x: isMenuOpen ? shiftValue : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 35,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
