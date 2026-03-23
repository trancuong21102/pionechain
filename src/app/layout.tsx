import type { Metadata } from "next";
// import "../config-translation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientSideAOS from "@/components/ClientSideAOS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pionechain.com/"),
  title: "Pione Chain | Real-World Assets (RWA) Tokenization",

  description:
    "PIONE CHAIN - Blockchain layer 1 | Unlocking the power of Tokenizing Real-World Assets (RWA) and explore practical applications of blockchain and AI in security tokens, real estate, Healthcare, agriculture, public services,...",
  keywords: [
    "Pione Chain",
    "Global Scaling",
    "Blockchain Ecosystem",
    "Blockchain Technology Applications",
    "Pione Group",
    "Decentralized Wallet",
    "Digital Asset Optimization",
    "Blockchain",
    "AI Blockchain",
    "Web3",
    "IoT",
  ],
  openGraph: {
    title: "Pione Chain | Real-World Assets (RWA) Tokenization",

    description:
      "PIONE CHAIN - Blockchain layer 1 | Unlocking the power of Tokenizing Real-World Assets (RWA) and explore practical applications of blockchain and AI in security tokens, real estate, Healthcare, agriculture, public services,...",

    url: "https://pionechain.com/",
    siteName: "Pione Chain",
    images: [
      {
        url: "https://pionechain.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Pione Chain | Real-World Assets (RWA) Tokenization",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pione Chain | Real-World Assets (RWA) Tokenization",
    description:
      "PIONE CHAIN - Blockchain layer 1 | Unlocking the power of Tokenizing Real-World Assets (RWA) and explore practical applications of blockchain and AI in security tokens, real estate, Healthcare, agriculture, public services,...",

    images: ["https://pionechain.com/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
        <ClientSideAOS />
      </body>
    </html>
  );
}
