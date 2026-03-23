"use client";

import { Button } from "@heroui/react"; // assuming this is where Button comes from
import {
  Box,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Listing time: 02:00 UTC
const TARGET_DATE = new Date("2026-02-02T02:00:00Z");
// const TARGET_DATE = new Date(Date.now() + 10000);

export default function ListingCountdownModal() {
  const [open, setOpen] = useState(false);
  const [isListed, setIsListed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let hasOpened = false;

    const checkTime = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setIsListed(true);
        if (!hasOpened) {
          setOpen(true);
          hasOpened = true;
        }
        return;
      }

      if (!hasOpened) {
        setOpen(true);
        hasOpened = true;
      }
      setIsListed(false);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    checkTime();
    const timer = setInterval(checkTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => setOpen(false);

  if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="listing-countdown-modal-title"
      aria-describedby="listing-countdown-modal-description"
      sx={{ backdropFilter: "blur(3px)" }}
    >
      <Fade in={open} timeout={400}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "90%", md: "85%", lg: "1200px", xl: "1400px" },
            outline: "none",
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxHeight: "90vh",
              height: "auto",
              overflowY: "auto",
              borderRadius: 2,
              border: "1px solid rgba(255,165,0,0.25)",
              boxShadow:
                "0 0 25px rgba(255,140,0,0.2), inset 0 0 15px rgba(255,100,0,0.1)",
              background: "linear-gradient(145deg, #191919cc, #111111cc)",
              backdropFilter: "blur(14px)",
              color: "white",
              "&::-webkit-scrollbar": { width: 6 },
              "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: "rgba(59, 130, 246, 0.4)",
                borderRadius: 3,
              },
            }}
          >
            {/* Close button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#fb923c",
                zIndex: 10,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "#f87171",
                  transform: "scale(1.1)",
                },
              }}
            >
              ✕
            </IconButton>

            {/* Gradient orbs */}
            <Box
              sx={{
                position: "absolute",
                top: -16,
                left: -16,
                width: 80,
                height: 80,
                bgcolor: "rgba(59, 130, 246, 0.15)",
                borderRadius: "50%",
                filter: "blur(50px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -16,
                right: -16,
                width: 80,
                height: 80,
                bgcolor: "rgba(251, 191, 36, 0.15)",
                borderRadius: "50%",
                filter: "blur(50px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Main content */}
            <Box sx={{ p: { xs: 2, sm: 4, md: 5 }, pt: { xs: 6, md: 5 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 3, md: 5 },
                  minWidth: "100%",
                }}
              >
                {/* Left - Banner Image */}
                <Box
                  sx={{
                    flex: { xs: "none", md: "0 0 45%" },
                    width: { xs: "100%", md: "55%" },
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 8px 32px rgba(59, 130, 246, 0.25)",
                      border: "1px solid rgba(255,165,0,0.2)",
                    }}
                  >
                    <Image
                      src="/assets/images/bannerListing.png"
                      alt="Pione Chain Listed on BitMart"
                      width={600}
                      height={800}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                      priority
                    />
                  </Box>
                </Box>

                {/* Right - Content */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: { xs: "100%", md: "45%" },
                    py: { xs: 1, md: 2 },
                  }}
                >
                  {/* Countdown - only before listing */}
                  {!isListed && (
                    <Box sx={{ textAlign: "center", mb: 5 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          background:
                            "linear-gradient(to right, #fbbf24, #f59e0b, #ea580c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: { xs: "1.4rem", md: "1.6rem" },
                          mb: 2,
                        }}
                      >
                        🚀 LISTING COUNTDOWN
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: { xs: 1.5, sm: 2 },
                          flexWrap: "wrap",
                        }}
                      >
                        {[
                          { value: timeLeft.days, label: "DAYS" },
                          { value: timeLeft.hours, label: "HOURS" },
                          { value: timeLeft.minutes, label: "MIN" },
                          { value: timeLeft.seconds, label: "SEC" },
                        ].map((item) => (
                          <Box
                            key={item.label}
                            sx={{
                              bgcolor: "rgba(59, 130, 246, 0.2)",
                              color: "white",
                              borderRadius: 2,
                              minWidth: { xs: 70, sm: 85 },
                              py: { xs: 1.5, sm: 2 },
                              px: 1.5,
                              textAlign: "center",
                              fontWeight: 600,
                              border: "2px solid rgba(59, 130, 246, 0.4)",
                              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
                            }}
                          >
                            <Typography
                              variant="h5"
                              sx={{
                                lineHeight: 1,
                                fontSize: { xs: "1.6rem", sm: "2rem" },
                                fontWeight: 700,
                              }}
                            >
                              {item.value.toString().padStart(2, "0")}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                                opacity: 0.8,
                                mt: 0.5,
                                display: "block",
                              }}
                            >
                              {item.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* Success Message - only after listing */}
                  {isListed && (
                    <Box sx={{ textAlign: "center", mb: 5, animation: "fadeIn 1s ease-in" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          background: "linear-gradient(to right, #4ade80, #22c55e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: { xs: "1.6rem", md: "2.2rem" },
                          mb: 1,
                          textShadow: "0 0 30px rgba(74, 222, 128, 0.3)",
                        }}
                      >
                        🚀 OFFICIALLY LISTED!
                      </Typography>

                    </Box>
                  )}

                  {/* Announcement + Dashed Frame with Badge & Button */}
                  <Box sx={{ textAlign: "center", color: "#e5e7eb" }}>


                    {/* Dashed border container */}
                    <Box
                      sx={{
                        border: "2px dashed rgba(96, 165, 250, 0.45)",
                        borderRadius: 3,
                        p: { xs: 2, sm: 3 },
                        mb: 4,
                        bgcolor: "rgba(30, 58, 138, 0.08)",
                        backdropFilter: "blur(4px)",
                        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.12)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(96, 165, 250, 0.75)",
                          boxShadow: "0 6px 25px rgba(59, 130, 246, 0.22)",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          lineHeight: 1.7,
                        }}
                      >
                        We are pleased to announce that{" "}
                        <strong style={{ color: "#fbbf24" }}>Pione Chain (PIO)</strong> is
                        officially listed on{" "}
                        <strong style={{ color: "#60a5fa" }}>BitMart</strong>.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: "center",
                          justifyContent: "center",
                          gap: { xs: 2.5, sm: 4 },
                          flexWrap: "wrap",
                        }}
                      >
                        {/* Trading Pair Badge */}
                        <Link
                          href="https://www.bitmart.com/en-US/trade/PIO_USDT"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            radius="full"
                            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-600/30 font-semibold text-sm sm:text-base px-6 sm:px-9 h-10 sm:h-11 transition-all duration-300"
                            endContent={<ExternalLink size={16} />}
                          >
                            TRADE PIO/USDT
                          </Button>
                        </Link>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        lineHeight: 1.7,
                      }}
                    >
                      This milestone reflects our continued commitment to building blockchain infrastructure that supports{" "}
                      <strong style={{ color: "#fbbf24" }}>
                        Real-World Assets (RWA)
                      </strong>{" "}
                      and real-world use cases, enabling sustainable ecosystem growth.
                    </Typography>


                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    color: "#d1d5db",
                  }}
                >
                  We look forward to expanding the Pione ecosystem together with our
                  global partners.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}