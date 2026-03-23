"use client";

import { CardBlog } from "@/components/cards/CardNews";
import { HeadTitle } from "@/components/HeadTitle";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogList, getBlogTags, getBlogCategories } from "@/store/api";
import { GetBlogParams } from "@/store/types";
import { Pagination } from "@mui/material";

export const NewsSection = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [filters, setFilters] = useState<GetBlogParams>({
    limit: 6,
    page: 1,
    search: "",
    categorySlug: "",
    tagSlug: "",
  });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== ""),
  );

  const { data, isLoading } = useQuery({
    queryKey: ["blogList", cleanFilters],
    queryFn: () => getBlogList(cleanFilters),
    enabled: mounted,
  });

  const { data: tagsData } = useQuery({
    queryKey: ["blogTags"],
    queryFn: getBlogTags,
    enabled: mounted,
  });

  const { data: categoriesData } = useQuery({
    queryKey: ["blogCategories"],
    queryFn: getBlogCategories,
    enabled: mounted,
  });

  const blogList = data?.data?.rows || [];
  const tags = tagsData?.data?.rows || [];
  const categories = categoriesData?.data?.rows || [];
  const totalPages = Math.ceil((data?.data?.count || 0) / (filters.limit || 6));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: e.target.value, page: 1 }));
  };

  const handleCategoryChange = (categorySlug: string) => {
    setFilters((prev) => ({ ...prev, categorySlug, page: 1 }));
  };

  const handleTagChange = (tagSlug: string) => {
    setFilters((prev) => ({ ...prev, tagSlug, page: 1 }));
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setFilters((prev) => ({ ...prev, page }));
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) {
    return (
      <div className="relative w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px]"></div>
        <div className="relative z-20 container py-40">
          <HeadTitle title={t("news.title")} subTitle={t("news.subTitle")} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] "></div>
      <div className="relative z-20 container py-40">
        <HeadTitle title={t("news.title")} subTitle={t("news.subTitle")} />
        {/* Search and Filter Controls */}
        <div className="mt-10 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={t("news.searchPlaceholder") || "Search news..."}
                value={filters.search}
                onChange={handleSearchChange}
                className="w-full px-6 py-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder:text-gray-500 focus:outline-none focus:border-[#167bff] transition-colors"
              />
              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          {categories.length > 0 && (
            <div className="flex flex-col gap-4 mt-6">
              <p className="text-gray-400 text-base uppercase">
                {t("Categories")}
              </p>
              <div className="flex flex-wrap gap-3 justify-start">
                <button
                  onClick={() => handleCategoryChange("")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filters.categorySlug === ""
                      ? "bg-[#167bff] text-white"
                      : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category: any) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filters.categorySlug === category.slug
                        ? "bg-[#167bff] text-white"
                        : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tag Filters */}
          {tags.length > 0 && (
            <div className="flex flex-col items-center justify-center gap-4 mt-6">
              <p className="text-gray-400 text-base uppercase">Tags</p>
              <div className="flex flex-wrap gap-3 justify-center ">
                <button
                  onClick={() => handleTagChange("")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filters.tagSlug === ""
                      ? "bg-[#167bff] text-white"
                      : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                >
                  All Tags
                </button>
                {tags.map((tag: any) => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagChange(tag.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filters.tagSlug === tag.slug
                        ? "bg-[#167bff] text-white"
                        : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-[#121212] rounded-xl aspect-[4/5] w-full"
              ></div>
            ))}
          </div>
        ) : blogList.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
              {blogList.map((item: any, index: number) => (
                <CardBlog
                  key={index}
                  feature={{
                    id: item.id,
                    image_url: item.banner,
                    title: item.title,
                    summary: item.brief,
                    type: item.categories?.[0]?.name || "news",
                    created_at: item.createdAt,
                    slug: item.slug,
                  }}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <Pagination
                  count={totalPages}
                  page={filters.page}
                  onChange={handlePageChange}
                  color="primary"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "#fff",
                      border: "1px solid #2a2a2a",
                      "&:hover": {
                        backgroundColor: "#167bff",
                      },
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                      backgroundColor: "#167bff",
                      color: "#fff",
                      border: "1px solid #167bff",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                      color: "#666",
                    },
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center mt-20 text-white">
            <p>{t("news.NoData") || "No news available at the moment."}</p>
          </div>
        )}
      </div>
    </div>
  );
};
