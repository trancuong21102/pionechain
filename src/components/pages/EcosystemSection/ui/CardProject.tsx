"use client";
import Link from "next/link";
import { TagSystemItem } from "../../types/type";
import { useTranslation } from "react-i18next";
import Image from "next/image";
// import { Grid } from "@/components/ui/Grid";

export const CardProject = ({ data }: { data: TagSystemItem }) => {
  const { t } = useTranslation();
  return (
    <Link
      target="_blank"
      href={(data?.isComing ? "" : data?.url) as string}
      className={`p-5 transition-all w-full bg-gradient-to-b from-zinc-900 to-zinc-800  relative  rounded-3xl ${
        data?.isComing ? "pointer-events-none " : ""
      }`}
    >
      {/* Title & Description */}
      <div className="mt-3">
        <h2 className="text-xl font-semibold">{t(data?.title)}</h2>
        <p className="text-gray-300 h-[80px] text-sm mt-1 line-clamp-4">
          {t(data?.desc)}
        </p>
      </div>

      {/* Project Link */}
      <div className="flex items-center gap-3 p-5 bg-[#090909]  rounded-xl mt-4">
        <div className="w-[50px]">
          <Image src={data?.img} alt="Logo" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold uppercase">{t(data?.title)}</h3>
          <p className=" font-medium text-orange-600 underline">{data?.name}</p>
        </div>
      </div>

      {data?.isComing && (
        <div className="absolute z-10 top-5 right-5 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-xl">
          {t("ecosystem.comming")}
        </div>
      )}
    </Link>
  );
};
