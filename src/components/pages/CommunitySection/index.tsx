"use client";

import { useTranslation } from "react-i18next";
import { CommunityBanner } from "./CommunityBanner";
import { SocialChannels } from "./SocialChannels";
import { TryPione } from "./TryPione";
import { GetInvolved } from "./GetInvolved";
import { EventSliderSection } from "./EventSliderSection";
import { CallToAction } from "./CallToAction";


export const CommunitySection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full">
            <div className="relative z-20 py-20 sm:py-40">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px]" />

                {/* Community Banner with Infinite Sliders */}
                <CommunityBanner />

                {/* Social Channels */}
                <SocialChannels />


                {/* Get Involved Section */}
                <GetInvolved />
                {/* Horizontal Event Slider */}
                <EventSliderSection />



            </div>
        </div>
    );
};
