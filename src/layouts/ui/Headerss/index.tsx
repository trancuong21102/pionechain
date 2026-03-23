"use client";

import ButtonRed from "@/components/buttonsCustom/ButtonRed";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileMenuItem,
  getMenuIcon,
} from "@/components/ui/resizable-navbar";
import LanguageSwitcher from "@/mui/SwitchButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { navItems as baseNavItems } from "./helper";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const pathname = usePathname();
  const lang = i18n.language;

  const navItems = baseNavItems.map((item) => {
    if (item.MenuChild) {
      return {
        ...item,
        MenuChild: item.MenuChild.map((child) => {
          if (child.name === "common.header.navbar.about.whitepaper") {
            return {
              ...child,
              link:
                lang === "vi"
                  ? "https://pionechain.com/whitepaper_vi.pdf"
                  : "https://pionechain.com/whitepaper.pdf",
            };
          }
          return child;
        }),
      };
    }
    return item;
  });


  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 py-3 left-0 w-full">
        <NavBody>
          {/* Logo */}
          <Link href="/">
            <Image
              height={97}
              width={437}
              style={{ height: "auto" }}
              alt="logo mb"
              className="w-2/5 h-auto z-[999] relative"
              src={"/pione-chain/logo_1.png"}
            />
          </Link>

          {/* Desktop Menu */}
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              isActive: pathname.startsWith(item.link),
            }))}
          />

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ButtonRed content={t("common.contactUs")} link="/contact-us" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/">
              <Image
                height={97}
                width={437}
                style={{ height: "auto" }}
                alt="logo mb"
                className="sm:w-1/2 w-2/3"
                src={"/pione-chain/logo_1.png"}
              />
            </Link>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          {/* Mobile Menu Items */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {navItems.map((item, index) => (
              <MobileMenuItem
                key={index}
                item={t(item.name)}
                urls={item.link}
                isChild={item?.MenuChild}
              >
                {item.MenuChild && (
                  <div className="flex flex-col gap-3 ml-5 mt-3">
                    {item.MenuChild.map((child) => {
                      return (
                        <Link
                          key={child.name}
                          href={child.link}
                          className={` ${pathname === child.link
                            ? "text-orange-400 font-bold"
                            : "text-neutral-200"
                            } hover:text-neutral-400 flex items-center gap-2`}
                          target={child.link.startsWith("http") ? "_blank" : ""}
                        >
                          {getMenuIcon(child.name)}
                          <span>{t(child.name)}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </MobileMenuItem>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
