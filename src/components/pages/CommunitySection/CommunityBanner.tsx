"use client";

import Image from "next/image";
import Link from "next/link";
import IconifyIcon from "@/components/Iconify";
import { InfiniteSlider } from "./infinitySlider";
import { bannerBg, eventsS1, eventsS2, eventsS3 } from "./constants";
import { useTranslation } from "react-i18next";

export const CommunityBanner = () => {
    const { t } = useTranslation();
    return (
        <div className="relative mt-16 container mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] backdrop-blur-xl p-8 sm:p-14 ">
            <Image src={bannerBg} alt="Banner background" fill className="object-cover opacity-60" />
            <div className="relative z-10 flex gap-4 justify-between items-center h-auto sm:h-[370px]">
                {/* Center Content */}
                <div className="flex-1 max-w-xl text-center sm:text-left">
                    <p className="text-[36px] sm:text-[50px] py-1 uppercase font-semibold leading-tight ">
                        {t("community.banner.title")}
                    </p>
                    <p className="text-gray-300 text-lg ">
                        {t("community.banner.subtitle")}
                    </p>
                    <div className="flex md:flex-row flex-col gap-4 pt-4">
                        <Link
                            href="https://x.com/pione_chain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="backdrop-blur-[2px] flex items-center justify-center gap-2 bg-gradient-to-r from-[#E74041] via-[#FA5805] to-[#C09595] text-white rounded-full py-3 px-8 text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/50"
                        >
                            <IconifyIcon icon="fa6-brands:x-twitter" fontSize={22} />
                            <span>{t("community.social.channels.twitter")}</span>
                        </Link>
                        <Link
                            href="https://t.me/pionechain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="backdrop-blur-[1px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full py-3 px-8 text-sm font-semibold transition-all duration-300"
                        >
                            <IconifyIcon icon="ic:baseline-telegram" fontSize={22} />
                            <span>{t("community.banner.joinTelegram")}</span>
                        </Link>
                    </div>
                </div>

                <div className=" items-stretch gap-4 h-full xl:flex hidden">
                    <InfiniteSlider direction='vertical' duration={70}>
                        {eventsS1.map((img, idx) => (
                            <Image
                                key={`s1-${idx}`}
                                src={img}
                                alt={`Event ${idx + 1}`}
                                width={180}
                                height={180}
                                quality={100}
                                className=' w-[180px] rounded-[4px] object-cover'
                            />
                        ))}
                    </InfiniteSlider>

                    <InfiniteSlider direction='vertical' reverse duration={70}>
                        {eventsS2.map((img, idx) => (
                            <Image
                                key={`s2-${idx}`}
                                src={img}
                                alt={`Event ${idx + 5}`}
                                width={180}
                                height={180}
                                quality={100}
                                className=' w-[180px] rounded-[4px] object-cover'
                            />
                        ))}
                    </InfiniteSlider>

                    <InfiniteSlider direction='vertical' duration={70}>
                        {eventsS3.map((img, idx) => (
                            <Image
                                key={`s3-${idx}`}
                                src={img}
                                alt={`Event ${idx + 9}`}
                                width={180}
                                height={180}
                                quality={100}
                                className=' w-[180px] rounded-[4px] object-cover'
                            />
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </div>
    );
};
