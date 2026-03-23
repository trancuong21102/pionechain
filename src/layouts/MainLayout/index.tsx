"use client";
import React from "react";
import "@/config-translation";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { Header } from "../ui/Headerss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "../ui/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider placement={"top-right"} />
        <Header />
        <div className="relative h-full w-full text-white bg-zinc-950">
          {children}
        </div>
        <Footer />
      </QueryClientProvider>
    </HeroUIProvider>
  );
};

export default MainLayout;
