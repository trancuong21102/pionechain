"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border border-white/30 bg-white/10 backdrop-blur-md  shadow-xl max-w-sm w-full mx-auto p-6 relative h-[33rem] flex items-center justify-center",
        className
      )}
    >
      {/* Four corner icons */}
      <Icon className="absolute h-8 w-8 -top-4 -left-4 text-white/70" />
      <Icon className="absolute h-8 w-8 -bottom-4 -left-4 text-white/70" />
      <Icon className="absolute h-8 w-8 -top-4 -right-4 text-white/70" />
      <Icon className="absolute h-8 w-8 -bottom-4 -right-4 text-white/70" />

      <div className="flex flex-col items-center text-white">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
