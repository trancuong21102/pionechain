"use client";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
// import { metaverse } from "../../helper";
import { useTranslation } from "react-i18next";
import { KeyFeaturesSwapProps } from "@/yummy_data";
import ClipPathImage1 from "@/components/ClipPathImage/ClipPath1";
// import ClipPathImage7 from "@/components/ClipPathImage/ClipPath7";
import ClipPathImage5 from "@/components/ClipPathImage/ClipPath5";
import ClipPathImage4 from "@/components/ClipPathImage/ClipPath4";
import ClipPathImage6 from "@/components/ClipPathImage/ClipPath6";
import ClipPathImage8 from "@/components/ClipPathImage/ClipPath8";
// import Image from "next/image";

type MetaProps = {
  data: KeyFeaturesSwapProps[];
};

export const MetaContent = ({ data }: MetaProps) => {
  const { t } = useTranslation();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main className="container" ref={container}>
      <section className="text-white w-full">
        {data.map((project, i) => {
          const targetScale = 1 - (data.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              id={project?.id}
              title={t(project?.title)}
              description={t(project?.description)}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  id: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  id,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const renderClipPathById = (id: number) => {
    switch (id) {
      case 1:
        return <ClipPathImage1 />;
      case 2:
        return <ClipPathImage4 />;
      case 3:
        return <ClipPathImage8 />;
      case 4:
        return <ClipPathImage5 />;
      case 5:
        return <ClipPathImage6 />;
      default:
        return <ClipPathImage1 />;
    }
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center flex-col sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`
          flex flex-col relative -top-[25%] h-[350px] w-full lg:w-[70%]
          rounded-md p-10 origin-top
          bg-zinc-950/10 backdrop-blur-lg border border-white/20 shadow-xl
        `}
      >
        <h2 className="text-2xl text-center font-semibold text-white">
          {title}
        </h2>

        <div className="flex items-center justify-between w-full h-full mt-5 gap-10">
          <div className="lg:w-[40%] w-full relative text-white">
            <p className="text-base">{description}</p>
          </div>
          <div className="relative w-[40%] sm:flex hidden h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              {/* <Image fill src={"url"} alt="image" className="object-cover" /> */}

              <div className="relative h-full w-full bg-[#29140f]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] "></div>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(150%_80%_at_25%_75%,rgba(244,118,34,0.5)_40%,rgba(85,17,17,1)_100%)]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
