export interface dataContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export interface ContactFormData {
  first_name: string;
  last_name: string;
  title: string;
  email: string;
  phone_number: string;
  organization_name: string;
  organization_location: string;
  industry: string;
  organization_size: string;
  field_id: number[];
  message: string;
}

export interface ListPartnerData {
  limit?: number
  page?: number
}

export interface GetBlogParams {
  page?: number
  limit?: number
  categorySlug?: string
  tagSlug?: string
  search?: string
}

export interface BlogItem {
  id: number
  title: string
  brief: string
  banner: string
  slug: string
  content?: any
  categories?: BlogCategory[]
  tags?: BlogTag[]
  createdAt?: string
  readTime?: string
  seoDescription?: string
  isActive?: boolean
  updatedAt?: string
}

export interface BlogCategory {
  id: number
  name: string
  slug: string
  blogNumber?: number
}

export interface BlogTag {
  id: number
  name: string
  slug: string
}

// 📦 Pagination structure
export interface PaginatedResponse<T> {
  count: number
  rows: T[]
}
