import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AppleIcon from "@mui/icons-material/Apple";
import SchoolIcon from "@mui/icons-material/School";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PublicIcon from "@mui/icons-material/Public";
import logoImage from "../assets/logo-noBG-noText.png";
import ButtonBase from "@mui/material/ButtonBase";

export const Resume = () => {
  return (
    <Box
      max-width="sm"
      sx={{
        marginTop: 10,
        marginX: 3,
        backgroundColor: "primary.main",
        borderRadius: "15px",
      }}
    >
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <img
                src={logoImage}
                alt="Logo"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Community Pursuit</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "darkgrey" }}>
              Owner | Developer | Contractor
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <LaptopIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Dev-Island</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "darkgrey" }}>
              Student | Instructor
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <ShowChartIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Office of Economic Development</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "darkgrey" }}>
              Data Viz & Analysis
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <PublicIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Working Abroad</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "darkgrey" }}>
              Teaching English | Tourism
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Drake University</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "darkgrey" }}>
              Economics | International Business
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <AppleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Apple</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "darkgrey" }}>
              Technical Specialist
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <StorefrontIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>Retail & Customer Service</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
