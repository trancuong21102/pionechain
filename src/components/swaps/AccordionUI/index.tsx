import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Card = {
  id: number;
  title: string;
  description: string[];
};

const AccordionUI = ({ items }: { items: Card[] }) => {
  const { t } = useTranslation();
  const [isAccordionMenuOpen, setIsAccordionMenuOpen] = React.useState(true);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className=" w-full p-4 rounded-xl bg-white/10  shadow-white/40 backdrop-blur-md relative overflow-hidden">
      <AccordionNavMenu
        isOpen={isAccordionMenuOpen}
        onClose={() => setIsAccordionMenuOpen(!isAccordionMenuOpen)}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            title={t(item.title)}
            isOpen={openIndex === item.id}
            onToggle={() =>
              setOpenIndex(openIndex === item.id ? null : item.id)
            }
          >
            {item.description && (
              <div className="flex flex-col gap-3 ml-5 mr-2 mt-2">
                {item.description.map((child, index) => (
                  <p key={index} className="text-neutral-200">
                    {t(child)}
                  </p>
                ))}
              </div>
            )}
          </AccordionItem>
        ))}
      </AccordionNavMenu>
    </div>
  );
};

export default AccordionUI;

interface AccordionNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface AccordionItemProps {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div
      className={`${
        isOpen ? "bg-white/10" : ""
      } w-full border border-white/20 rounded-xl relative overflow-hidden shadow-lg hover:bg-white/10 duration-200`}
    >
      <div
        className="flex items-center justify-between cursor-pointer text-[#FC7F00] rounded-xl px-3 py-2"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle?.()}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {children && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExpandMoreIcon fontSize="small" />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 pb-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AccordionNavMenu = ({
  children,
  className,
  isOpen,
}: AccordionNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          className={cn(
            " flex w-full flex-col items-start justify-start gap-4",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
