import React from "react";
import type { Swiper as SwiperType } from "swiper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface ButtonNextSwiperProps {
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const ButtonNextSwiper: React.FC<ButtonNextSwiperProps> = ({ swiperRef }) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="cursor-pointer bg-primary-blue/60 hover:bg-primary-blue duration-100 w-8 h-8
       rounded-full absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-white"
    >
      <KeyboardArrowRightIcon fontSize="small" />
    </button>
  );
};

export default ButtonNextSwiper;
