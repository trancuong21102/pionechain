import { API } from "../api"
import { BlogCategory, BlogItem, BlogTag, PaginatedResponse } from "../types"


export interface GetBlogParams {
  page?: number
  limit?: number
  categorySlug?: string
  tagSlug?: string
  search?: string
}

export const BlogService = {
  // 📰 Blog list
  getBlogList: (params: GetBlogParams = {}) =>
    API.get<{ message: string; data: PaginatedResponse<BlogItem> }>(
      'api/v1/common/news/slug',
      {
        params,
      }
    ),

  // 📄 Blog detail by slug
  getBlogDetail: (slug: string) =>
    API.get<{ message: string; data: BlogItem }>(`api/v1/common/news/slug/${slug}`),

  // 🗂 Category list
  getCategoryList: () =>
    API.get<{ message: string; data: { rows: BlogCategory[] } }>(
      'api/v1/common/news/category'
    ),

  // 🏷 Tag list
  getTagList: () =>
    API.get<{ message: string; data: { rows: BlogTag[] } }>('api/v1/common/news/tag'),
}
