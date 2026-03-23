"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { metaverse } from "../pages/HomeSection/helper";
import { useTranslation } from "react-i18next";
 

export const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "relative border border-dashed  border-zinc-700 rounded-lg p-6  bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold  text-gray-100">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export const  PlusCardObject: React.FC<{
  className?: string;
  title: string;
  description: string[];
}> = ({ className = "", title, description }) => {
    const { t } = useTranslation();
  
  return (
    <div
      className={cn(
        "relative border border-dashed  border-zinc-700 rounded-lg p-6  bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold  text-gray-100">{title}</h3>
        <div className=" font-normal text-white h-[96px] overflow-y-scroll relative"> {description?.map((item, index) => (
            <p key={index} className=" text-gray-300">
              {t(item)}{" "}
            </p>
          ))}</div>
      </div>
    </div>
  );
};

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={30}
    height={30}
    strokeWidth="1"
    stroke="currentColor"
    className={`text-white  size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export default function RuixenBentoCards() {
  const { t } = useTranslation();

  return (
    <div className=" container pt-10 sm:pt-32 pb-20">
      <div className=" text-left px-4 mt-6 lg:-mt-20 max-w-5xl">
        <div className="flex flex-col gap-3">
          <span className=" text-base border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
            {t("home.metaverseSection.title")}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-normal mb-4">
            {t("home.metaverseSection.subTitle")}
          </h1>
        </div>
      </div>
      <div className="mx-auto py-12 px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-10">
          {metaverse?.map((item, index) => {
            return (
              <PlusCard
                key={index}
                title={t(item?.title)}
                description={t(item?.description)}
                className="lg:col-span-3 lg:row-span-2"
              />
            );
          })}
          {/* <PlusCard
            {...cardContents[0]}
            className="lg:col-span-3 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[1]}
            className="lg:col-span-2 lg:row-span-2"
          />
          <PlusCard
            {...cardContents[2]}
            className="lg:col-span-4 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[3]}
            className="lg:col-span-2 lg:row-span-1"
          />
          <PlusCard
            {...cardContents[4]}
            className="lg:col-span-2 lg:row-span-1"
          /> */}
        </div>

        {/* Section Footer Heading */}
      </div>
    </div>
  );
}
