"use client";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, type Transition } from "framer-motion"; // Đổi từ "motion/react" thành "framer-motion"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { InternalLinkProps } from "../pages/types/type";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const transition: Transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {children && Array.isArray(children) ? (
        <>
          <div className="flex items-center gap-2">{children[0]}</div>
          {active === item && children[1] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              transition={transition}
            >
              <div className="absolute top-[calc(100%_+_1rem)] w-max left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="bg-zinc-950 backdrop-blur-sm rounded-2xl overflow-hidden border flex flex-col gap-3 items-center justify-center border-white/[0.2] shadow-xl"
                >
                  <motion.div layout className="w-max h-full p-4">
                    {children[1]}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActive(null);
    }, 300);
    setTimeoutId(id);
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative flex justify-center items-center space-x-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black  ">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]  ">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  className = "",
  ...rest
}: InternalLinkProps & { key?: React.Key }) => {
  const combinedClassName =
    `text-neutral-200 hover:text-neutral-400 ${className}`.trim();
  return (
    <Link {...rest} className={combinedClassName}>
      {children}
    </Link>
  );
};
