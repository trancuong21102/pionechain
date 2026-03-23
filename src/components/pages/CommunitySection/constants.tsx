import event1 from "@/assets/event/event1.jpg";
import event2 from "@/assets/event/event2.jpg";
import event3 from "@/assets/event/event3.jpg";
import event4 from "@/assets/event/event4.jpg";
import event5 from "@/assets/event/event5.jpg";
import event6 from "@/assets/event/event6.jpg";
import event7 from "@/assets/event/event7.jpg";
import event8 from "@/assets/event/event8.jpg";
import event9 from "@/assets/event/event9.jpg";
import event10 from "@/assets/event/event10.jpg";
import event11 from "@/assets/event/event11.jpg";
import event12 from "@/assets/event/event12.jpg";
import bgBanner from "@/assets/images/bg-banner.png";

import ecoWallet from "@/assets/ecosystem/pioneWallet.png";
import ecoSwap from "@/assets/ecosystem/pioneSwap.png";
import ecoChain from "@/assets/ecosystem/pioneChain.png";
import ecoDapp from "@/assets/ecosystem/pioneDapp.png";
import ecoAi from "@/assets/ecosystem/pioneAi.png";
import ecoBot from "@/assets/ecosystem/pioneBot.png";
import ecoSmart from "@/assets/ecosystem/pioneSmart.png";
import ecoScan from "@/assets/ecosystem/pioneScan.png";
import ecoDream from "@/assets/ecosystem/pioneDream.png";
import ecoHouse from "@/assets/ecosystem/pioneHouse.png";
import ecoMart from "@/assets/ecosystem/pioneMart.png";
import ecoCare from "@/assets/ecosystem/pioneCare.png";
import imgBanner2 from "@/assets/images/imgBanner2.png";

import Image from "next/image";

import IconifyIcon from "@/components/Iconify";
import LoadingRadar from "./radar";


export const eventsS1 = [event1, event2, event3, event4];
export const eventsS2 = [event8, event7, event5, event6];
export const eventsS3 = [event9, event10, event11, event12];

export const bannerBg = bgBanner;

export const socialChannels = [
    {
        name: "Telegram",
        icon: "ic:baseline-telegram",
        link: "https://t.me/pionechain",
        description: "Join our main community",
        descriptionKey: "community.social.channels.telegram",
        members: "50K+",
        hoverColor: "hover:text-sky-400",
    },
    {
        name: "Twitter",
        icon: "fa6-brands:x-twitter",
        link: "https://x.com/pione_chain",
        description: "Follow for latest updates",
        descriptionKey: "community.social.channels.twitter",
        members: "4K+",
        hoverColor: "hover:text-gray-300",
    },
    {
        name: "Facebook",
        icon: "ic:baseline-facebook",
        link: "https://www.facebook.com/pionechain",
        description: "Follow our updates & news",
        descriptionKey: "community.social.channels.facebook",
        members: "3K+",
        hoverColor: "hover:text-blue-500",
    },
    {
        name: "Tiktok",
        icon: "ic:baseline-tiktok",
        link: "https://www.tiktok.com/@pione.group",
        description: "Watch tutorials & videos",
        descriptionKey: "community.social.channels.tiktok",
        members: "1K+",
        hoverColor: "hover:text-red-600",
    },
    {
        name: "Reddit",
        icon: "ic:baseline-reddit",
        link: "https://www.reddit.com/r/PioneChainOfficial",
        description: "Watch tutorials & videos",
        descriptionKey: "community.social.channels.reddit",
        members: "2K+",
        hoverColor: "hover:text-red-600",
    },
    {
        name: "Medium",
        icon: "ri:medium-line",
        link: "https://medium.com/@pione_chain",
        description: "Watch tutorials & videos",
        descriptionKey: "community.social.channels.medium",
        members: "2K+",
        hoverColor: "hover:text-red-600",
    },
    {
        name: "Discord",
        icon: "ic:baseline-discord",
        link: "https://discord.gg/VQhA2byeA5",
        description: "Chat with the community",
        descriptionKey: "community.social.channels.discord",
        members: "2K+",
        hoverColor: "hover:text-indigo-400",
    },

    {
        name: "YouTube",
        icon: "mdi:youtube",
        link: "https://www.youtube.com/@pione_chain",
        description: "Watch tutorials & updates",
        descriptionKey: "community.social.channels.youtube",
        members: "1K+",
        hoverColor: "hover:text-red-600",
    },
    {
        name: "Slack",
        icon: "mdi:slack",
        link: "https://join.slack.com/t/pionechain/shared_invite/zt-3gm9mzw8k-9p2FuRl1QBN9SdgDZpNhpw",
        description: "Watch tutorials & updates",
        descriptionKey: "community.social.channels.slack",
        members: "20K+",
        hoverColor: "hover:text-red-600",
    },
];

export const tryPioneItems = [
    {
        title: "Pione Docs",
        description: "Learn about and start building on Pione with the help of our official documentation",
        link: "/docs",
        icon: "mdi:code-braces",
        theme: {
            from: "from-blue-500/20",
            text: "text-blue-500"
        },
        graphic: (
            <div className="absolute inset-0 flex flex-col p-4 font-mono text-[10px] text-blue-400 opacity-40">
                <p>const pione = require("pione-sdk");</p>
                <p>const client = new Pione(settings);</p>
            </div>
        )
    },
    {
        title: "Pione Portal",
        description: "Bridge, swap and manage assets on Pione. Your Pione journey starts here.",
        link: "/portal",
        icon: "mdi:portal",
        theme: {
            from: "from-purple-500/20",
            text: "text-purple-500"
        },
        graphic: (
            <div className="flex flex-col gap-2 w-3/4">
                <div className="h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 justify-between">
                    <div className="w-12 h-2 bg-white/20 rounded"></div>
                    <div className="w-4 h-4 bg-purple-500/40 rounded-full"></div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-purple-500/60 rounded-full"></div>
                </div>
                <div className="h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 justify-between">
                    <div className="w-12 h-2 bg-white/20 rounded"></div>
                    <div className="w-4 h-4 bg-white/10 rounded-full"></div>
                </div>
            </div>
        )
    },
    {
        title: "Pione Ecosystem",
        description: "Explore the hottest dApps, Solutions Providers, Enterprises and other Ecosystem Enablers in one place",
        link: "/ecosystem",
        icon: "mdi:hexagon-multiple",
        theme: {
            from: "from-orange-500/20",
            text: "text-orange-500"
        },
        graphic: (
            <div className="grid grid-cols-3 sm:grid-cols-4  gap-3 w-full pt-2">
                {[
                    { img: ecoWallet, label: "Pione Wallet" },
                    { img: ecoSwap, label: "Pione Swap" },
                    { img: ecoChain, label: "Pione Chain" },
                    { img: ecoDapp, label: "Pione Dapp" },
                    { img: ecoAi, label: "Pione AI" },
                    { img: ecoBot, label: "Pione Bot" },
                    { img: ecoSmart, label: "Pione Smart" },
                    { img: ecoScan, label: "Pione Scan" },

                ].map((item, i) => (
                    <div key={`eco-${i}`} className="flex flex-row items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-2 py-3 transition-all hover:bg-white/10 hover:border-white/20 group/logo">
                        <div className="relative w-7 h-7">
                            <Image src={item.img} alt={item.label} fill className="object-contain opacity-80 group-hover/logo:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[11px] text-white/60 whitespace-nowrap group-hover/logo:text-white/90 transition-colors">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
];
export const involvedItems = [
    {
        title: "Docs",
        titleKey: "community.involved.items.docs.title",
        description: "Learn about and start building on Pione with the help of our official documentation.",
        descriptionKey: "community.involved.items.docs.description",
        link: "https://pione.org/docs/about/welcome/",
        targetBlank: true,
        icon: "mdi:code-braces",
        type: "docs",
        graphic: (
            <div className="relative w-full h-[350px] flex items-center justify-center ">
                <Image
                    src={imgBanner2}
                    alt="Pione Docs"
                    fill
                    className="object-contain scale-110"
                />
            </div>
        )

    },

    {
        title: "Roadmap",
        titleKey: "community.involved.items.roadmap.title",
        description: "Follow our journey and explore the milestones on the Pione Chain official roadmap.",
        descriptionKey: "community.involved.items.roadmap.description",
        link: "/company/roadmap",
        icon: "material-symbols:map-outline",
        type: "roadmap",
        graphic: (
            <LoadingRadar />
        )
    }
];

export const ecosystemProjects = [
    { name: "Pione Wallet", img: ecoWallet, description: "Securely manage assets on Pione Chain", descriptionKey: "community.involved.ecosystem.projects.wallet" },
    { name: "Pione Swap", img: ecoSwap, description: "Exchange tokens with low fees and high speed", descriptionKey: "community.involved.ecosystem.projects.swap" },
    { name: "Pione Dream", img: ecoDream, description: "Intelligent solutions for blockchain data", descriptionKey: "ecosystem.card16.description" },
    { name: "Pione House", img: ecoHouse, description: "Real estate on blockchain", descriptionKey: "ecosystem.card2.description" },
    { name: "Pione Mart", img: ecoMart, description: "Decentralized marketplace", descriptionKey: "ecosystem.card5.description" },
    { name: "Pione Care", img: ecoCare, description: "Healthcare on blockchain", descriptionKey: "ecosystem.card8.description" },
];

