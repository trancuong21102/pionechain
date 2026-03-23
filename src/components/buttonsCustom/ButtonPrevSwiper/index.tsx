import React from "react";
import type { Swiper as SwiperType } from "swiper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface ButtonPrevSwiperProps {
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const ButtonPrevSwiper: React.FC<ButtonPrevSwiperProps> = ({ swiperRef }) => {
  return (
    <button
      className="cursor-pointer bg-primary-blue/60 hover:bg-primary-blue duration-100 h-8 w-8
       rounded-full absolute -left-4 top-1/2 -translate-y-1/2 z-20 text-white"
      onClick={() => swiperRef.current?.slidePrev()}
    >
      <KeyboardArrowLeftIcon fontSize="small" />
    </button>
  );
};

export default ButtonPrevSwiper;
