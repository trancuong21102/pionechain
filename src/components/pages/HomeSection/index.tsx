"use client";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
const Earth = dynamic(() => import("@/components/ui/globe"), { ssr: false });
const SparklesCore = dynamic(
  () => import("@/components/ui/sparklesCore").then((mod) => mod.SparklesCore),
  { ssr: false },
);
const Possible = dynamic(() => import("./ui/Possible"), { ssr: false });
const Future = dynamic(() => import("./ui/Future").then((mod) => mod.Future), {
  ssr: false,
});
const Empowering = dynamic(
  () => import("./ui/Empowering").then((mod) => mod.Empowering),
  { ssr: false },
);
const Tool = dynamic(() => import("./ui/Tool").then((mod) => mod.Tool), {
  ssr: false,
});
const MetaVerse = dynamic(
  () => import("./ui/Test").then((mod) => mod.MetaVerse),
  { ssr: false },
);

export default function HomeSection() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full text-white">
      {/* 🎁 Modal Giới thiệu Ecosystem Reward (Show once) */}
      {/* <DialogEcosystemReward /> */}

      <div className="h-full relative py-14 lg:py-20 overflow-hidden">
        <article className="text-center relative z-10 pt-10 flex flex-col gap-2 justify-center items-center">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto font-semibold rounded-full border-[#ff6a00] bg-[#2e0d00]">
            {t("home.banner.welcome")}
          </span>
          <h1 className="text-5xl sm:text-7xl font-semibold bg-gradient-to-r bg-clip-text from-[#E74041] via-[#FA5805] to-[#C09595] text-transparent leading-[100%] tracking-tighter">
            PIONE CHAIN
          </h1>
          <p className="sm:text-lg text-sm container font-medium max-w-2xl">
            {t("home.banner.subTitle")}
          </p>
          <Earth />
        </article>

        <div
          className="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] 
    before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#FFA07A,transparent_90%)] before:opacity-30 
    after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] 
    after:bg-transparent"
        >
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={400}
            className="w-full h-full"
            particleColor="#FFA500"
          />
        </div>
      </div>

      <div className="w-full relative flex flex-col">
        <Possible />
        <Future />
        <Empowering />
        <Tool />
        <MetaVerse />
      </div>
    </div>
  );
}
