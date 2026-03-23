"use client";

import Link from "next/link";
import { tryPioneItems } from "./constants";

export const TryPione = () => {
    return (
        <div className="container">
            <div className="flex flex-col gap-2 mb-10">
                <h2 className="text-[40px] font-bold text-white">
                    Try Pione
                </h2>
                <p className="text-gray-400 text-lg">Make your voice heard—contribute to Pione Chain</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tryPioneItems.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] hover:bg-[#252525] p-8 transition-all duration-300 hover:border-white/20 flex flex-col h-full"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-base mb-8">
                            {item.description}
                        </p>
                        <div className="mt-auto pt-6 flex justify-center w-full">
                            {item.graphic}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
