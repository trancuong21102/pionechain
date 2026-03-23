"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getBlogList, BASE_URL_IMAGE } from "@/store/api";
import DateFormat from "@/lib/format";
import IconifyIcon from "@/components/Iconify";
import Link from "next/link";

const NewsCard = ({ item }: { item: any }) => {
    const { t } = useTranslation();
    return (
        <Link href={`/news/${item.slug}`} className="flex flex-col gap-5 group cursor-pointer h-full">
            <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-zinc-900 border border-white/5">
                <img
                    src={BASE_URL_IMAGE + "/" + item.banner}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white line-clamp-2 leading-snug group-hover:text-[#167bff] transition-colors">
                    {item.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                    {item.brief}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[#167bff] bg-[#125cbd3d] text-sm font-semibold">
                        <IconifyIcon icon="lets-icons:date-fill" fontSize={20} />
                        <span>{DateFormat(item?.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#167bff] text-sm font-bold">
                        <span>{t("news.ReadMore") || "Read More"}</span>
                        <IconifyIcon icon="iconamoon:arrow-right-1-bold" fontSize={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export const InTheNews = () => {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { data, isLoading } = useQuery({
        queryKey: ["blogList", { limit: 10, page: 1 }],
        queryFn: () => getBlogList({ limit: 10, page: 1, categorySlug: "events-activities" }),
        enabled: mounted,
    });

    const newsList = data?.data?.rows || [];

    if (!mounted) return null;

    return (
        <section className="relative z-10 py-24">
            <div className="container px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t("news.title") || "In the news"}
                    </h2>
                    <div className="flex gap-3">
                        <button className="prev-news w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all disabled:opacity-30">
                            <IconifyIcon icon="lucide:arrow-left" fontSize={20} />
                        </button>
                        <button className="next-news w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all disabled:opacity-30">
                            <IconifyIcon icon="lucide:arrow-right" fontSize={20} />
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="animate-pulse flex flex-col gap-4">
                                <div className="aspect-[16/10] bg-zinc-900 rounded-2xl"></div>
                                <div className="h-4 bg-zinc-900 rounded w-1/2"></div>
                                <div className="h-8 bg-zinc-900 rounded"></div>
                                <div className="h-12 bg-zinc-900 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".prev-news",
                            nextEl: ".next-news",
                        }}
                        spaceBetween={32}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="!overflow-visible"
                    >
                        {newsList.map((item: any) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <NewsCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};
