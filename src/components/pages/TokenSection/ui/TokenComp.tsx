"use client";

import { Badge } from "@/components/ui/Badge";
import { tokenData } from "../helper";
import { HeadTitle } from "@/components/HeadTitle";
import dynamic from "next/dynamic";
const PieChartWithLogo = dynamic(() => import("@/components/ui/PieChartWithLogo"), { ssr: false });
import { useTranslation } from "react-i18next";
import { Grid } from "@/components/ui/Grid";

const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), { ssr: false });
const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), { ssr: false });
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false });

const RADIAN = Math.PI / 180;

export const TokenComp = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <HeadTitle
        title={t("tokenomic.title")}
        subTitle={t("tokenomic.subTitle")}
      />
      <div className="w-full flex flex-col gap-10 justify-center items-center mt-20">
        <PieChartWithLogo /> 
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 container">
          {tokenData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden flex flex-col  mb-4 p-4 bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-3xl shadow-lg transition 
      transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <Grid size={20} />

              {/* <div className={`w-5 h-12 ${item.color} rounded-lg mr-4`}></div> */}
              <Badge
                variant="secondary"
                className={`gap-1.5 rounded-full text-white px-3 w-fit text-sm font-semibold`}
                style={{
                  background: item?.color,
                }}
              >
                {item?.amount} PIO
              </Badge>
              <div className="flex mt-5 flex-col gap-3 max-w-xl">
                <h3 className="text-lg font-bold">{t(item.title)}</h3>
                <p className="text-sm text-accent">{t(item.description)}</p>
              </div>

              {/* <div className="text-right">
                <p className=" text-lg font-semibold ">PIO</p>
                <p className="text-sm text-accent">{item.amount}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="w-2/3 mx-auto">
  {tokenData.map((item, index) => (
    <div
      key={index}
      className="flex items-center mb-4 p-4 bg-gradient-card rounded-lg shadow-lg transition 
      transform hover:scale-105 hover:shadow-xl duration-300"
    >
      <div className={`w-5 h-12 ${item.color} rounded-lg mr-4`}></div>

      <div className="flex-1 max-w-xl">
        <h3 className="text-lg font-bold">{t(item.title)}</h3>
        <p className="text-sm text-accent">{t(item.description)}</p>
      </div>

      <div className="text-right">
        <p className=" text-lg font-semibold ">PIO</p>
        <p className="text-sm text-accent">{item.amount}</p>
      </div>
    </div>
  ))}
</div> */
}
