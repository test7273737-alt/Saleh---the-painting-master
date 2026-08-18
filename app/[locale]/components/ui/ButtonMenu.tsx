"use client";
import React from "react";
import { useMenuStore } from "@/store/useMenuStore";
import { CiMenuBurger } from "react-icons/ci";

const ButtonMenu = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  return (
    <div className="h-full relative z-30 md:hidden">
      <button
        onClick={toggleMenu}
        className="h-full flex justify-center items-center text-3xl text-white"
      >
        <CiMenuBurger />
      </button>
    </div>
  );
};

export default ButtonMenu;
