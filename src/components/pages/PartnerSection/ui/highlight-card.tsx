"use client";

import IconifyIcon from "@/components/Iconify";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
// import Image from "next/image";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface HighlightCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  twitter?: string;
  telegram?: string;
  youtube?: string;
  facebook?: string;
  fields?: string[];
}

const PartnerHighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
  icon,
  twitter,
  telegram,
  youtube,
  facebook,
  // fields,
}) => {
  const { t } = useTranslation();

  return (
    <div className="group  cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <Card className="text-white  rounded-2xl border border-white/10 bg-gradient-to-br from-[#010101] h-full via-[#090909] to-[#010101] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-white/25 hover:shadow-white/5 w-[340px] flex flex-col justify-between">
        {/* Layer effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Content */}
        <div className="p-8 relative z-10 flex flex-col items-center text-center flex-grow">
          {/* Icon */}
          <div className="relative mb-6">
            {/* <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div> */}
            <div className="p-5 rounded-full backdrop-blur-lg w-32 h-32 flex items-center justify-center border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              {icon}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>
          <div className="space-y-2 max-w-xs">
            <p className="text-gray-400 text-base leading-relaxed line-clamp-4 transform group-hover:text-gray-200 transition-colors duration-300">
              {t(description)}
            </p>
          </div>
        </div>
        {/* {fields && fields.length > 0 && (
          <div>
            <div className="px-8 pb-4 relative z-10 w-full h-[100px] overflow-scroll">
              <div className="flex flex-wrap gap-2">
                {fields.map((field, index) => (
                  <span
                    key={index}
                    className="bg-[#da581742] text-[#da5817] text-sm px-3 py-1 rounded-full backdrop-blur-md  "
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )} */}
        {/* Divider */}
        <div className="mt-6 w-1/3 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

        {/* Social links - now at the bottom */}
        <div className="flex items-center justify-center space-x-6 mt-6 mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
          {twitter && (
            <Link
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-300"
            >
              <IconifyIcon fontSize={20} icon="fa6-brands:x-twitter" />
            </Link>
          )}
          {telegram && (
            <Link
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-300"
            >
              <IconifyIcon fontSize={20} icon="ic:baseline-telegram" />
            </Link>
          )}
          {youtube && (
            <Link
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <IconifyIcon fontSize={20} icon="mdi:youtube" />
            </Link>
          )}
          {facebook && (
            <Link
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors duration-300"
            >
              <IconifyIcon fontSize={20} icon="ic:baseline-facebook" />
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PartnerHighlightCard;
