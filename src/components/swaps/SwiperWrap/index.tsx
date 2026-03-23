import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/swiper.css";
import { Autoplay, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import ButtonNextSwiper from "@/components/buttonsCustom/ButtonNextSwiper";
import ButtonPrevSwiper from "@/components/buttonsCustom/ButtonPrevSwiper";
// import ButtonNextSwiper from "@/components/ButtonCustoms/ButtonNextSwiper";
// import ButtonPrevSwiper from "@/components/ButtonCustoms/ButtonPrevSwiper";

interface SwiperWrapProps {
  children: ReactNode;
  slidesPerView?: number;
}

const SwiperWrap: React.FC<SwiperWrapProps> = ({ children, slidesPerView }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  const slidesPerViewCustom = slidesPerView || 0;
  const isSmallerThanMd = useMediaQuery("(max-width: 767px)");

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={22}
        slidesPerView={"auto"}
        breakpoints={{
          450: {
            slidesPerView: 1 + slidesPerViewCustom,
          },
          768: {
            slidesPerView: 1 + slidesPerViewCustom,
          },
          960: {
            slidesPerView: 2 + slidesPerViewCustom,
          },
          1200: {
            slidesPerView: 3 + slidesPerViewCustom,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        speed={800}
        className="relative swiper"
        loop={isSmallerThanMd}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {children}
      </Swiper>
      <ButtonNextSwiper swiperRef={swiperRef} />
      <ButtonPrevSwiper swiperRef={swiperRef} />
    </div>
  );
};

export default SwiperWrap;
