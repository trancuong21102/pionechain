import ScrollBaseAnimation from "components/uilayouts/scroll-text-marque";
import { useTranslation } from "react-i18next";

export const Expand = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10">
      <ScrollBaseAnimation
        delay={5000}
        baseVelocity={-3}
        clasname="font-bold tracking-[-0.07em] leading-[90%]"
      >
        {t("home.futureSection.futureVision")}
      </ScrollBaseAnimation>
      <ScrollBaseAnimation
        delay={5000}
        baseVelocity={3}
        clasname="font-bold tracking-[-0.07em] leading-[90%]"
      >
        {t("home.futureSection.futureSupport")}
      </ScrollBaseAnimation>
    </div>
  );
};
