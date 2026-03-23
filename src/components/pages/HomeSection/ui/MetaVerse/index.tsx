import Image from "next/image";
import { metaverse } from "../../helper";
import metaVerse from "@/assets/svg/imgMetaverse.svg";
import { useTranslation } from "react-i18next";
export const MetaVerse = () => {
  const { t } = useTranslation();
  return (
    <div className="relative py-10">
      <div className="xl:flex hidden absolute top-0 left-0">
        <Image src={metaVerse} alt="img" width={500} height={500} />
      </div>
      <div className="container flex lg:items-center gap-10 lg:flex-row flex-col justify-between">
        <div className="flex flex-col z-10">
          <p className="text-5xl font-semibold text-center">
            {t("home.metaverseSection.title")}{" "}
          </p>
          <p className="text-3xl font-thin text-center">
            {" "}
            {t("home.metaverseSection.subTitle")}{" "}
          </p>
        </div>
        <div data-aos="fade-up" className="lg:w-1/2 flex flex-col w-full gap-5">
          {metaverse?.map((item) => {
            return (
              <div key={item?.id} className="flex flex-col gap-2">
                <p className="text-xl font-semibold">{t(item?.title)}</p>
                <p className="text-base text-accent">{t(item?.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
