import { CommunitySection } from "@/components/pages/CommunitySection";
import MainLayout from "@/layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://pionechain.com/"),
    title: "Community | Pione Chain | Real-World Assets (RWA) Tokenization",
    description:
        "Join the Pione Chain community - Connect with developers, innovators, and blockchain enthusiasts building the future of Real-World Assets (RWA) tokenization.",
};

export default async function Community() {
    return (
        <MainLayout>
            <CommunitySection />
        </MainLayout>
    );
}
