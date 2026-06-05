"use client";

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

interface RoadmapContent {
  title: string;
  desc: string;
  isUppercase?: boolean;
}

interface RoadmapItem {
  date: string;
  contents: RoadmapContent[];
}

const roadmapItems: RoadmapItem[] = [
  {
    date: "September 5, 2019",
    contents: [
      {
        title: "IDEA PLANNING",
        desc: "description1"
      }
    ]
  },
  {
    date: "November 11, 2021",
    contents: [
      {
        title: "LAUNCH OF SWAPTOBE (TOBECHAIN)",
        desc: "description2"
      }
    ]
  },
  {
    date: "January 1, 2024",
    contents: [
      {
        title: "PROJECT TOBECHAIN RENAMED TO PIONE CHAIN",
        desc: "description3"
      }
    ]
  },
  {
    date: "November 23, 2024",
    contents: [
      {
        title: "PIONE GROUP ESTABLISHED",
        desc: "description4"
      }
    ]
  },
  {
    date: "February 17, 2025",
    contents: [
      {
        title: "PIONE CHAIN OFFICIALLY LAUNCHED",
        desc: "description5"
      }
    ]
  },
  {
    date: "April 4, 2025",
    contents: [
      {
        title: "PIONE WALLET OFFICIALLY LAUNCHED",
        desc: "description6"
      }
    ]
  },
  {
    date: "June 1, 2025",
    contents: [
      {
        title: "REGISTER TO PARTICIPATE IN SANDBOX FOR PILOT DEPLOYMENT OF TYPICAL ECOSYSTEMS",
        desc: "description7"
      }
    ]
  },
  {
    date: "Quarter 4, 2025",
    contents: [
      {
        title: "THE OFFICIAL LISTING OF PIO COIN ON DIGITAL ASSET EXCHANGES",
        desc: "description8"
      },
      {
        title: "THE OFFICIAL LISTING OF PIO COIN ON DIGITAL ASSET EXCHANGES2",
        desc: "description82"
      }
    ]
  },
  {
    date: "December 2025",
    contents: [
      {
        title: "launch DEX P2P (Pioneswap.com)",
        desc: "descriptiondec"
      },
      {
        title: "Pione Dream Start up",
        desc: "descriptiondec2",
        isUppercase: true
      }
    ]
  },
  {
    date: "January 2026",
    contents: [
      {
        title: "DIGITAL HEALTHCARE & SUPER APP PAYMENT DEVELOPMENT",
        desc: "description9"
      }
    ]
  },
  {
    date: "Quarter 1, 2026",
    contents: [
      {
        title: "Listing on centralized exchanges (CEXs) to expand international markets and drive sustainable growth across the Pione Chain ecosystem",
        desc: "description17"
      }
    ]
  },
  {
    date: "April 2026",
    contents: [
      {
        title: "Pioneer Security – Digitalization of Securities Assets for the RWA Era",
        desc: "description10"
      }
    ]
  },
  {
    date: "Quarter 2, 2026",
    contents: [
      {
        title: "Pione BOS Chain Mainnet Launch",
        desc: "description16"
      }
    ]
  },
  {
    date: "June, 2026",
    contents: [
      {
        title: "LAUNCH OF PIONE TRACE",
        desc: "description_pionetrace"
      }
    ]
  },
  {
    date: "October 2026",
    contents: [
      {
        title: "CORE INFRASTRUCTURE OPERATION - FOUNDATION FOR THE RWA ECOSYSTEM",
        desc: "description18"
      }
    ]
  },
  {
    date: "December 2026",
    contents: [
      {
        title: "LAUNCH OF PIONE DAPPSTORE – RWA APPLICATION GATEWAY",
        desc: "description19"
      }
    ]
  },
  {
    date: "Quarter 4, 2026",
    contents: [
      {
        title: "DIGITAL MEDICAL DEVELOPMENT & PAYMENT SUPER APP",
        desc: "description11"
      }
    ]
  },
  {
    date: "Quarter 1, 2027",
    contents: [
      {
        title: "Pione Chain Ecosystem Operates Strongly",
        desc: "description14"
      }
    ]
  },
  {
    date: "march 2027",
    contents: [
      {
        title: "LAUNCH OF PIONE CHARITY – TRANSPARENT COMMUNITY CONTRIBUTIONS",
        desc: "description20"
      }
    ]
  },
  {
    date: "May 2027",
    contents: [
      {
        title: "LAUNCH OF PIONE GAME – RWA-ENABLED WEB3 GAMING PLATFORM",
        desc: "description21"
      }
    ]
  },
  {
    date: "July 2027",
    contents: [
      {
        title: "LAUNCH OF PIONE MART – DECENTRALIZED E-COMMERCE MARKETPLACE",
        desc: "description22"
      }
    ]
  },
  {
    date: "September 2027",
    contents: [
      {
        title: "LAUNCH OF PIONE PAY – PAYMENT BRIDGE FOR RWA APPLICATIONS",
        desc: "description23"
      }
    ]
  },
  {
    date: "November 2027",
    contents: [
      {
        title: "STABLE OPERATIONS & INTERNATIONAL RWA ECOSYSTEM EXPANSION",
        desc: "description24"
      }
    ]
  },
  {
    date: "January 2028",
    contents: [
      {
        title: "INITIATION OF IPO & SECURITY TOKEN (STO) ROADMAP",
        desc: "description25"
      }
    ]
  },
  {
    date: "April 2028",
    contents: [
      {
        title: "SECURITY TOKEN ISSUANCE PILOT (STO PILOT)",
        desc: "description26"
      }
    ]
  },
  {
    date: "July–September 2028",
    contents: [
      {
        title: "IPO / STO EXECUTION – COMPLETION OF A GLOBAL RWA ECOSYSTEM",
        desc: "description27"
      }
    ]
  }
];

export default function TimeLineCustom() {
  const matches = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation();

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
      {roadmapItems.map((item, idx) => {
        const isCardOnLeft = idx % 2 === 1;

        return (
          <TimelineItem key={idx}>
            {!matches && (
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align={isCardOnLeft ? "left" : "right"}
                variant="body2"
                color="#fff"
                fontSize={17}
              >
                <span className="inline-block text-lg border p-1 px-3 w-fit rounded-full border-[#ff6a00] bg-[#2e0d00]">
                  {t(`roadmap.${item.date}`)}
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
              <div className={`flex ${!matches && isCardOnLeft ? "justify-end" : "justify-start"}`}>
                <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[600px] w-full">
                  <Grid size={20} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: !matches && isCardOnLeft ? "end" : "start",
                    }}
                  >
                    {item.contents.map((content, cIdx) => (
                      <Box
                        key={cIdx}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: !matches && isCardOnLeft ? "end" : "start",
                          width: "100%",
                          marginTop: cIdx > 0 ? 3 : 0,
                        }}
                      >
                        <Typography
                          fontSize={17}
                          component="span"
                          color="#ea580b"
                          fontWeight={600}
                          textTransform={content.isUppercase ? "uppercase" : "none"}
                        >
                          {t(`roadmap.${content.title}`)}
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
                            {t(`roadmap.${item.date}`)}
                          </TimelineOppositeContent>
                        )}
                        <Typography color="#CCCC" fontSize={13} marginTop={1}>
                          {t(`roadmap.${content.desc}`)}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
