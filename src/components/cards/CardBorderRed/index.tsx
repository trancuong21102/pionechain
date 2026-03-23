import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { VisionsMissionsProps } from "@/yummy_data";

type Props = { data: VisionsMissionsProps };

const CardBorderRed = ({ data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="p-5 rounded-lg gradient-backdrop-red w-full flex flex-col gap-4 border-2 border-red-900/30">
      <h3 className="text-[#FC7F00] font-semibold text-xl h-7 line-clamp-1 text-justify">
        {t(data?.title)}
      </h3>
      <p className="text-white text-sm h-[60px] line-clamp-3 text-justify">
        {t(data?.content)}
      </p>
      <div className="h-[120px] w-full flex justify-end">
        <Image
          src={data?.image}
          alt={data?.title}
          width={120}
          height={120}
          className=" h-full w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CardBorderRed;
