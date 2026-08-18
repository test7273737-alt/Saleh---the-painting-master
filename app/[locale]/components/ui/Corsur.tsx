"use client";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Corsur = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });
  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  });
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none hidden lg:block fixed left-0 top-0 z-999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-invert"
    />
  );
};

export default Corsur;
