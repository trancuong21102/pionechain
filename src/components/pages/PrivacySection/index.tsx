"use client";

import { HeadTitle } from "@/components/HeadTitle";
import { useTranslation } from "react-i18next";

export const PrivacySection = () => {
  const { t } = useTranslation();
  return (
    <div className="relative  w-full bg-[url('/assets/images/bgSection3.png')] bg-no-repeat bg-cover bg-center">
      <div className="container py-40">
        <HeadTitle title="Privacy Policy" subTitle="" />
        <div className="mt-10">
          <p>{t("privacy.des1")}</p>
          <p>{t("privacy.des2")}</p>
          <p>
            {" "}
            {t(
              "privacy.The purpose of this Privacy Policy is to inform you about"
            )}
          </p>
          <ul className=" list-disc list-inside">
            <li>{t("privacy.des3")}</li>
            <li>{t("privacy.des4")}</li>
            <li>{t("privacy.des5")}</li>
            <li>{t("privacy.des6")}</li>
            <li>{t("privacy.des7")}</li>
          </ul>
          <strong className=" text-xl pt-2">
            {t("privacy.Gathering and Use of Personal Information")}
          </strong>
          <p>{t("privacy.des8")}</p>
          <ul className=" list-disc list-inside">
            <li>{t("privacy.des9")}</li>
            <li>{t("privacy.Your address, email address.")}</li>
            <li>{t("privacy.Your bank details, including account number.")}</li>
            <li>{t("privacy.des10")}</li>
          </ul>
          <strong className=" text-xl pt-2">
            {t("privacy.Purpose of Using Personal Information")}
          </strong>
          <p>{t("privacy.des11")}</p>
          <ul className=" list-disc list-inside">
            <li>{t("privacy.des12")}</li>
            <li>{t("privacy.des13")}</li>
            <li>{t("privacy.des14")}</li>
            <li>{t("privacy.des15")}</li>
            <li>{t("privacy.des16")}</li>
            <li>{t("privacy.des17")}</li>
          </ul>

          <p>{t("privacy.des18")}</p>
          <strong className=" text-xl pt-2">
            {t("privacy.Link to Third Party:")}
          </strong>
          <p>{t("privacy.des19")}</p>
          <strong className=" text-xl pt-2">
            {t("privacy.Repair/Update/Delete Personal Information")}
          </strong>
          <p>{t("privacy.des20")}</p>
          <strong className=" text-xl pt-2">{t("privacy.Security")}</strong>
          <p>{t("privacy.des21")}</p>
          <strong className=" text-xl pt-2">
            {t("privacy.Retention of Personal Information")}
          </strong>
          <p>{t("privacy.des22")}</p>
          <strong className=" text-xl pt-2">{t("privacy.Changes")}</strong>
          <p>{t("privacy.des23")}</p>
          <strong className=" text-xl pt-2">
            {" "}
            {t("privacy.SMS Opt-In Policy for Phone Number Verification")}
          </strong>
          <p>{t("privacy.des24")}</p>
          <p>{t("privacy.des25")}</p>
        </div>
      </div>
    </div>
  );
};
