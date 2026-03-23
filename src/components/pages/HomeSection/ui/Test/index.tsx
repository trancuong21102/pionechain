import { useTranslation } from "react-i18next";
import { MetaContent } from "./MetaContent";
import RuixenBentoCards from "@/components/ui/bento-card";

export const MetaVerse = () => {
  const { t } = useTranslation();

  return (
    <>
      <RuixenBentoCards />
    </>
  );
};
