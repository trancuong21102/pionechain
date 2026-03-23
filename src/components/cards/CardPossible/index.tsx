"use client";
import React from "react";
import Image from "next/image";
import { PossibleProps } from "@/yummy_data";
import { useTranslation } from "react-i18next";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardPossibleProps {
  data: PossibleProps;
}

const CardPossible: React.FC<CardPossibleProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <BackgroundGradient className="rounded-[22px]  flex flex-col justify-center items-center gap-5  w-full p-4 sm:p-10 bg-zinc-900">
      <div className="h-52">
        <Image
          height={200}
          width={200}
          src={data?.image}
          alt="possible_0.svg"
        />
      </div>
      <p className=" font-bold text-lg h-14 line-clamp-2">
        {t(data?.titleKey)}
      </p>
      <p className=" font-normal text-white h-[149px] overflow-y-scroll">
        {t(data?.contentKey)}
      </p>
    </BackgroundGradient>
  );
};

export default CardPossible;
