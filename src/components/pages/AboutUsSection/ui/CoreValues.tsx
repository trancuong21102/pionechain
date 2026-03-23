"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/canvas-reveal-effect";
import ClipPathImage1 from "../../../ClipPathImage/ClipPath1";
import ClipPathImage2 from "../../../ClipPathImage/ClipPath2";
import ClipPathImage3 from "../../../ClipPathImage/ClipPath3";
import ClipPathImage4 from "../../../ClipPathImage/ClipPath4";

export const CoreValues = () => {
    const { t } = useTranslation();

    const renderClipPathById = (id: number) => {
        switch (id) {
            case 1:
                return <ClipPathImage1 />;
            case 2:
                return <ClipPathImage2 />;
            case 3:
                return <ClipPathImage3 />;
            case 4:
                return <ClipPathImage4 />;
            default:
                return <ClipPathImage1 />;
        }
    };

    const coreValues = [
        {
            id: 1,
            titleKey: "aboutPage.coreValues.values.innovation.title",
            contentKey: "aboutPage.coreValues.values.innovation.description",
        },
        {
            id: 2,
            titleKey: "aboutPage.coreValues.values.transparency.title",
            contentKey: "aboutPage.coreValues.values.transparency.description",
        },
        {
            id: 3,
            titleKey: "aboutPage.coreValues.values.security.title",
            contentKey: "aboutPage.coreValues.values.security.description",
        },
        {
            id: 4,
            titleKey: "aboutPage.coreValues.values.impact.title",
            contentKey: "aboutPage.coreValues.values.impact.description",
        },
    ];

    return (
        <div className="relative z-10 py-20">
            <div className="container px-4">
                <div className="text-left mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("aboutPage.coreValues.title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {coreValues.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6">
                                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50  " />
                                <div className="flex flex-col items-center justify-between gap-10">
                                    <div className="w-full h-[120px] flex items-center justify-center">
                                        {renderClipPathById(item?.id)}
                                    </div>
                                    <div className="flex flex-col justify-between gap-5">
                                        <h1 className="text-xl sm:text-2xl font-semibold text-white z-10 items-center">
                                            {t(item?.titleKey)}
                                        </h1>
                                        <p className="text-base text-gray-300 z-10">
                                            {t(item?.contentKey)}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
