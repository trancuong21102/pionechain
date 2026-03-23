import { BASE_URL_IMAGE, fetchCoreTeam } from "@/store/api";
import { useQuery } from "@tanstack/react-query";

/**
 * ✅ Lấy danh sách Core Team (BE đã trả đúng lang)
 * @param lang - Mã ngôn ngữ ("vi" | "en" ...)
 */
export const useCoreTeamData = (lang: string) => {
    return useQuery({
        queryKey: ["core_team_members", lang === "vi" ? "vi" : "en"],
        queryFn: async () => {
            const res = await fetchCoreTeam(lang === "vi" ? "vi" : "en");

            return (
                res.data.rows?.map((member: any) => ({
                    id: member.id,
                    name: member.name,
                    role: member.translation?.[0]?.position || "",
                    description: member.translation?.[0]?.description || "",
                    experience: member.translation?.[0]?.experience || "",
                    active: member.active,
                    level: member.level,

                    // Ảnh
                    image: member.avatar_url
                        ? BASE_URL_IMAGE + member.avatar_url
                        : "/images/default-avatar.png",

                    // Liên kết xã hội
                    tele: member.telegram_url,
                    linked: member.linkedin_url,
                    twitter: member.twitter_url,
                    facebook: member.facebook_url,
                    website: member.website_url,

                    // Giữ translation để dùng cho DialogDetail
                    translation: member.translation || [],
                })) || []
            );
        },
    });
};

// 🧩 Lọc theo tầng (level)
export const useCEOData = (data: any[]) =>
    data?.filter((x) => Number(x.level) === 1) || [];

export const useTeamDataLeader = (data: any[]) =>
    data?.filter((x) => Number(x.level) === 2) || [];

export const useTeamData = (data: any[]) =>
    data?.filter((x) => Number(x.level) === 3) || [];
