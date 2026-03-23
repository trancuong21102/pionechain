"use client";

import { HeadTitle } from "@/components/HeadTitle";
import { useTranslation } from "react-i18next";

export const TermsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative  w-full bg-[url('/assets/images/bgSection3.png')] bg-no-repeat bg-cover bg-center">
      <div className="container py-40">
        <HeadTitle title="Terms of Service" subTitle="" />
        <div className="mt-10">
          <p>{t("terms.Last updated February 2, 2025")}</p>
          <p>{t("terms.des1")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.1. Acceptance of Terms")}
          </strong>
          <p>{t("terms.des2")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.2. Description of Service")}
          </strong>
          <p>{t("terms.des3")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.3. User Registration")}
          </strong>
          <p>{t("terms.des4")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.4. Information Collection")}
          </strong>
          <p className=" text-xl pt-2 font-semibold">
            {t("terms.4.1 Collection of Personal Information")}
          </p>
          <p>{t("terms.des5")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.4.2 Information Provided by Users")}
          </strong>
          <ul className=" list-disc list-inside">
            <p>{t("terms.des6")}</p>
            <li>{t("terms.des7")}</li>
            <li>{t("terms.des8")}</li>
            <li>{t("terms.des9")}</li>
          </ul>
          <strong className=" text-xl pt-2">
            {t("terms.4.3 Automatically Collected Information")}
          </strong>
          <p>{t("terms.des10")}</p>
          <p>{t("terms.des11")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.4.4 Information from Partners")}
          </strong>
          <p>{t("terms.des12")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.4.5 Information Provided Through Social Media")}
          </strong>
          <p>{t("terms.des13")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.4.6 Derived Information")}
          </strong>
          <p>{t("terms.des14")}</p>
          <strong className=" text-xl pt-2">
            {" "}
            {t("terms.5. Intellectual Property Rights")}
          </strong>
          <p>{t("terms.des15")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.6. Mobile Application License")}
          </strong>
          <p className=" text-xl pt-2">{t("terms.6.1 Use License")}</p>
          <p>{t("terms.des16")}</p>
          <ul className=" list-disc list-inside">
            <li>{t("terms.des17")}</li>
            <li>{t("terms.des18")}</li>
            <li>{t("terms.des19")}</li>
            <li>{t("terms.des20")}</li>
            <li>{t("terms.des21")}</li>
            <li>{t("terms.des22")}</li>
            <li>{t("terms.des23")}</li>
            <li>{t("terms.des24")}</li>
            <li>{t("terms.des25")}</li>
          </ul>
          <strong className=" text-xl pt-2">
            {t("terms.6.2 Apple and Android Devices")}
          </strong>
          <ul className=" list-disc list-inside">
            <p>{t("terms.des26")}</p>
            <li>{t("terms.des27")}</li>
            <li>{t("terms.des28")}</li>
            <li>{t("terms.des29")}</li>
            <p>{t("terms.des30")}</p>
            <li>{t("terms.des31")}</li>
          </ul>
          <p>{t("terms.des32")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.7. Social Media")}
          </strong>
          <p>{t("terms.des33")}</p>
          <p>{t("terms.des34")}</p>
          <p>{t("terms.des35")}</p>
          <p>{t("terms.des36")}</p>
          <p>{t("terms.des37")}</p>
          <strong className=" text-xl pt-2">{t("terms.8. Privacy")}</strong>
          <p>{t("terms.des38")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.9. Disclaimer of Warranties")}
          </strong>
          <p>{t("terms.des39")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.10. Limitation of Liability")}
          </strong>
          <p>{t("terms.des40")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.11. Governing Law")}
          </strong>
          <p>{t("terms.des41")}</p>
          <strong className=" text-xl pt-2">
            {t("terms.12. Changes to Terms")}
          </strong>
          <p>{t("terms.des42")}</p>
          <strong className=" text-xl pt-2">
            {" "}
            {t("terms.13. Contact Us")}
          </strong>
          <p>{t("terms.des43")}</p>
          <p>{t("terms.des44")}</p>
        </div>
      </div>
    </div>
  );
};
