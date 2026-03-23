"use client";

import { Box, Fade, IconButton, Modal, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const LOCAL_STORAGE_KEY = "home.ecosystem_reward_modal_dismissed";

export default function DialogEcosystemReward() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const isDismissed = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!isDismissed) {
            // Small delay for better UX
            const timer = setTimeout(() => {
                setOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    };

    const handleStart = () => {
        handleClose();
        window.open("https://pioneswap.com/ecosystem-reward/", "_blank");
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            aria-labelledby="ecosystem-reward-modal"
            aria-describedby="ecosystem-reward-description"
            sx={{ backdropFilter: "blur(8px)" }}
        >
            <Fade in={open} timeout={500}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: {
                            xs: "90%", sm: "500px", md: "600px"
                        },
                        maxHeight: "90vh",
                        overflowY: "auto",
                        background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
                        borderRadius: "24px",
                        boxShadow: "0 0 50px rgba(231, 64, 65, 0.3)",
                        outline: "none",
                        border: "1px solid rgba(255, 106, 0, 0.2)",
                        p: 0,
                        "&::-webkit-scrollbar": {
                            width: "4px",
                        },
                        "&::-webkit-scrollbar-track": {
                            background: "transparent",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                        },
                    }}
                >
                    {/* Header Image/Gradient */}
                    <Box
                        sx={{
                            height: "200px",
                            position: "relative",
                            background: "linear-gradient(45deg, #E74041 0%, #FA5805 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: "150%",
                                height: "150%",
                                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                                animation: "pulse 4s infinite",
                                "@keyframes pulse": {
                                    "0%": { transform: "scale(1)", opacity: 0.5 },
                                    "50%": { transform: "scale(1.2)", opacity: 0.8 },
                                    "100%": { transform: "scale(1)", opacity: 0.5 },
                                },
                            }}
                        />
                        <Image
                            src="/assets/images/bannerEcosystem.png"
                            alt="Ecosystem Reward"
                            width={800}
                            height={800}
                            style={{
                                zIndex: 1,
                                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                top: 15,
                                right: 15,
                                color: "white",
                                bgcolor: "rgba(0, 0, 0, 0.81)",
                                zIndex: 10,
                                "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                background: "linear-gradient(to right, #FFFFFF, #FFA500)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontSize: { xs: "1.5rem", md: "2rem" },
                            }}
                        >
                            {t("home.ecosystem_reward_modal.title")}
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                mb: 4,
                                lineHeight: 1.7,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                            }}
                        >
                            {t("home.ecosystem_reward_modal.description")}
                        </Typography>

                        {/* List of features */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4, textAlign: "left" }}>
                            {[
                                t("home.ecosystem_reward_modal.feature1"),
                                t("home.ecosystem_reward_modal.feature2"),
                                t("home.ecosystem_reward_modal.feature3"),
                                t("home.ecosystem_reward_modal.feature4"),
                            ].map((text, idx) => (
                                <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                    <CheckCircleOutlineIcon sx={{ color: "#FA5805", fontSize: "20px" }} />
                                    <Typography sx={{ color: "white", fontSize: { xs: "0.8rem", md: "0.95rem" } }}>{text}</Typography>
                                </Box>
                            ))}
                        </Box>

                        <Button
                            fullWidth
                            onClick={handleStart}
                            sx={{
                                py: 1,
                                borderRadius: "12px",
                                background: "linear-gradient(45deg, #E74041 0%, #FA5805 100%)",
                                color: "white",
                                fontWeight: 700,
                                fontSize: "1rem",
                                textTransform: "none",
                                boxShadow: "0 10px 20px rgba(231, 64, 65, 0.3)",
                                "&:hover": {
                                    background: "linear-gradient(45deg, #FA5805 0%, #E74041 100%)",
                                    boxShadow: "0 15px 30px rgba(231, 64, 65, 0.5)",
                                },
                            }}
                        >
                            {t("home.ecosystem_reward_modal.button")}
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal >
    );
}
