"use client";

import { HeadTitle } from "@/components/HeadTitle";
import { CardProject } from "./ui/CardProject";
import { DataTagSystem } from "./helper";
import { TagSystemItem } from "../types/type";
import { useTranslation } from "react-i18next";
// import { GridBeam } from "../HomeSection/ui/Grid-beams";

export const EcosystemSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full ">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 
      bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
       bg-[size:50px_45px] "
      ></div>
      <div className="relative container py-40">
        <HeadTitle
          title={t("ecosystem.title")}
          subTitle={t("ecosystem.description")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {DataTagSystem?.map((item: TagSystemItem, index: number) => {
            return <CardProject key={index} data={item} />;
          })}
          <div className="p-5 h-80 relative transition-all w-full bg-zinc-900 flex flex-col justify-center items-center rounded-3xl ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#e7e7e7_1px,transparent_1px)] opacity-20 [background-size:41px_41px] "></div>
            <h3 className="text-4xl font-bold uppercase">
              {t("ecosystem.comming")}{" "}
            </h3>
            <p className="relative z-10 mt-4 text-center text-gray-300 h-[80px] text-lg line-clamp-4">
              {t("ecosystem.comming_content")}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
