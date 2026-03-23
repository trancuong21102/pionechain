import BlockchainSectionWrapper from "@/components/pages/BlockchainSection";
import MainLayout from "@/layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pionechain.com/"),
  title: "Pione Scan | Pione Chain | Real-World Assets (RWA) Tokenization",
  description:
    "PIONE CHAIN - Blockchain layer 1 | Unlocking the power of Tokenizing Real-World Assets (RWA) and explore practical applications of blockchain and AI in security tokens, real estate, Healthcare, agriculture, public services,...",
};

export default async function PioneScan() {
  return (
    <MainLayout>
      <BlockchainSectionWrapper />
    </MainLayout>
  );
}
