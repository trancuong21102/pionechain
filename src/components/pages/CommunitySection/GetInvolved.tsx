"use client";

import Image from "next/image";
import Link from "next/link";
import IconifyIcon from "@/components/Iconify";
import { involvedItems, ecosystemProjects } from "./constants";
import { Grid } from "@/components/ui/Grid";
import { useTranslation } from "react-i18next";


export const GetInvolved = () => {
    const { t } = useTranslation();

    return (
        <div className="relative py-20 bg-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container relative z-10">
                <div className="flex flex-col gap-2 mb-10 text-center max-w-2xl mx-auto">
                    <h2 className="text-[40px] font-bold text-white">
                        {t("community.involved.title")}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {t("community.involved.subtitle")}
                    </p>
                </div>

                {/* Top Grid: Governance, Forum, Grants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {involvedItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col items-center justify-between rounded-[32px] border border-white/10 bg-[#0A0A0A] p-10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#111111]"
                        >
                            <Grid size={20} />
                            {/* Inner Shadow / Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                            <div className="relative z-10 text-left w-full">
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-4xl font-bold text-white mb-4 transition-colors">
                                        {t(item.titleKey || "community.involved.items.docs.title")}
                                    </h3>
                                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                        {t(item.descriptionKey || "community.involved.items.docs.description")}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 w-full flex justify-center items-center">
                                {item.graphic}
                            </div>

                            <Link
                                href={item.link}
                                className="absolute inset-0 z-20"
                                aria-label={item.title}
                                {...(item.targetBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Pione Ecosystem */}
                <div className="relative group rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden p-8 md:p-12 transition-all duration-500 hover:border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none"></div>
                    <Grid size={20} />
                    {/* Background glow for Ecosystem */}
                    <div className="absolute right-0 bottom-0 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/3"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="md:w-full flex flex-col items-center md:items-start text-center md:text-left gap-6">
                            <div className="space-y-4">
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    {t("community.involved.ecosystem.title")}
                                </h3>
                                <p className="text-gray-400 text-lg mb-8 max-w-md">
                                    {t("community.involved.ecosystem.subtitle")}
                                </p>
                            </div>

                            <a
                                href="/ecosystem"
                                className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
                            >
                                {t("community.involved.ecosystem.button")}
                                <IconifyIcon icon="mdi:arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {ecosystemProjects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:border-white/10 group/project"
                                >
                                    <div className="relative w-12 h-12 flex-shrink-0">
                                        <Image
                                            src={project.img}
                                            alt={project.name}
                                            fill
                                            className="object-contain opacity-80 group-hover/project:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm">{project.name}</div>
                                        <div className="text-[11px] text-white/50 line-clamp-1">{t(project.descriptionKey || "community.involved.ecosystem.projects.wallet")}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
