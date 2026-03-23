"use client"

import { Grid } from "@/components/ui/Grid";
import { useTranslation } from "react-i18next";
import { empoweringData } from "../../helper";

export const Empowering = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] "></div>
      <div className="container text-white py-10 flex flex-col gap-10 lg:gap-0 items-center h-full">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <span className="inline-block text-base border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
            {t("home.empoweringSection.subTitle")}
          </span>
          <h1 className="text-3xl md:text-5xl py-1  font-semibold leading-normal  text-center ">
            {t("home.empoweringSection.title")}
          </h1>

          <p className="text-sm sm:text-base font-normal text-center max-w-3xl">
            {t("home.empoweringSection.description")}
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  max-w-7xl mx-auto">
            {empoweringData?.map((card, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
              >
                <Grid size={20} />
                <div className="flex items-center gap-3">
                  {/* <IconifyIcon icon="fa7-solid:industry" fontSize={30} /> */}
                  <p className="text-2xl h-[50px] font-bold text-orange-600 relative z-20">
                    {t(card.title)}
                  </p>
                </div>
                <p className="text-gray-200 mt-4 text-base font-normal relative z-20">
                  {t(card.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        <div className="w-full lg:w-1/3 flex justify-center items-center">

        </div>
      </div> */}
      </div>
    </div>
  );
};
