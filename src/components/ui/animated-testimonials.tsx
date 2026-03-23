"use client";

import { TestimonialsProps } from "@/yummy_data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: TestimonialsProps[];
  autoplay?: boolean;
}) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleNext = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const imageVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className=" w-full py-10 font-sans antialiased ">
      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl ">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute h-full w-full  "
            >
              <div className=" w-full h-full flex justify-center items-center lg:items-start overflow-hidden rounded-3xl">
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-auto w-full object-cover object-center rounded-3xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between ">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white pb-2">
              {t(testimonials[active].name)}
            </h3>

            <div className="h-[300px] sm:h-[200px] lg:h-[380px] overflow-hidden overflow-y-scroll relative">
              <motion.p className="mt-2 text-white text-justify text-sm sm:text-base font-normal max-w-3xl">
                {testimonials[active].quote.map((sentence, sentenceIndex) => (
                  <React.Fragment key={sentenceIndex}>
                    {sentence.split(" ").map((word, wordIndex) => (
                      <motion.span
                        key={`${sentenceIndex}-${wordIndex}`}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.1,
                          ease: "easeInOut",
                          // delay: 0.02 * (sentenceIndex * 100 + wordIndex), // Đảm bảo delay không trùng lặp
                        }}
                        className="inline-block"
                      >
                        {t(word)}&nbsp;
                      </motion.span>
                    ))}
                    <br /> {/* Thêm dòng mới sau mỗi câu nếu cần */}
                  </React.Fragment>
                ))}
              </motion.p>
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
