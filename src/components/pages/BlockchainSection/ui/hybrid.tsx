"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./lime-lingt"; // hoặc @radix-ui/react-tabs
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HybridTabItem {
  value: string;
  icon: React.ElementType;
  label: string;
  content?: React.ReactNode;
}

interface HybridTabsProps {
  items?: HybridTabItem[];
  defaultValue?: string;
  className?: string;
}

export default function HybridTabs({
  items = [
    { value: "home", icon: Home, label: "Home", content: "Welcome Home!" },
    {
      value: "search",
      icon: Search,
      label: "Search",
      content: "Find what you need.",
    },
    {
      value: "notifications",
      icon: Bell,
      label: "Alerts",
      content: "No new notifications.",
    },
    {
      value: "profile",
      icon: User,
      label: "Profile",
      content: "Your profile info.",
    },
    {
      value: "settings",
      icon: Settings,
      label: "Settings",
      content: "Preferences.",
    },
  ],
  defaultValue = "home",
  className,
}: HybridTabsProps) {
  const [active, setActive] = React.useState(defaultValue);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[70vh]",
        className
      )}
    >
      <Tabs
        value={active}
        onValueChange={setActive}
        className="w-full max-w-lg"
      >
        {/* === TAB LIST === */}
        <TabsList className="flex justify-center gap-3 bg-background/60 backdrop-blur-md p-3 rounded-xl border">
          {items.map((item: any) => {
            return (
              <TabsTrigger
                key={item.value}
                value={item.value}
                // Quan trọng: dùng layout để Framer Motion tự animate width/height
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2.5 transition-colors",
                  "data-[state=active]:bg-primary/10 data-[state=active]:text-primary",
                  "hover:bg-primary/5"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />

                {/* Label với AnimatePresence + layout */}
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* === TAB CONTENT – giữ nguyên mount để animation mượt === */}
        <div className="relative mt-8 w-full">
          <AnimatePresence mode="wait">
            {items.map((item) => (
              <TabsContent
                key={item.value}
                value={item.value}
                forceMount // Quan trọng: giữ lại DOM để có exit animation
                className="absolute inset-0 mt-0" // absolute để chồng lên nhau
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  {item.content}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}

// Import các icon (đừng quên)
import { Home, Search, Bell, User, Settings } from "lucide-react";
