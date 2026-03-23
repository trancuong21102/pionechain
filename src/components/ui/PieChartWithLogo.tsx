"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { valueFormatter } from "./webUsageStats";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import DonutChart from "./Donutchart";

export default function PieChartWithLogo() {
  const { t } = useTranslation();

  const desktopOS = [
    {
      name: t("tokenomic.item1.title"),
      value: 10,
      color: "#dc2626",
    },
    {
      name: t("tokenomic.item2.title"),
      value: 5,
      color: "#ef4444",
    },
    {
      name: t("tokenomic.item3.title"),
      value: 25,
      color: "#ea580c",
    },
    {
      name: t("tokenomic.item4.title"),
      value: 10,
      color: "#52a9ff",
    },
    {
      name: t("tokenomic.item5.title"),
      value: 30,
      color: "#0ac5b2",
    },
    {
      name: t("tokenomic.item6.title"),
      value: 5,
      color: "#ff0058",
    },
    {
      name: t("tokenomic.item7.title"),
      value: 5,
      color: "#ca8a04",
    },
    {
      name: t("tokenomic.item8.title"),
      value: 10,
      color: "#eab308",
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-full mb-4 donut-chart-wrapper">
      <DonutChart data={desktopOS} width="800px" height="600px" />
      <style jsx>{`
        .donut-chart-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .donut-chart-wrapper {
            max-width: 100%;
            height: 500px; /* Increased height on mobile for larger segments */
          }
          .donut-chart-container {
            height: 500px !important; /* Ensure chart height matches */
          }
        }
      `}</style>
    </div>
  );
}
