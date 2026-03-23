"use client";

import { HeadTitle } from "@/components/HeadTitle";
import { useTranslation } from "react-i18next";
import { TeamComp } from "./ui/TeamComp";
import { useCoreTeamData } from "./helper";

type TeamMember = {
  id?: number | string;
  name?: string | null;
  level?: number | string | null;
  [key: string]: unknown;
};

export const OurTeamSection = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en";

  const { data: allMembers = [], isLoading } = useCoreTeamData(lang);

  const members: TeamMember[] = Array.isArray(allMembers)
    ? (allMembers as TeamMember[])
    : [];

  const ceoMembers = members.filter((m) => Number(m?.level) === 1);

  const ceoIds = new Set(
    ceoMembers
      .map((m) => m?.id)
      .filter((id): id is string | number => id !== undefined && id !== null)
  );

  const gridMembersBase =
    ceoIds.size > 0
      ? members.filter((m) => {
          if (!m?.id) return true;
          if (ceoIds.has(m.id)) return false;
          return true;
        })
      : members;

  const gridMembers = gridMembersBase.length > 0 ? gridMembersBase : members;

  const getMemberPriority = (m: TeamMember) => {
    const normalizeText = (s: unknown) =>
      String(s || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const name = normalizeText(m?.name);
    const role = normalizeText((m as { role?: unknown })?.role);

    // Name-based ordering overrides (swap positions)
    const orderOverrides: Record<
      string,
      { sortKey: string; forcePriority?: number }
    > = {
      // KIET TRAN <-> CUONG NGUYEN
      "kiet tran": { sortKey: "cuong nguyen" },
      "cuong nguyen": { sortKey: "kiet tran" },

      // KHAI VO <-> LAP TRAN
      "khai vo": { sortKey: "lap tran", forcePriority: 2 },
      "lap tran": { sortKey: "khai vo", forcePriority: 3 },
    };

    const override = orderOverrides[name];

    // Put "Linh" (Team Lead) right after CEO section.
    const isLinh = name.includes("linh");
    const isTeamLead =
      role.includes("team lead") ||
      role.includes("teamleader") ||
      role.includes("team leader");

    // Push some profiles lower in the list (requested ordering)
    const pushToBottomKeywords = [
      "cuong nguyen",
      "nguyen cuong",
      "cuong tran",
      "tran cuong",
      "hoang le",
      "le hoang",
      "kha vo",
      "vo kha",
      "hinh phat",
      "phat hinh",
      "hin phat",
      "phat hin",
      "kiet tran",
      "tran kiet",
      "nhan nguyen",
      "nguyen nhan",
      "phu em tran",
      "tran phu em",
      "phuem tran",
      "tran phuem",
      "thu doan",
      "doan thu",
      "tung nguyen",
      "nguyen tung",
    ];
    const isPushToBottom = pushToBottomKeywords.some((k) => name.includes(k));

    if (isLinh && isTeamLead) return 0;
    if (isLinh) return 1;
    if (override?.forcePriority !== undefined) return override.forcePriority;
    if (isPushToBottom) return 3;
    return 2;
  };

  const gridMembersSorted = [...gridMembers].sort((a, b) => {
    const prioA = getMemberPriority(a);
    const prioB = getMemberPriority(b);
    if (prioA !== prioB) return prioA - prioB;

    const normalizeText = (s: unknown) =>
      String(s || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const orderOverrides: Record<string, { sortKey: string }> = {
      "kiet tran": { sortKey: "cuong nguyen" },
      "cuong nguyen": { sortKey: "kiet tran" },
      "khai vo": { sortKey: "lap tran" },
      "lap tran": { sortKey: "khai vo" },
    };

    const nameAActual = normalizeText(a?.name);
    const nameBActual = normalizeText(b?.name);

    const nameASort =
      orderOverrides[nameAActual]?.sortKey !== undefined
        ? normalizeText(orderOverrides[nameAActual].sortKey)
        : nameAActual;
    const nameBSort =
      orderOverrides[nameBActual]?.sortKey !== undefined
        ? normalizeText(orderOverrides[nameBActual].sortKey)
        : nameBActual;

    const bySortKey = nameASort.localeCompare(nameBSort);
    if (bySortKey !== 0) return bySortKey;
    return nameAActual.localeCompare(nameBActual);
  });

  // 👉 Chỉ điều kiện hóa phần render thôi
  if (isLoading) {
    return (
      <div className="flex justify-center py-40 text-white text-lg">
        Loading team...
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px]" />
      <div className="relative z-20 container py-40">
        <HeadTitle
          title={t("ourTeam.title")}
          subTitle={t("ourTeam.subTitle")}
        />

        {members.length === 0 && (
          <div className="mt-12 text-gray-300">
            {t("ourTeam.empty", {
              defaultValue: "Team information is coming soon.",
            })}
          </div>
        )}

        {/* CEO (separate) */}
        {ceoMembers.length > 0 && (
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-10 w-full mx-auto">
              <div className="w-full md:col-span-2 xl:col-span-1 md:col-start-2 xl:col-start-2">
                <TeamComp data={ceoMembers} />
              </div>
            </div>
          </div>
        )}

        {/* All members (grid) */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
            <TeamComp data={gridMembersSorted} />
          </div>
        </div>
      </div>
    </div>
  );
};
