"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { features } from "../../helper";
import imgTool from "@/assets/images/imgTool.png"; 
import { useTranslation } from "react-i18next";
import { BackgroundBeams } from "@/components/ui/background-beams";
export const Tool = () => {
  const { t } = useTranslation();

  return (
    <div className="relative py-14 lg:py-20">
      <BackgroundBeams />
      <div className="container  relative">
        <div className="flex flex-col gap-3 justify-center items-center">
          <span className="inline-block text-base border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
            {t("home.buildingSection.subTitle")}
          </span>
          <h1 className="text-3xl md:text-5xl py-1  font-semibold leading-normal  text-center ">
            {t("home.buildingSection.title")}
          </h1>
        </div>
        <CardContainer className="inter-var lg:max-w-[80%]">
          <CardBody className="relative group/card  shadow-[0_8px_32px_rgba(255,255,255,0.1)] flex lg:flex-row flex-col gap-10 items-center justify-between border border-white/10 bg-white/5 backdrop-blur-md sm:w-[30rem] h-auto rounded-xl p-7 sm:p-10 !w-full">
            <CardItem className="space-y-8 lg:w-1/2" translateZ="50">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    style={{ height: "auto" }}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold uppercase">
                      {t(feature.title)}
                    </h3>
                    <p className="text-gray-300 mt-2">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              ))}
            </CardItem>

            <CardItem translateZ="50">
              <Image
                alt="img"
                src={imgTool}
                height={804}
                width={852}
                style={{ height: "auto" }}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};
