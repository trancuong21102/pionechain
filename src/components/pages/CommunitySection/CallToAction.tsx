"use client";

import Link from "next/link";
import IconifyIcon from "@/components/Iconify";

export const CallToAction = () => {
    return (
        <div className="mt-20 container relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] backdrop-blur-xl overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E74041] via-[#FA5805] to-[#C09595] bg-clip-text text-transparent mb-4">
                    Ready to Get Involved?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of developers, investors, and enthusiasts building the
                    future of blockchain and Real-World Asset tokenization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="https://t.me/pionechain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="backdrop-blur-[2px] flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#ea580c]/90 text-white rounded-full py-3 px-10 text-lg font-semibold transition-all duration-300"
                    >
                        <span>Join Telegram</span>
                        <IconifyIcon icon="ic:baseline-telegram" fontSize={25} />
                    </Link>
                    <Link
                        href="https://discord.gg/pionechain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="backdrop-blur-[2px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full py-3 px-10 text-lg font-semibold transition-all duration-300"
                    >
                        <span>Join Discord</span>
                        <IconifyIcon icon="ic:baseline-discord" fontSize={25} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
