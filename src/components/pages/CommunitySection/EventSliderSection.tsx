"use client";

import Image from "next/image";
import { InfiniteSlider } from "./infinitySlider";
import { eventsS1, eventsS2, eventsS3 } from "./constants";
import { useTranslation } from "react-i18next";

export const EventSliderSection = () => {
    const { t } = useTranslation();
    // Combine images into two balanced rows
    const row1 = [...eventsS1, ...eventsS2.slice(0, 2)];
    const row2 = [...eventsS3, ...eventsS2.slice(2, 4)];

    return (
        <div className="relative py-20 overflow-hidden">
            <div className="container relative z-20 mb-16">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[40px] font-bold text-white">
                        {t("community.events.title")}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {t("community.events.subtitle")}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {/* First Row */}
                <InfiniteSlider duration={70} gap={24} className="will-change-transform">
                    {row1.map((img, idx) => (
                        <div key={`row1-${idx}`} className="relative w-[300px] h-[200px] rounded-2xl overflow-hidden border border-white/10 will-change-transform">
                            <Image
                                src={img}
                                alt={`Event Row 1 ${idx}`}
                                fill
                                quality={50}
                                sizes="300px"
                                className="object-cover transition-transform duration-500 "
                            />
                        </div>
                    ))}
                </InfiniteSlider>

                {/* Second Row */}
                <InfiniteSlider duration={60} gap={24} reverse className="will-change-transform">
                    {row2.map((img, idx) => (
                        <div key={`row2-${idx}`} className="relative w-[300px] h-[200px] rounded-2xl overflow-hidden border border-white/10 will-change-transform">
                            <Image
                                src={img}
                                alt={`Event Row 2 ${idx}`}
                                fill
                                quality={50}
                                sizes="300px"
                                className="object-cover transition-transform duration-500 "
                            />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>

            {/* Soft edge masks */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};
