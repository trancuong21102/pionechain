import AboutUsSection from "@/components/pages/AboutUsSection";
import MainLayout from "@/layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://pionechain.com/"),
    title: "About Us | Pione Chain | Real-World Assets (RWA) Tokenization",
    description:
        "Learn about Pione Chain - the next-generation Layer-1 blockchain platform for bridging the gap between digital assets and the physical world through AI and blockchain innovation.",
};

export default function AboutUs() {
    return (
        <MainLayout>
            <AboutUsSection />
        </MainLayout>
    );
}
