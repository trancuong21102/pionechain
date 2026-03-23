"use client";
import React from "react";
import { AboutHero } from "./ui/AboutHero";
import { CoreValues } from "./ui/CoreValues";
import { Future } from "../HomeSection/ui/Future";
import { InTheNews } from "./ui/InTheNews";

const AboutUsSection = () => {
    return (
        <div className="relative w-full bg-zinc-950 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px]"></div>

            <AboutHero />
            <CoreValues />
            <Future />
            <InTheNews />
        </div>
    );
};

export default AboutUsSection;
