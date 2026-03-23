"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import Link from "next/link";
import IconifyIcon from "@/components/Iconify";
import React from "react";
import { addToast } from "@heroui/react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      timeout={{ enter: 500, exit: 300 }}
    />
  );
});

function parseTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (!part) return null;
    if (part.match(urlRegex)) {
      return (
        <Link
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 underline hover:text-orange-300 break-all"
        >
          {part}
        </Link>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function DialogPresale({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = () => setOpen(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("0xB79c66fBB8BfE90a9E69D8250441c8DB363c40F2");
    addToast({
      title: "Copied!",
      description: "Contract address copied to clipboard.",
      color: "success",
    });
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      fullScreen={fullScreen}
      maxWidth="md"
      keepMounted
      sx={{
        "& .MuiPaper-root": {
          background: "linear-gradient(145deg, #191919cc, #111111cc)",
          backdropFilter: "blur(14px)",
          borderRadius: "20px",
          color: "white",
          overflow: "hidden",
          height: fullScreen ? "85%" : "80vh",
          width: fullScreen ? "95%" : "700px",
          margin: "auto",
          border: "1px solid rgba(255,165,0,0.25)",
          boxShadow:
            "0 0 25px rgba(255,140,0,0.2), inset 0 0 15px rgba(255,100,0,0.1)",
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "6px 18px",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#FFA500", transform: "scale(1.1)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Nội dung */}
      <DialogContent
        className="scroll-bar"
        sx={{
          px: "30px",
          pt: "0",
          pb: "28px",
          overflowY: "auto",
        }}
      >
        {/* Header Info */}
        <div className="flex flex-col items-center text-center gap-5 mb-6">
          <div className="flex items-start relative">
            <Image
              src="/pione-chain/pio.png"
              alt="Pione Chain"
              width={35}
              height={35}
              className=" mx-auto rounded-full block sm:hidden"
            />{" "}
            <Image
              src="/pione-chain/pio.png"
              alt="Pione Chain"
              width={35}
              height={35}
              className=" mx-auto rounded-full  sm:block hidden absolute -top-1 left-3"
            />{" "}
            <h1 className="text-[17px] sm:px-3 text-center sm:text-[24px] font-semibold leading-tight bg-gradient-to-r from-[#E74041] via-[#FA5805] to-[#C09595] bg-clip-text text-transparent">
              PIONE CHAIN (PIO) OFFICIALLY LISTED ON PANCAKESWAP!
            </h1>
          </div>

          <p className="text-gray-300 text-[15px] max-w-md leading-snug">
            We are pleased to announce that PIONE CHAIN (PIO) will be officially
            listed on the decentralized exchange PancakeSwap on November 1, 2025
            (00:00 UTC)
          </p>
          <p className="text-gray-300 text-[15px] max-w-md leading-snug">
            This milestone marks a significant step forward, reaffirming our
            commitment to transparency, sustainable development, and expanding
            global liquidity for the PIONE CHAIN ecosystem.
          </p>
        </div>
        <div className="flex flex-col w-full mb-6 gap-3">
          <div className="w-full rounded-lg flex flex-col gap-1 bg-gradient-to-r from-[#0a2238]/70 via-[#0f2f4a]/70 to-[#0a2238]/70 border border-blue-500/40 text-blue-200 text-sm p-4 shadow-[0_0_15px_rgba(0,100,255,0.15)]">
            <div className="flex items-center gap-2">
              <p className="text-white font-semibold text-base">
                Start trading today to be among the first investors to own PIONE
                CHAIN (PIO) on PancakeSwap.
              </p>
            </div>
            <div className="flex items-center gap-1 ">
              <Link
                href="https://bscscan.com/address/0xB79c66fBB8BfE90a9E69D8250441c8DB363c40F2"
                target="_blank"
                className="underline hover:text-blue-400 transition break-all"
              >
                0xB79c66fBB8BfE90a9E69D8250441c8DB363c40F2
              </Link>

              <button
                onClick={handleCopy}
                className="relative text-white px-2 py-1 rounded-md text-xs font-medium transition"
              >
                <IconifyIcon
                  icon="mdi:content-copy"
                  color="#c0dbfe"
                  fontSize={16}
                />
              </button>
            </div>
          </div>
          {/* ⚠️ Warning Notice */}
          <div className="w-full rounded-lg bg-gradient-to-r from-[#3b3200]/60 via-[#4a3a00]/50 to-[#3b3200]/60 border border-yellow-600/40 text-yellow-300 text-sm p-4 shadow-[0_0_15px_rgba(255,200,0,0.08)]">
            <div className="flex items-start gap-2">
              <IconifyIcon
                icon="mdi:alert-outline"
                fontSize={22}
                className="text-yellow-400 mt-[2px]"
              />
              <p className="leading-snug">
                <strong>Warning:</strong> beware of fake websites or contracts.
                Only trust the <strong>official PIO (BEP20)</strong> contract
                shown above.
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-300 leading-relaxed text-base text-left tracking-wide space-y-4">
          <p className="font-semibold text-white text-xl">
            🌐 About Pione Chain
          </p>
          <p>
            Pione Chain is a multi-ecosystem Layer-1 blockchain designed for
            enterprise-grade applications and global financial infrastructure.
          </p>

          <p>The ecosystem includes:</p>
          <ul className=" list-inside space-y-3 !text-white text-sm">
            <li className="flex items-center gap-3">
              <div>
                <IconifyIcon icon="typcn:tick" color="#0fe439" fontSize={25} />{" "}
              </div>
              <p>
                <span className="font-semibold">Layer-1 Blockchain</span> with
                native PIO coin
              </p>
            </li>
            <li className="flex items-center gap-3">
              <div>
                <IconifyIcon icon="uil:bag" color="#fe4040" fontSize={25} />{" "}
              </div>
              <p className="font-semibold">Digital Asset Management Platform</p>
            </li>
            <li className="flex items-center gap-3">
              <div>
                <IconifyIcon
                  icon="ri:bank-line"
                  color="#1bbaff"
                  fontSize={25}
                />{" "}
              </div>
              <p className="font-semibold">
                Security Tokens & Tokenized Stocks
              </p>
            </li>
            <li className="flex items-center gap-3">
              <div>
                <IconifyIcon icon="noto:sheaf-of-rice" fontSize={25} />{" "}
              </div>
              <p>
                <span className="font-semibold">
                  Real-World Asset (RWA) Tokenization
                </span>{" "}
                in real estate, healthcare, agriculture, and public services
              </p>
            </li>
            <li className="flex items-center gap-3">
              <IconifyIcon
                icon="lets-icons:dimond-alt-duotone"
                color="#1bbaff"
                fontSize={25}
              />{" "}
              <p className="font-semibold">
                DeFi, NFT, and Smart Contract Utilities
              </p>
            </li>
            <li className="flex items-center gap-3">
              <div>
                <IconifyIcon icon="fxemoji:lock" fontSize={25} />{" "}
              </div>
              <p className="font-semibold">
                High-level Security & Compliance Standards for businesses and
                institutions
              </p>
            </li>
          </ul>
          <p className="text-base">
            Our mission: “Unlocking the power of Tokenizing Real-World Assets
            (RWA)” and driving practical blockchain and AI adoption across
            industries.
          </p>
          <div className="flex sm:items-center gap-2 text-white sm:flex-row flex-col itmes-start">
            <p className="flex items-center gap-2">
              <IconifyIcon
                icon="hugeicons:global"
                color="#1bbaff"
                fontSize={30}
              />{" "}
              <span className="font-semibold text-xl">Official website:</span>
            </p>
            <Link
              href="https://pionechain.com"
              className="text-rose-500 underline"
              target="_blank"
            >
              https://pionechain.com
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-start w-full items-start gap-2 mt-5  text-base font-medium ">
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://pionechain.com"
            target="_blank"
          >
            <span>🌐 Website: </span>
            <span className="underline text-rose-500 text-sm">
              https://pionechain.com
            </span>
          </Link>
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://pionechain.com/company/tokenomics/"
            target="_blank"
          >
            <span>📊 Tokenomics: </span>
            <span className="underline text-rose-500 text-sm">
              https://pionechain.com/company/tokenomics/
            </span>
          </Link>
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://pioneswap.com"
            target="_blank"
          >
            <span>🔗 Bridge Portal: </span>
            <span className="underline text-rose-500 text-sm">
              https://pioneswap.com
            </span>
          </Link>
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://pionescan.com"
            target="_blank"
          >
            <span>🔎 Explorer: </span>
            <span className="underline text-rose-500 text-sm">
              https://pionescan.com
            </span>
          </Link>
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://nft.pionewallet.com"
            target="_blank"
          >
            <span>🎨 NFT Platform: </span>
            <span className="underline text-rose-500 text-sm">
              https://nft.pionewallet.com
            </span>
          </Link>
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://t.me/pionechain"
            target="_blank"
          >
            <span>📢 Telegram: </span>
            <span className="underline text-rose-500 text-sm">
              https://t.me/pionechain
            </span>
          </Link>
          <Link
            className="flex items-start sm:items-center gap-2 sm:flex-row flex-col"
            href="https://x.com/pione_chain"
            target="_blank"
          >
            🐦 X (Twitter):{" "}
            <span className="underline text-rose-500 text-sm">
              https://x.com/pione_chain
            </span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
