"use client";

import { Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface BannerPromoModalProps {
    open?: boolean;
    onClose?: () => void;
}

export default function BannerPromoModal({
    open: controlledOpen,
    onClose: controlledOnClose,
}: BannerPromoModalProps) {
    const [internalOpen, setInternalOpen] = useState(true);

    // Use controlled or uncontrolled mode
    const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const handleClose =
        controlledOnClose || (() => setInternalOpen(false));

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            aria-labelledby="banner-promo-modal"
            aria-describedby="banner-promo-description"
            sx={{ backdropFilter: "blur(3px)" }}
        >
            <Fade in={open} timeout={400}>
                <Box
                    component="div"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "95%", sm: "90%", md: "850px", lg: "1000px" },
                        maxHeight: "90vh",
                        background: "#ffffff",
                        overflowY: "auto",
                        overflowX: "hidden",
                        boxSizing: "border-box",
                        borderRadius: 2,
                        boxShadow: "0 0 50px rgba(0,0,0,0.3)",
                        outline: "none",
                        "&::-webkit-scrollbar": { width: 6 },
                        "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
                        "&::-webkit-scrollbar-thumb": {
                            bgcolor: "rgba(0, 0, 0, 0.2)",
                            borderRadius: 3,
                        },
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "#333",
                            bgcolor: "rgba(255,255,255,0.9)",
                            zIndex: 10,
                            transition: "all 0.2s ease",
                            "&:hover": {
                                color: "#000",
                                bgcolor: "#fff",
                                transform: "scale(1.1)",
                            },
                        }}
                    >
                        ✕
                    </IconButton>

                    {/* Two Column Layout: Banner Left, Content Right */}
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            height: { xs: "auto", md: "600px" },
                            maxHeight: { xs: "none", md: "85vh" },
                        }}
                    >
                        {/* Left Column - Banner Image */}
                        <Box
                            component="div"
                            sx={{
                                flex: { xs: "none", md: "0 0 50%" },
                                width: { xs: "100%", md: "50%" },
                                minHeight: { xs: "300px", md: "auto" },
                                height: { xs: "300px", md: "100%" },
                            }}
                        >
                            <Image
                                src="/assets/images/bannerListing.png"
                                alt="Pione Chain Banner"
                                width={600}
                                height={800}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                                priority
                            />
                        </Box>

                        {/* Right Column - Content */}
                        <Box
                            component="div"
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                p: { xs: 4, sm: 5, md: 6 },
                                bgcolor: "#ffffff",
                            }}
                        >
                            {/* Title */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: "#4a3728",
                                    textAlign: "center",
                                    mb: 1,
                                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                                }}
                            >
                                Enjoy 15% Off
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: "#4a3728",
                                    textAlign: "center",
                                    mb: 3,
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                                }}
                            >
                                On Your First Order
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#666",
                                    textAlign: "center",
                                    mb: 4,
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    lineHeight: 1.6,
                                    maxWidth: "400px",
                                }}
                            >
                                Enter your email to receive your exclusive discount and get
                                early access to new arrivals and special offers.
                            </Typography>

                            {/* Email Input Form */}
                            <Box
                                component="form"
                                sx={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // Handle form submission
                                    console.log("Form submitted");
                                }}
                            >
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email Here..."
                                        required
                                        style={{
                                            flex: 1,
                                            padding: "12px 16px",
                                            border: "1px solid #ddd",
                                            borderRadius: "4px",
                                            fontSize: "14px",
                                            outline: "none",
                                            transition: "border-color 0.2s",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "#6b5d4f";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "#ddd";
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        style={{
                                            padding: "12px 24px",
                                            backgroundColor: "#6b5d4f",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            transition: "background-color 0.2s",
                                            whiteSpace: "nowrap",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "#5a4d40";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "#6b5d4f";
                                        }}
                                    >
                                        Yes, I Want It!
                                    </button>
                                </Box>

                                {/* Terms */}
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "#999",
                                        textAlign: "center",
                                        fontSize: "0.7rem",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    By entering your email you agree to our{" "}
                                    <span style={{ textDecoration: "underline" }}>
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span style={{ textDecoration: "underline" }}>
                                        Privacy Policy
                                    </span>
                                    , including receipt of emails and promotions. You can
                                    unsubscribe at any time.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
