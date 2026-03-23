import IconifyIcon from "@/components/Iconify";
import DateFormat from "@/lib/format";
import { BASE_URL_IMAGE } from "@/store/api";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Feature = {
  image_url: string;
  title: string;
  summary: string;
  type: string;
  created_at: string;
  id: number;
  slug: string;
};

export const CardBlog = ({ feature }: { feature: Feature }) => {
  const { t } = useTranslation();
  return (
    <Link href={`${feature?.slug}`}>
      <div className="flex flex-col overflow-clip rounded-xl bg-[#121212] group cursor-pointer h-full">
        <div className="">
          <img
            src={BASE_URL_IMAGE + "/" + feature?.image_url}
            alt={feature?.title}
            className="aspect-[16/9] h-full w-full object-cover object-center group-hover:scale-[105%] duration-400 transition-all"
          />
        </div>
        <div className="sm:p-5 p-4 lg:p-8 flex flex-col justify-between gap-7 h-full w-full">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold md:text-2xl text-white line-clamp-3">
                {feature?.title}
              </h3>
            </div>
            <p className="text-muted-foreground lg:text-lg line-clamp-4">
              {feature?.summary}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[#167bff] bg-[#125cbd3d] text-sm font-semibold">
              <IconifyIcon icon="lets-icons:date-fill" fontSize={20} />
              <span>{DateFormat(feature?.created_at)}</span>
            </div>
            <p className="text-white font-semibold flex items-center gap-2">
              <span>{t("news.ReadMore")}</span>
              <IconifyIcon
                icon="iconamoon:arrow-right-1-bold"
                fontSize={20}
                className="group-hover:translate-x-1 duration-400 transition-all"
              />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
