"use client";
import React from "react";
import Image from "next/image";
import { OperatingPrinciplesProps } from "@/yummy_data";
import { useTranslation } from "react-i18next";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardOperatingPrinciplesProps {
  data: OperatingPrinciplesProps;
}

const CardOperatingPrinciples: React.FC<CardOperatingPrinciplesProps> = ({
  data,
}) => {
  const { t } = useTranslation();

  return (
    <BackgroundGradient className="rounded-[22px]  flex flex-col justify-center items-start gap-5  w-full p-4 sm:p-10 bg-zinc-900">
      <p className=" font-bold text-lg h-14 line-clamp-2 text-white text-justify ">
        {t(data?.title)}
      </p>
      <div className=" h-[149px] relative">
        {" "}
        <div className=" font-normal text-white h-[149px] overflow-y-scroll relative">
          {data.content?.map((item, index) => (
            <p key={index} className=" text-justify">
              {t(item)}{" "}
            </p>
          ))}
        </div>
      </div>
      {data.image && (
        <div className=" w-full flex justify-end h-[120px]">
          <Image
            className=" object-contain"
            height={120}
            width={120}
            src={data?.image}
            alt={data?.image}
          />
        </div>
      )}
    </BackgroundGradient>
  );
};

export default CardOperatingPrinciples;
