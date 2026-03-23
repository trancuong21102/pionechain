"use client";
import { PossibleData } from "@/yummy_data";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import CardPossible from "@/components/cards/CardPossible";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Card } from "@/components/ui/canvas-reveal-effect";
// import ClipPathImage from "./ClipPath4";
// import { Path1 } from "public/pione-chain/clippaths/path1";
// import Image from "next/image";
import ClipPathImage4 from "../../../../ClipPathImage/ClipPath4";
import ClipPathImage5 from "../../../../ClipPathImage/ClipPath5";
import ClipPathImage6 from "../../../../ClipPathImage/ClipPath6";
// import { SmoothTab } from "./Modal";
const Possible = () => {
  const { t } = useTranslation();
  const renderClipPathById = (id: number) => {
    switch (id) {
      case 1:
        return <ClipPathImage4 />;
      case 2:
        return <ClipPathImage5 />;
      case 3:
        return <ClipPathImage6 />;
      default:
        return <ClipPathImage4 />;
    }
  };
  return (
    <div className="relative py-12">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] "></div>

      <div className="lg:container relative text-white flex flex-col gap-10 lg:gap-5 items-center h-full">
        <h1 className="text-3xl md:text-5xl py-1  font-semibold leading-normal  text-center bg-gradient-to-r from-[#FC7F00] to-white bg-clip-text text-transparent">
          {t("home.possibleSection.what")}
        </h1>

        <div data-aos="fade-up" className=" px-1 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1247: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {[...PossibleData, ...PossibleData]?.map((item, index) => (
              <SwiperSlide className="py-9 px-6 w-full" key={`${item?.id}-${index}`}>
                <Card className="p-6">
                  <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50  " />
                  <div className="flex flex-col items-center justify-between gap-10">
                    <div className="w-full h-[120px] flex items-center justify-center">
                      {renderClipPathById(item?.id)}
                    </div>
                    <div className="flex flex-col justify-between gap-5">
                      <h1 className="text-xl sm:text-2xl sm:h-[100px] font-semibold text-white z-10 items-center">
                        {t(item?.titleKey)}
                      </h1>
                      <p className="text-base  text-gray-300 z-10 sm:h-[100px]">
                        {t(item?.contentKey)}
                      </p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Possible;
