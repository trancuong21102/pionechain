import { useTranslation } from "react-i18next";
import avtLap from "@/assets/team/avt-laptran.jpg";
import avtBao from "@/assets/team/avt-bao.jpg";
import avtJackson from "@/assets/team/avt-jackson.jpg";
import avtNha from "@/assets/team/avt-nha.jpg";
import avtKiet from "@/assets/team/avt-kiet.jpg";
import avtCuongTran from "@/assets/team/avt-trancuong.jpg";
import avtDat from "@/assets/team/avt-dat.jpg";
import avtCuongNguyen from "@/assets/team/avt-cuongnguyen.jpg";
import avtThu from "@/assets/team/avt-thu.jpg";
import avtHoang from "@/assets/team/avt-hoang.jpg";
import avtKhai from "@/assets/team/avt-khai.jpg";
import avtTung from "@/assets/team/avt-tung.jpg";
import avtMinh from "@/assets/team/avt-minh.jpg";
import avtKha from "@/assets/team/avt-kha.jpg";
import avtCEO from "@/assets/team/avt-CEO.jpg";
import avTrang from "@/assets/team/avt-trang.jpg";
import avPhat from "@/assets/team/avt-phat.jpg";
import avLinh from "@/assets/team/avt-linhtran.jpg";

export const useCEOData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 0,
      name: "NHIEN VO",
      role: t("ourTeam.ceo.role"),
      department: "vovannhien.com",
      tele: "https://t.me/ceopione",
      linked: "https://www.linkedin.com/in/vovannhien/",
      facebook: "#",
      image: avtCEO,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.ceo.aboutTitle")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.ceo.about1")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.ceo.about2")}
            </p>
          </li>
        </ul>
      ),
    },
  ];
};

export const useTeamDataLeader = () => {
  const { t } = useTranslation();
  return [
    // {
    //   id: 1,
    //   name: "TRANG PHAM",
    //   role: t("ourTeam.leaders.trang.role"),
    //   department: "CFO",
    //   tele: "#",
    //   linked: "#",
    //   facebook: "#",
    //   image: avTrang,
    //   bio: (
    //     <ul className="flex flex-col gap-2">
    //       <li className="flex flex-col gap-1">
    //         <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
    //         <p className="text-justify text-accent">
    //           {t("ourTeam.leaders.trang.about")}
    //         </p>

    //         <p className="font-semibold text-lg">
    //           {t("ourTeam.leaders.trang.leadershipTitle")}
    //         </p>
    //         <p className="text-justify text-accent">
    //           {t("ourTeam.leaders.trang.leadership")}
    //         </p>

    //         <p className="font-semibold text-lg">
    //           {t("ourTeam.leaders.trang.visionTitle")}
    //         </p>
    //         <p className="text-justify text-accent">
    //           {t("ourTeam.leaders.trang.vision")}
    //         </p>
    //       </li>
    //     </ul>
    //   ),
    // },

    {
      id: 1,
      name: "LINH TRAN",
      role: t("ourTeam.leaders.linh.role"),
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avLinh,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.leaders.linh.about")}
            </p>

            <p className="font-semibold text-lg">
              {t("ourTeam.leaders.linh.leadershipTitle")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.leaders.linh.leadership")}
            </p>

            <p className="font-semibold text-lg">
              {t("ourTeam.leaders.linh.visionTitle")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.leaders.linh.vision")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      name: "MINH MAI",
      role: t("ourTeam.leaders.maiMinh.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avTrang,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.leaders.maiMinh.about")}
            </p>

            <p className="font-semibold text-lg">
              {t("ourTeam.leaders.maiMinh.visionTitle")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.leaders.maiMinh.vision")}
            </p>
          </li>
        </ul>
      ),
    },
  ];
};

export const useTeamData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      name: "LAP TRAN",
      role: t("ourTeam.team.lap.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtLap,
      bio: (
        <ul className="flex flex-col gap-2">
          <li>
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.lap.about")}
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">
              {t("ourTeam.team.lap.experienceTitle")}
            </p>
            <ul className="list-disc ml-5 flex flex-col gap-1 text-accent">
              <li> {t("ourTeam.team.lap.experience_0")}</li>
              <li> {t("ourTeam.team.lap.experience_1")}</li>
              <li> {t("ourTeam.team.lap.experience_2")}</li>
              <li> {t("ourTeam.team.lap.experience_3")}</li>
            </ul>
          </li>

          <li>
            <p className="font-semibold text-lg">
              {t("ourTeam.team.lap.goalTitle")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.lap.goal")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      name: "BAO LE",
      role: t("ourTeam.team.bao.role"),
      department: "",
      tele: "#",
      linked: "https://www.linkedin.com/in/quoc-bao-2699a5351/",
      facebook: "#",
      image: avtBao,
      bio: (
        <ul className="flex flex-col gap-2">
          <li>
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.bao.about")}
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">
              {t("ourTeam.team.bao.leadershipTitle")}
            </p>
            <ul className="list-disc ml-5 flex flex-col gap-1 text-accent">
              <li>{t("ourTeam.team.bao.leadership_0")}</li>
              <li>{t("ourTeam.team.bao.leadership_1")}</li>
              <li>{t("ourTeam.team.bao.leadership_2")}</li>
              <li>{t("ourTeam.team.bao.leadership_3")}</li>
            </ul>
          </li>

          <li>
            <p className="font-semibold text-lg">
              {t("ourTeam.team.bao.futureTitle")}
            </p>
            <ul className="list-disc ml-5 flex flex-col gap-1 text-accent">
              <li> {t("ourTeam.team.bao.future_0")}</li>
              <li> {t("ourTeam.team.bao.future_1")}</li>
              <li> {t("ourTeam.team.bao.future_2")}</li>
            </ul>
          </li>

          <li>
            <p className="text-justify text-accent">
              {t("ourTeam.team.bao.vision")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      name: "PHU EM TRAN",
      role: t("ourTeam.team.phuem.role"),
      department: "",
      tele: "#",
      linked: "https://www.linkedin.com/in/phuemdev/",
      facebook: "#",
      image: avtJackson,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.phuem.about.title")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.phuem.about.desc1")}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.phuem.skills.title")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.phuem.skills.item1")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.phuem.skills.item2")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.phuem.skills.item3")}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.phuem.goal.title")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.phuem.goal.desc")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      name: "NHA DUONG",
      role: t("ourTeam.team.nhaduong.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtNha,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.nhaduong.about.title")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.nhaduong.about.desc")}
            </p>

            <p className="font-semibold text-lg">
              {t("ourTeam.team.nhaduong.strengths.title")}
            </p>
            <span>{t("ourTeam.team.nhaduong.strengths.item1")}</span>
            <span>{t("ourTeam.team.nhaduong.strengths.item2")}</span>
            <span>{t("ourTeam.team.nhaduong.strengths.item3")}</span>
            <span>{t("ourTeam.team.nhaduong.strengths.item4")}</span>

            <p className="font-semibold text-lg">
              {t("ourTeam.team.nhaduong.philosophy.title")}
            </p>
            <span>{t("ourTeam.team.nhaduong.philosophy.desc")}</span>

            <p className="font-semibold text-lg">
              {t("ourTeam.team.nhaduong.value.title")}
            </p>
            <span>{t("ourTeam.team.nhaduong.value.desc")}</span>
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      name: "KIET TRAN",
      role: t("ourTeam.team.kiet.role"),
      image: avtKiet,
      tele: "#",
      linked: "#",
      facebook: "#",
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.kiet.about")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      name: "CUONG TRAN",
      role: t("ourTeam.team.cuong.role"),
      image: avtCuongTran,
      tele: "#",
      linked: "#",
      facebook: "#",
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.cuong.about")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 7,
      name: "Dat Vo",
      role: t("ourTeam.team.dat.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtDat,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.dat.bio")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 8,
      name: "Cuong Nguyen",
      role: t("ourTeam.team.cuongnguyen.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtCuongNguyen,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.cuongnguyen.bio")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 9,
      name: "Thu Doan",
      role: t("ourTeam.team.thudoan.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtThu,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.thudoan.bio1")}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.thudoan.skillsTitle")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.thudoan.bio2")}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.goal")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.thudoan.bio3")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 10,
      name: "Hoang Dam",
      role: t("ourTeam.team.hoangdam.role"),
      department: "",
      tele: "#",
      linked: "https://www.linkedin.com/in/guava-pi-319903351/",
      facebook: "#",
      image: avtHoang,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.hoangdam.bio1")}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.hoangdam.skillsTitle")}
            </p>
            <ul className="flex flex-col gap-2 ml-5 list-disc text-accent">
              <li>{t("ourTeam.team.hoangdam.skill1")}</li>
              <li>{t("ourTeam.team.hoangdam.skill2")}</li>
              <li>{t("ourTeam.team.hoangdam.skill3")}</li>
            </ul>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.goal")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.hoangdam.bio2")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 11,
      name: "Khai Vo",
      role: t("ourTeam.team.khaiVo.role"),
      department: "",
      tele: "https://t.me/khaipione",
      linked: "https://www.linkedin.com/in/khaipione/",
      facebook: "#",
      image: avtKhai,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.khaiVo.aboutContent1")}
            </p>

            <p className="font-semibold text-lg">
              {t("ourTeam.team.khaiVo.coreExpertise")}
            </p>
            <ul className="ml-5 list-disc text-accent">
              <li>{t("ourTeam.team.khaiVo.expertiseList.1")}</li>
              <li>{t("ourTeam.team.khaiVo.expertiseList.2")}</li>
              <li>{t("ourTeam.team.khaiVo.expertiseList.3")}</li>
              <li>{t("ourTeam.team.khaiVo.expertiseList.4")}</li>
              <li>{t("ourTeam.team.khaiVo.expertiseList.5")}</li>
            </ul>

            <p className="font-semibold text-lg">
              {t("ourTeam.team.khaiVo.futureVision")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.khaiVo.futureContent1")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.khaiVo.futureContent2")}
            </p>
          </li>

          <li className="flex flex-col gap-1">
            <p className="text-justify text-accent">
              {t("ourTeam.team.khaiVo.blockchainFocus")}
            </p>
          </li>

          <li className="flex flex-col gap-1">
            <p className="text-justify text-accent">
              {t("ourTeam.team.khaiVo.mission")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 12,
      name: "Tung Nguyen",
      role: t("ourTeam.team.tungNguyen.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtTung,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.tungNguyen.aboutContent")}
            </p>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.tungNguyen.skills")}
            </p>
            <ul className="flex flex-col ml-5 gap-2 list-disc text-accent">
              <li>{t("ourTeam.team.tungNguyen.skillsList.1")}</li>
              <li>{t("ourTeam.team.tungNguyen.skillsList.2")}</li>
              <li>{t("ourTeam.team.tungNguyen.skillsList.3")}</li>
              <li>{t("ourTeam.team.tungNguyen.skillsList.4")}</li>
              <li>{t("ourTeam.team.tungNguyen.skillsList.5")}</li>
            </ul>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">
              {t("ourTeam.team.tungNguyen.goal")}
            </p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.tungNguyen.goalContent")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 13,
      name: "Minh Le",
      role: t("ourTeam.team.minh.role"),
      image: avtMinh,
      tele: "#",
      linked: "#",
      facebook: "#",
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.minh.about")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 14,
      name: "Kha Vo",
      role: t("ourTeam.team.kha.role"),
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avtKha,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.kha.about")}
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 15,
      name: "HIN PHAT",
      role: t("ourTeam.team.hinPhat.role"),
      department: "",
      tele: "#",
      linked: "#",
      facebook: "#",
      image: avPhat,
      bio: (
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1">
            <p className="font-semibold text-lg">{t("ourTeam.team.about")}</p>
            <p className="text-justify text-accent">
              {t("ourTeam.team.hinPhat.bio")}
            </p>
          </li>
        </ul>
      ),
    },
  ];
};
