"use client";

import { HeadTitle } from "@/components/HeadTitle";
import TimeLineCustom from "@/mui/TimeLineComp";
import { useTranslation } from "react-i18next";

export const RoadmapComp = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadTitle title={t("roadmap.title")} subTitle={t("roadmap.subTitle")} />
      <div className="w-full mt-32">
        <TimeLineCustom />
      </div>
    </>
  );
};
