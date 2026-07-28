import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

type SlidesDataPropsType = {
  id: number;
  component: React.ReactNode;
};

type BaseSliderPropsType = {
  slidesData: SlidesDataPropsType[];
};

function BaseSlider({ slidesData = [] }: BaseSliderPropsType) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-full h-full rounded-2xl border"
      >
        {slidesData.map((slide) => (
          <SwiperSlide lazy={true} key={slide.id}>
            {slide.component}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BaseSlider;
