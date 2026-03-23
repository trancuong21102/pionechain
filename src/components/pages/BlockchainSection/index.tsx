"use client";
import dynamic from "next/dynamic";

const BlockchainSection = dynamic(() => import("./ui/Section").then((mod) => mod.BlockchainSection), { ssr: false });

export default function BlockchainSectionWrapper() {
  return <BlockchainSection />;
}
