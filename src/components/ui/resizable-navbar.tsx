"use client";
import { cn } from "@/lib/utils";
import {
  IconMenu2,
  IconX,
  IconBuilding,
  IconBulb,
  IconNews,
  IconFile,
  IconUsers,
  IconCoins,
  IconMap,
  IconBook,
  IconChartBar,
  IconBrandBinance,
  IconArrowsExchange,
  IconApps,
  IconChartPie,
  IconWallet,
  IconHome,
  IconHeart,
  IconSeeding
} from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem } from "./navbar-menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuChildItem, NavItem } from "../pages/types/type";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

// Helper function để lấy icon theo tên menu
export const getMenuIcon = (menuName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    "common.header.navbar.about.company": <IconBuilding className="w-4 h-4" />,
    "common.header.navbar.about.aboutUs": <IconBuilding className="w-4 h-4" />,
    "common.header.navbar.about.solution": <IconBulb className="w-4 h-4" />,
    "common.header.navbar.about.news": <IconNews className="w-4 h-4" />,
    "common.header.navbar.about.whitepaper": <IconFile className="w-4 h-4" />,
    "common.header.navbar.about.ourTeam": <IconUsers className="w-4 h-4" />,
    "common.header.navbar.about.tokenomic": <IconCoins className="w-4 h-4" />,
    "common.header.navbar.about.roadmap": <IconMap className="w-4 h-4" />,
    "common.header.navbar.about.document": <IconBook className="w-4 h-4" />,
    "common.header.navbar.about.projectSpecs": <IconChartBar className="w-4 h-4" />,
    "common.header.navbar.about.pio_bnb": <IconBrandBinance className="w-4 h-4" />,
    "common.header.navbar.about.pioneSwap": <IconArrowsExchange className="w-4 h-4" />,
    "common.header.navbar.about.pioneSuperApp": <IconApps className="w-4 h-4" />,
    "common.header.navbar.about.pioneInvest": <IconChartPie className="w-4 h-4" />,
    "common.header.navbar.about.pioneWallet": <IconWallet className="w-4 h-4" />,
    "common.header.navbar.about.pioneHouse": <IconHome className="w-4 h-4" />,
    "common.header.navbar.about.pioneCare": <IconHeart className="w-4 h-4" />,
    "common.header.navbar.about.pioneFarm": <IconSeeding className="w-4 h-4" />,
  };

  return iconMap[menuName] || null;
};

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible }
          )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "1300px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-transparent px-7 container py-2 xl:flex ",
        visible && "bg-zinc-950/50 ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <motion.div
      className={cn(
        "absolute inset-0 hidden pl-14 flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-gray-600 xl:flex lg:space-x-2",
        className
      )}
    >
      <Menu setActive={setActive}>
        {items.map((item: NavItem) => (
          <MenuItem
            key={item.name}
            setActive={setActive}
            active={active}
            item={t(item.name)}
          >
            {item.MenuChild ? (
              <motion.p
                transition={{ duration: 0.3 }}
                className={cn(
                  "cursor-pointer font-semibold text-base flex items-center gap-1 hover:opacity-[0.9]",
                  pathname.startsWith(item.link)
                    ? "text-orange-500 bg-orange-400/20 px-3 py-1 rounded-full"
                    : "text-white"
                )}
              >
                <span>{t(item.name)}</span>
                <ExpandMoreIcon
                  htmlColor={
                    pathname.startsWith(item.link) ? "text-orange-500" : "#fff"
                  }
                  fontSize="small"
                />
              </motion.p>
            ) : (
              <Link href={item.link} onClick={onItemClick}>
                <motion.p
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "cursor-pointer font-semibold hover:opacity-[0.9]",
                    pathname.startsWith(item.link)
                      ? "text-orange-500 bg-orange-400/20 px-3 py-1 rounded-full"
                      : "text-white"
                  )}
                >
                  {t(item.name)}
                </motion.p>
              </Link>
            )}

            {item.MenuChild && (
              <div className="grid grid-cols-1 gap-1 p-2 min-w-[320px]">
                {item.MenuChild.map((child: MenuChildItem) => {
                  const isExternalLink =
                    child.link === "https://pionechain.com/whitepaper.pdf" ||
                    child.link === "https://pione.org/docs/about/welcome/";

                  return (
                    <HoveredLink
                      target={isExternalLink ? "_blank" : "_self"}
                      key={child.name}
                      href={child.link}
                      className="group/item"
                    >
                      <div className="flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] group-hover/item:translate-x-1">
                        <div className="flex items-center justify-center min-w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 shadow-2xl text-zinc-400 group-hover/item:text-white group-hover/item:border-white/20 group-hover/item:shadow-orange-500/10 transition-all duration-300">
                          {getMenuIcon(child.name) ? (
                            React.cloneElement(
                              getMenuIcon(child.name) as React.ReactElement<{
                                className?: string;
                              }>,
                              { className: "w-6 h-6" }
                            )
                          ) : (
                            <IconApps className="w-6 h-6" />
                          )}
                        </div>
                        <div className="flex flex-col justify-center py-0.5">
                          <span className="text-white font-bold text-base mb-1 group-hover/item:text-orange-400 transition-colors">
                            {t(child.name)}
                          </span>
                          <span className="text-zinc-400 text-xs leading-relaxed font-medium group-hover/item:text-zinc-300 transition-colors">
                            {t(child.name + "_desc")}
                          </span>
                        </div>
                      </div>
                    </HoveredLink>
                  );
                })}
              </div>
            )}
          </MenuItem>
        ))}
      </Menu>
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "30px" : "30px",
        paddingLeft: visible ? "30px" : "30px",
        borderRadius: visible ? "2rem" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent py-2 xl:hidden",
        visible && "bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

interface MobileMenuItemProps {
  item: string;
  urls: string;
  children?: React.ReactNode;
  isChild: any;
}

export const MobileMenuItem = ({
  item,
  urls,
  children,
  isChild,
}: MobileMenuItemProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(isChild, "isChild");
  return (
    <div className="w-full">
      {isChild?.length > 0 ? (
        <div
          className={cn(
            "flex items-center justify-between w-full cursor-pointer px-3 rounded-xl py-2",
            pathname.startsWith(urls)
              ? "text-orange-400 bg-orange-400/20 font-bold" // active menu
              : "text-white hover:bg-[#202020]"
          )}
          onClick={() => setIsSubMenuOpen((prev) => !prev)}
        >
          {item}
          {children && (
            <motion.div
              animate={{ rotate: isSubMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExpandMoreIcon fontSize="small" />
            </motion.div>
          )}
        </div>
      ) : (
        <Link href={urls}>
          <div
            className={cn(
              "flex items-center justify-between w-full cursor-pointer px-3 rounded-xl py-2",
              pathname.startsWith(urls)
                ? "text-orange-400 bg-orange-400/20 font-bold" // active menu
                : "text-white hover:bg-[#202020]"
            )}
            onClick={() => setIsSubMenuOpen((prev) => !prev)}
          >
            {item}
            {children && (
              <motion.div
                animate={{ rotate: isSubMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ExpandMoreIcon fontSize="small" />
              </motion.div>
            )}
          </div>
        </Link>
      )}
      <AnimatePresence>
        {isSubMenuOpen && children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 flex flex-col gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen top-20 z-40 bg-zinc-950"
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute inset-x-0 top-[70px] z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-[#111111] px-4 py-8 overflow-y-auto max-h-[calc(100vh-100px)] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
              className
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white cursor-pointer" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-white">Startup</span>
    </Link>
  );
};
