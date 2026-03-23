"use client";

import Link from "next/link";
import IconifyIcon from "@/components/Iconify";
import { socialChannels } from "./constants";
import { useTranslation } from "react-i18next";

export const SocialChannels = () => {
    const { t } = useTranslation();
    return (
        <div className="relative py-32">
            <div className="flex flex-col gap-5 container relative">
                <div className="flex flex-col gap-2 mb-10">
                    <h2 className="text-[40px] font-bold text-white">
                        {t("community.social.title")}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {t("community.social.subtitle")}
                    </p>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                    {socialChannels.map((channel, index) => (
                        <Link
                            key={index}
                            href={channel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                        >
                            <div className="text-white rounded-2xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-white/25 hover:shadow-white/5 h-full flex flex-col p-5">
                                {/* Layer effects */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                                </div>
                                {/* Content */}
                                <div className="relative z-10 flex items-start gap-4 w-full h-full">
                                    <div className="p-4 rounded-xl backdrop-blur-lg w-16 h-16 flex items-center justify-center border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                                        <IconifyIcon
                                            icon={channel.icon}
                                            className={`text-3xl text-white transition-colors duration-300 group-hover:${channel.hoverColor}`}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between h-full">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                                {channel.name}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">
                                                {t(channel.descriptionKey || "community.social.channels.telegram")}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-r from-[#E74041] via-[#FA5805] to-[#C09595] bg-clip-text text-transparent font-semibold">
                                                {channel.members}
                                            </span>
                                            <span className="text-gray-500 text-sm">{t("community.social.members")}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* External link icon */}
                                <div className="absolute top-4 right-4 z-10">
                                    <IconifyIcon
                                        icon="heroicons:arrow-top-right-on-square"
                                        className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300"
                                        fontSize={20}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
