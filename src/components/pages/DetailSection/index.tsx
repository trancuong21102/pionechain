"use client";

import IconifyIcon from "../../Iconify";
import Link from "next/link";
import DateFormat from "@/lib/format";
import Image from "next/image";
import { BASE_URL_IMAGE } from "@/store/api";
import { BlogItem } from "@/store/types";
import BlogContent from "@/components/BlogContent";

interface BlogDetailSectionProps {
  data: BlogItem | null;
}

export const BlogDetailSection = ({ data }: BlogDetailSectionProps) => {
  if (!data) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center py-40 px-4">
        <p className="text-2xl text-gray-500">No data available</p>
      </div>
    );
  }

  console.log(BASE_URL_IMAGE + data.banner, "data.banner");

  return (
    <div className="w-full min-h-screen py-20 md:py-40 px-4 container max-w-6xl mx-auto text-white">
      {/* Back button + date */}
      <div className="w-full mb-10 flex items-center justify-between">
        <Link
          className="cursor-pointer text-white w-fit font-semibold flex items-center gap-1 hover:underline duration-300 transition-all"
          href={`/news`}
        >
          <IconifyIcon icon="si:arrow-left-fill" fontSize={25} />
          <span>All News</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[#167bff] bg-[#125cbd3d] text-sm sm:text-lg font-semibold">
          <IconifyIcon icon="lets-icons:date-fill" fontSize={20} />
          <span>{DateFormat(data.createdAt)}</span>
        </div>
      </div>

      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={BASE_URL_IMAGE + "/" + data?.banner}
          alt={data.title}
          width={1200}
          height={675}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>

      {/* Title & Brief */}
      <div className="mt-10 flex flex-col gap-6">
        <h1 className="text-3xl/tight sm:text-5xl/tight md:text-6xl/tight font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="text-base sm:text-xl text-gray-400 italic border-l-4 border-blue-500 pl-4 leading-relaxed">
          {data.brief}
        </p>
      </div>

      {/* Main Content */}
      <div className="border-t border-[#3a3a3a] mt-12 pt-10">
        <BlogContent htmlContent={data.content} />
      </div>
    </div>
  );
};
