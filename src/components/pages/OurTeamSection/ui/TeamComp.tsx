/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import DialogDetail from "./DialogDetail";
import Link from "next/link";
import IconifyIcon from "@/components/Iconify";
import { cn } from "@/lib/utils";

type TeamCompProps = {
  data?: any[];
  cardClassName?: string;
};

export const TeamComp = ({ data, cardClassName }: TeamCompProps) => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState<any>(null);

  const handleOpenModal = (member: any) => {
    setInfo(member);
    setOpen(true);
  };

  return (
    <>
      {data?.map((member: any) => (
        <div
          key={member.id}
          onClick={() => handleOpenModal(member)}
          className={cn(
            "bg-[linear-gradient(110deg,#222_0.6%,#111)] border-3 border-white/10 w-full rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer",
            cardClassName
          )}
        >
          <div className="flex items-center sm:items-start gap-5 sm:flex-row flex-col">
            <div>
              <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-rose-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 sm:items-start items-center">
              <h3 className="text-xl font-semibold text-white uppercase">
                {member.name}
              </h3>
              <p className="text-gray-300 uppercase text-sm sm:text-left text-center">
                {member.role || ""}
              </p>
            </div>
          </div>

          {/* 🔗 Social + Website Links */}
          <div className="flex flex-wrap gap-4 mt-3 w-full justify-end items-center">
            {member.website && (
              <Link
                href={member.website}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:opacity-80"
              >
                <LanguageIcon htmlColor="#E74041" />
              </Link>
            )}

            {member.tele && (
              <Link
                href={member.tele}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:opacity-80"
              >
                <TelegramIcon htmlColor="#E74041" />
              </Link>
            )}

            {member.twitter && (
              <Link
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:opacity-80"
              >
                <XIcon htmlColor="#E74041" />
              </Link>
            )}

            {member.linked && (
              <Link
                href={member.linked}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:opacity-80"
              >
                <IconifyIcon
                  icon="line-md:linkedin"
                  color="#E74041"
                  fontSize={25}
                />
              </Link>
            )}

            {member.facebook && (
              <Link
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:opacity-80"
              >
                <FacebookIcon htmlColor="#E74041" />
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* 🧩 Modal chi tiết */}
      <DialogDetail open={open} setOpen={setOpen} member={info} />
    </>
  );
};
