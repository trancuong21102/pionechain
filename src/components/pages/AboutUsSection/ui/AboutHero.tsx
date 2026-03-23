"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";
import event3 from "@/assets/event/event3.jpg";
import Image from "next/image";

export const AboutHero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative min-h-[70vh] flex flex-col items-start justify-center pt-20 overflow-hidden">
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={event3}
                    alt="Background"
                    fill
                    className="object-cover opacity-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
            </div>


            <div className="container relative z-10 px-4 text-left max-w-5xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                    {t("aboutPage.hero.title")}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-orange-500 font-medium mb-8"
                >
                    {t("aboutPage.hero.subtitle")}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg text-gray-400 leading-relaxed max-w-3xl"
                >
                    {t("aboutPage.hero.description")}
                </motion.p>
            </div>
        </div>
    );
};
