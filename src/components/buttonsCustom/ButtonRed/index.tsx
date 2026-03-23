import Link from "next/link";
import React from "react";

type Props = {
  link?: string;
  content: string;
  background?: string;
};

const ButtonRed = ({ content, background = "", link = "#" }: Props) => {
  return (
    <Link
      href={link}
      className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px]
       focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
        focus:ring-offset-slate-50 border border-orange-500"
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
       bg-[conic-gradient(from_90deg_at_50%_50%,#eca3a3_0%,#C21A1C_50%,#eca3a3_100%)]"
      />
      <span
        className={`${background} bg-dark  inline-flex h-full w-full cursor-pointer items-center
       justify-center rounded-full px-5 py-1 text-sm font-semibold
        text-white backdrop-blur-3xl text-center`}
      >
        {content}
      </span>
    </Link>
  );
};
export default ButtonRed;
