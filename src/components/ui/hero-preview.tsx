"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image?: string;
  youtubeId?: string;
};

// ---------------------------
// CardSlide Component
// ---------------------------
export const CardSlide = ({
  items,
  offset = 22,
  scaleFactor = 0.06,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  const [dynamicOffset, setDynamicOffset] = useState(offset);
  const [dynamicScale, setDynamicScale] = useState(scaleFactor);
  const [cardSize, setCardSize] = useState({ height: "26rem", width: "22rem" });

  // Responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDynamicOffset(10);
        setDynamicScale(0.04);
        setCardSize({ height: "27rem", width: "20rem" });
      } else if (window.innerWidth < 1024) {
        setDynamicOffset(14);
        setDynamicScale(0.05);
        setCardSize({ height: "30rem", width: "28rem" });
      } else {
        setDynamicOffset(offset);
        setDynamicScale(scaleFactor);
        setCardSize({ height: "32rem", width: "32rem" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offset, scaleFactor]);

  // Sync translations when language changes (items prop updates)
  useEffect(() => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        const updatedItem = items.find((item) => item.id === card.id);
        return updatedItem
          ? { ...card, name: updatedItem.name, content: updatedItem.content, youtubeId: updatedItem.youtubeId }
          : card;
      })
    );
  }, [items]);

  const nextCard = () => {
    setCards((prev) => {
      const arr = [...prev];
      arr.unshift(arr.pop()!);
      return arr;
    });
  };

  const prevCard = () => {
    setCards((prev) => {
      const arr = [...prev];
      arr.push(arr.shift()!);
      return arr;
    });
  };

  return (
    <div
      className="relative flex justify-center"
      style={{
        height: `calc(${cardSize.height} + ${cards.length * dynamicOffset}px)`,
        width: cardSize.width,
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-neutral-900 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-white/[0.08] flex flex-col justify-center text-left overflow-hidden"
          style={{
            transformOrigin: "top center",
            height: cardSize.height,
            width: cardSize.width,
          }}
          animate={{
            top: index * -dynamicOffset,
            scale: 1 - index * dynamicScale,
            zIndex: cards.length - index,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="font-semibold text-lg sm:text-xl md:text-2xl text-neutral-100">
              {card.name}
            </div>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {card.content}
            </div>

            {/* Phần Media (Hình ảnh / Video) */}
            <div className="mt-3 relative w-full h-40 sm:h-48 md:h-56 rounded-lg border border-neutral-800 overflow-hidden shadow-md">
              {card.youtubeId ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${card.youtubeId}?rel=0`}
                  title={card.name}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Các nút điều hướng */}
      <div className="absolute -bottom-8 flex gap-4 z-50">
        <button
          onClick={prevCard}
          className="p-3 rounded-full bg-neutral-800 text-white hover:bg-[#FA5805] transition shadow-lg"
          aria-label="Thẻ trước"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextCard}
          className="p-3 rounded-full bg-neutral-800 text-white hover:bg-[#FA5805] transition shadow-lg"
          aria-label="Thẻ tiếp theo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ---------------------------
// HeroPreviewWalls Component
// ---------------------------
export function HeroPreviewWalls() {
  const { t, i18n } = useTranslation();
  const isVi = i18n.language === "vi";

  const CARDS = [
    {
      id: 0,
      name: t("home.projectSection.cards.card0.title"),
      designation: "",
      content: (
        <p>
          <Trans
            i18nKey="home.projectSection.cards.card0.content"
            components={{
              1: <span className="font-semibold text-[#FA5805]" />,
              2: <span className="font-semibold text-[#FA5805]" />
            }}
          />
        </p>
      ),
      youtubeId: isVi ? "_jkCvlap54o" : "HpGbmCUHmHE",
    },
    {
      id: 1,
      name: t("home.projectSection.cards.card1.title"),
      designation: "",
      content: (
        <p>
          <Trans
            i18nKey="home.projectSection.cards.card1.content"
            components={{
              1: <span className="font-semibold text-[#FA5805]" />
            }}
          />
        </p>
      ),
      youtubeId: "dULILGBWaY0",
    },
    {
      id: 2,
      name: t("home.projectSection.cards.card2.title"),
      designation: "",
      content: (
        <p>
          <Trans
            i18nKey="home.projectSection.cards.card2.content"
            components={{
              1: <span className="font-semibold text-[#FA5805]" />
            }}
          />
        </p>
      ),
      youtubeId:isVi ? "ZvkftNKa1W8" : "xTjsega-zEU",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-transparent text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto text-left px-4 sm:px-6">
        <div className="inline-block mb-4">
          <span className="inline-block text-base text-center border p-1 px-3 w-fit rounded-full border-[#ff6a00] bg-[#2e0d00]">
             {t("home.projectSection.title")}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
           {t("home.projectSection.subTitle")}
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mb-8">
           {t("home.projectSection.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-20">
          <a
            href="https://pionetrace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FA5805] text-white px-6 py-3 text-sm font-semibold hover:bg-[#E74041] transition inline-block text-center"
          >
             {t("home.projectSection.button1")}
          </a>
          <a
            href="https://explorer.pionetrace.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-600 px-6 py-3 text-sm font-semibold hover:bg-neutral-800 transition inline-block text-center"
          >
             {t("home.projectSection.button2")}
          </a>
        </div>
      </div>

      {/* Hình nền */}
      <div className="relative flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6">
        <div className="w-full relative z-0 sm:block hidden">
          <img
            src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/abstract-glass-walls.jpg"
            alt="Hình nền"
            className="rounded-2xl shadow-xl w-full h-48 sm:h-auto object-cover border-8 border-neutral-800"
          />
        </div>

        {/* Ngăn xếp thẻ (Cards) */}
        <div className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-16 md:-bottom-9 flex justify-center w-full z-10">
          <CardSlide items={CARDS} />
        </div>
      </div>
    </section>
  );
}
