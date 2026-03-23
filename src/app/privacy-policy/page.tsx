import { PrivacySection } from "@/components/pages/PrivacySection";
import MainLayout from "@/layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pionechain.com/"),
  title: "Privacy Policy | Pione Chain | Real-World Assets (RWA) Tokenization",
  description:
    "PIONE CHAIN - Blockchain layer 1 | Unlocking the power of Tokenizing Real-World Assets (RWA) and explore practical applications of blockchain and AI in security tokens, real estate, Healthcare, agriculture, public services,...",
};

export default async function Privacy() {
  return (
    <MainLayout>
      <PrivacySection />
    </MainLayout>
  );
}
