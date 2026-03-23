"use client";

// import SquareIcon from "@mui/icons-material/Square";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { Grid } from "@/components/ui/Grid";

export default function TimeLineCustom() {
  const matches = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation();

  // console.log(matches, "matches");
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      position={matches ? "right" : "alternate"}
    >
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.September 5, 2019")}
            </span>
          </TimelineOppositeContent>
        )}

        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />

          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.IDEA PLANNING")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.September 5, 2019")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {t("roadmap.description1")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.November 11, 2021")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t("roadmap.LAUNCH OF SWAPTOBE (TOBECHAIN)")}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.November 11, 2021")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {t("roadmap.description2")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.January 1, 2024")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.PROJECT TOBECHAIN RENAMED TO PIONE CHAIN")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.January 1, 2024")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description3")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.November 23, 2024")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t("roadmap.PIONE GROUP ESTABLISHED")}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.November 23, 2024")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {t("roadmap.description4")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.February 17, 2025")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.PIONE CHAIN OFFICIALLY LAUNCHED")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.February 17, 2025")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {t("roadmap.description5")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.April 4, 2025")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t("roadmap.PIONE WALLET OFFICIALLY LAUNCHED")}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.April 4, 2025")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {t("roadmap.description6")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.June 1, 2025")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t(
                  "roadmap.REGISTER TO PARTICIPATE IN SANDBOX FOR PILOT DEPLOYMENT OF TYPICAL ECOSYSTEMS",
                )}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.June 1, 2025")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description7")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.Quarter 4, 2025")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px] ">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.THE OFFICIAL LISTING OF PIO COIN ON DIGITAL ASSET EXCHANGES",
                  )}
                </Typography>

                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.Quarter 4, 2025")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description8")}
                </Typography>
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                  marginTop={3}
                  textTransform="uppercase"
                >
                  {t(
                    "roadmap.THE OFFICIAL LISTING OF PIO COIN ON DIGITAL ASSET EXCHANGES2",
                  )}
                </Typography>

                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.Quarter 4, 2025")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description82")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.December 2025")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex ">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px] ">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "start" : "end",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t("roadmap.launch DEX P2P (Pioneswap.com)")}
                </Typography>

                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.December 2025")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.descriptiondec")}
                </Typography>
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                  marginTop={3}
                  textTransform="uppercase"
                >
                  {t("roadmap.Pione Dream Start up")}
                </Typography>

                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.December 2025")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.descriptiondec2")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.January 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          {/* Ping effect wrapper */}
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Ping circle */}
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            {/* Main icon */}
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t(
                  "roadmap.DIGITAL HEALTHCARE & SUPER APP PAYMENT DEVELOPMENT",
                )}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.January 2026")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description9")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.Quarter 1, 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "start" : "end",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.Listing on centralized exchanges (CEXs) to expand international markets and drive sustainable growth across the Pione Chain ecosystem",
                  )}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.Quarter 1, 2026")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description17")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.April 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t("roadmap.Pioneer Security – Digitalization of Securities Assets for the RWA Era")}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.April 2026")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description10")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.Quarter 2, 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t(
                  "roadmap.Pione BOS Chain Mainnet Launch",
                )}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.Quarter 2, 2026")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description16")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.June, 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t("roadmap.DIGITAL MEDICAL DEVELOPMENT & PAYMENT SUPER APP")}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.June, 2026")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description11")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.September 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.DEPLOYING PIONE FARM AGRICULTURAL ECOSYSTEM")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.September 2026")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description12")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.October 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.CORE INFRASTRUCTURE OPERATION - FOUNDATION FOR THE RWA ECOSYSTEM",
                  )}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.October 2026")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description18")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.December 2026")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.LAUNCH OF PIONE DAPPSTORE – RWA APPLICATION GATEWAY")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.December 2026")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description19")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.Quarter 1, 2027")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.Pione Chain Ecosystem Operates Strongly")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.Quarter 1, 2027")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description14")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.march 2027")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.LAUNCH OF PIONE CHARITY – TRANSPARENT COMMUNITY CONTRIBUTIONS",
                  )}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.march 2027")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description20")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.May 2027")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.LAUNCH OF PIONE GAME – RWA-ENABLED WEB3 GAMING PLATFORM")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.May 2027")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description21")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.July 2027")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.LAUNCH OF PIONE MART – DECENTRALIZED E-COMMERCE MARKETPLACE",
                  )}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.July 2027")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description22")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.September 2027")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.LAUNCH OF PIONE PAY – PAYMENT BRIDGE FOR RWA APPLICATIONS")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.September 2027")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description23")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.November 2027")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "end" : "start",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.STABLE OPERATIONS & INTERNATIONAL RWA ECOSYSTEM EXPANSION",
                  )}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.November 2027")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description24")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.January 2028")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.INITIATION OF IPO & SECURITY TOKEN (STO) ROADMAP")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.January 2028")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description25")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.April 2028")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="md:flex justify-start">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !matches ? "start" : "end",
                }}
              >
                <Typography
                  fontSize={17}
                  component="span"
                  color="#ea580b"
                  fontWeight={600}
                >
                  {t(
                    "roadmap.SECURITY TOKEN ISSUANCE PILOT (STO PILOT)",
                  )}
                </Typography>
                {matches && (
                  <TimelineOppositeContent
                    sx={{
                      textAlign: "left !important",
                      padding: "0 !important",
                    }}
                    variant="body2"
                    color="#fff"
                    fontSize={14}
                  >
                    {t("roadmap.April 2028")}
                  </TimelineOppositeContent>
                )}
                <Typography color="#CCCC" fontSize={13} marginTop={1}>
                  {" "}
                  {t("roadmap.description26")}
                </Typography>
              </Box>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {!matches && (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#fff"
            fontSize={17}
          >
            <span className="inline-block text-lg border p-1 px-3 w-fit  rounded-full border-[#ff6a00] bg-[#2e0d00]">
              {t("roadmap.July–September 2028")}
            </span>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
          <Box
            sx={{
              position: "relative",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "9999px",
                backgroundColor: "#cccc",
                animation: "ping 1.4s infinite",
                opacity: 0.4,
              }}
            />
            <CircleRoundedIcon htmlColor="#cccc" />
          </Box>
          <TimelineConnector sx={{ bgcolor: "#BDBDBDBD" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className=" flex justify-end">
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800  p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px]">
              <Grid size={20} />
              <Typography
                fontSize={17}
                component="span"
                color="#ea580b"
                fontWeight={600}
              >
                {t("roadmap.IPO / STO EXECUTION – COMPLETION OF A GLOBAL RWA ECOSYSTEM")}
              </Typography>
              {matches && (
                <TimelineOppositeContent
                  sx={{
                    textAlign: "left !important",
                    padding: "0 !important",
                  }}
                  variant="body2"
                  color="#fff"
                  fontSize={14}
                >
                  {t("roadmap.July–September 2028")}
                </TimelineOppositeContent>
              )}
              <Typography color="#CCCC" fontSize={13} marginTop={1}>
                {" "}
                {t("roadmap.description27")}
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
