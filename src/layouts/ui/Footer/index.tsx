"use client";
import IconifyIcon from "@/components/Iconify";
import {
  footerPages,
  footerSocial,
} from "@/components/pages/HomeSection/helper";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" py-14 lg:py-20 px-4 md:px-6 bg-zinc-950">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="mb-8 md:mb-0">
            <div className="mt-2">
              <Link href="/">
                <Image
                  height={97}
                  width={437}
                  style={{ height: "auto" }}
                  src={"/pione-chain/logo_1.png"}
                  alt="Logo"
                />
              </Link>
            </div>
            <p className="text-base text-gray-400 mt-5">
              © 2025 PIONE CHAIN. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Pages</h3>
              <ul className="space-y-2">
                {footerPages?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item?.url}
                        target="_blank"
                        className="text-gray-400 hover:text-white"
                      >
                        {item?.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Socials</h3>
              <ul className="space-y-2">
                {footerSocial?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        target="_blank"
                        href={item?.url}
                        className=" text-gray-400 hover:text-white flex items-center gap-1"
                      >
                        <IconifyIcon fontize={30} icon={item.icon} />
                        <span>{item?.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className=" text-gray-400 flex gap-1 items-center hover:text-white"
                  >
                    <span>Privacy Policy</span>
                    <IconifyIcon icon="tabler:arrow-up-right" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className=" text-gray-400 flex gap-1 items-center hover:text-white"
                  >
                    <span>Terms of Service</span>
                    <IconifyIcon icon="tabler:arrow-up-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            PIONE CHAIN
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
