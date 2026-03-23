/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { HeadTitle } from "@/components/HeadTitle";
import { useTranslation } from "react-i18next";
// import { partnersData } from "./helper";
import PartnerHighlightCard from "./ui/highlight-card";
import Image from "next/image";
import Link from "next/link";
import IconifyIcon from "@/components/Iconify";
import { listPartnerRow } from "../types/type";
import { BASE_URL_API, fetchListPartner } from "@/store/api";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const PartnerSection = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(99);

  // State để lưu dữ liệu, trạng thái loading và lỗi
  const [partners, setPartners] = useState<listPartnerRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: dataPartners } = useQuery({
    queryKey: ["list_partner", page, limit],
    queryFn: () => fetchListPartner({ page, limit }),
  });
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Gọi hàm fetch
        const response = await fetchListPartner({ page, limit });

        if (response?.status) {
          setPartners(response?.data?.rows);
        } else {
          throw new Error(response?.message || "Failed to fetch partners");
        }
      } catch (err: any) {
        setError(err?.message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [page, limit]);

  return (
    <section className="relative w-full ">
      {/* Grid background */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
        bg-[size:50px_45px]"
      ></div>

      <div className="container relative flex flex-col items-center justify-center gap-20 py-40 mx-auto">
        <div className="flex flex-col items-center justify-center gap-10">
          <HeadTitle
            title={t("partner.title")}
            subTitle={t("partner.description")}
          />
          <Link
            href="/contact-partner"
            className="backdrop-blur-[2px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 group text-white border border-white/10 rounded-full py-3 px-10 text-lg font-semibold transition-colors"
          >
            <span>{t("partner.Contact Partner")}</span>
            <IconifyIcon
              className="transition-all duration-300 group-hover:translate-x-1"
              icon="uil:arrow-right"
              fontSize={25}
            />
          </Link>
        </div>
        {isLoading ? (
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-black/20 rounded-2xl"
                >
                  <Skeleton
                    height={462}
                    width={340}
                    variant="rounded"
                    className="bg-gray-700"
                  />
                </div>
              ))}
          </div>
        ) : (
          <>
            <div className="grid  gap-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {dataPartners?.data?.rows?.map((partner: any) => (
                <PartnerHighlightCard
                  key={partner?.id}
                  title={partner?.name}
                  description={[partner?.description]}
                  // fields={partner?.field_name}
                  icon={
                    <Image
                      src={`${BASE_URL_API}api/v1/common/image/${partner?.logo_url}`}
                      alt={partner?.name}
                      width={400}
                      height={400}
                    />
                  }
                  twitter={partner?.twitter_url}
                  facebook={partner?.facebook_url}
                  telegram={partner?.telegram_url}
                  youtube={partner?.youtube_url}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
