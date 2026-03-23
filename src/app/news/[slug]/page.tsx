import { BlogDetailSection } from "@/components/pages/DetailSection";
import MainLayout from "@/layouts/MainLayout";
import { BASE_URL_IMAGE } from "@/store/api";
import { BlogService } from "@/store/services/blogService";
import { BlogItem, BlogTag } from "@/store/types";
import { Metadata } from "next";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ✅ Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await BlogService.getBlogDetail(slug);
    const blog: BlogItem = res.data?.data;

    if (!blog) {
      return {
        title: "Blog | Pione Chain | Real-World Assets (RWA) Tokenization",
        description:
          "PIONE CHAIN - Blockchain layer 1 | Unlocking the power of Tokenizing Real-World Assets (RWA) and explore practical applications of blockchain and AI in security tokens, real estate, Healthcare, agriculture, public services,...",
      };
    }

    return {
      title: blog.title,
      description: blog.seoDescription || blog.brief || "",
      keywords: [blog.title],
      openGraph: {
        title: blog.title,
        description: blog.brief || "",
        images: blog.banner
          ? [
              {
                url: `${BASE_URL_IMAGE}${blog.banner}`,
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.brief || "",
        images: blog.banner ? [`${BASE_URL_IMAGE}${blog.banner}`] : [],
      },
    };
  } catch (err) {
    console.error("❌ SEO metadata error:", err);
    return {
      title: "Pione Solution Blog",
      description: "Stay updated on sustainability and Web3 insights.",
    };
  }
}

// ✅ Main Page Component
export default async function NewsDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  try {
    // Fetch blog detail
    const blogRes = await BlogService.getBlogDetail(slug);
    const blog: BlogItem = blogRes.data?.data;
    if (!blog) {
      return (
        <div className="py-20 text-center text-gray-600">Blog not found.</div>
      );
    }

    // Fetch tags
    const tagsRes = await BlogService.getTagList();
    const tags: BlogTag[] = tagsRes.data?.data?.rows ?? [];

    return (
      <MainLayout>
        <BlogDetailSection data={blog} />
      </MainLayout>
    );
  } catch (err) {
    console.error("❌ Error fetching blog detail:", err);
    return (
      <div className="py-20 text-center text-gray-600">
        Failed to load blog detail.
      </div>
    );
  }
}
