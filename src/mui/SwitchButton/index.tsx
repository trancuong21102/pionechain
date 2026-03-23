import { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  // { code: "es", name: "Spanish", flag: "🇪🇸" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);

  useEffect(() => {
    // load ngôn ngữ đã lưu
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      const foundLang = languages.find((lang) => lang.code === savedLang);
      if (foundLang) {
        setSelectedLang(foundLang);
        i18n.changeLanguage(savedLang);
      }
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: Language) => {
    if (lang) {
      setSelectedLang(lang);
      i18n.changeLanguage(lang.code); // đổi ngôn ngữ khi user chọn
      localStorage.setItem("language", lang.code);
    }
    setAnchorEl(null);
  };

  return (
    <div className="relative">
      <IconButton onClick={handleClick} sx={{ width: 30, height: 30 }}>
        <TranslateIcon htmlColor="#fff" sx={{ fontSize: "sm" }} />
      </IconButton>

      <Menu
        PaperProps={{
          sx: {
            backgroundColor: "#0a0a0acc",
            borderRadius: "10px",
            marginTop: "10px",
          },
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === selectedLang.code}
            onClick={() => handleClose(lang)}
            className="flex items-center space-x-2 p-2"
            sx={{
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#2e2e2e",
                "& span": { color: "#fff" },
              },
              "&.Mui-selected": {
                backgroundColor: "#2e2e2e",
                "& span": { color: "#fff" },
                "&:hover": { backgroundColor: "#2e2e2e" },
              },
            }}
          >
            <span className="text-xl text-white font-semibold">
              {lang.flag}
            </span>
            <span className="text-sm text-white font-semibold">
              {lang.name}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
