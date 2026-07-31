import React from "react";
import PrismaticBurst from "@/components/PrismaticBurst";

const Bg = () => {
  return (
    <div className="w-full h-screen absolute inset-0 fade-top-bottom">
      <div className="w-full h-full relative ">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="lighten"
          colors={["#615fff", "#00bc7d", "#8e51ff"]}
        />
      </div>
    </div>
  );
};

export default Bg;
