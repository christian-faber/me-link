import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Button, ButtonProps, Typography } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AppleIcon from "@mui/icons-material/Apple";
import SchoolIcon from "@mui/icons-material/School";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PublicIcon from "@mui/icons-material/Public";
import logoImage from "../assets/logo-noBG-noText.png";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import styled from "styled-components";
import ModalComponent from "../components/Modal";

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
`;
interface DataItem {
  header: string;
  subheader: string;
  dates: string;
  icon: keyof typeof iconMapping;
  iconType: "custom" | "mui";
}

const data: DataItem[] = [
  {
    header: "Community Pursuit",
    subheader: "Owner | Developer | Contractor",
    dates: "2022 - Present",
    icon: "logoImage",
    iconType: "custom",
  },
  {
    header: "Dev-Island",
    subheader: "Student | Instructor",
    dates: "2022 - 2024",
    icon: "LaptopIcon",
    iconType: "mui",
  },
  {
    header: "Office of Economic Development",
    subheader: "Data Viz & Analysis",
    dates: "2021 - 2022",
    icon: "ShowChartIcon",
    iconType: "mui",
  },
  {
    header: "Work Abroad",
    subheader: "Teaching English | Tourism",
    dates: "2019 - 2021",
    icon: "PublicIcon",
    iconType: "mui",
  },
  {
    header: "Drake University",
    subheader: "Economics | International Business",
    dates: "2015 - 2019",
    icon: "SchoolIcon",
    iconType: "mui",
  },
  {
    header: "Apple",
    subheader: "Technical Specialist",
    dates: "2018 - 2019",
    icon: "AppleIcon",
    iconType: "mui",
  },
  {
    header: "Pre-Degree Work",
    subheader: "Various Positions",
    dates: "2013 - 2018",
    icon: "GroupWorkIcon",
    iconType: "mui",
  },
];

const iconMapping = {
  LaptopIcon: <LaptopIcon />,
  ShowChartIcon: <ShowChartIcon />,
  AppleIcon: <AppleIcon />,
  GroupWorkIcon: <GroupWorkIcon />,
  SchoolIcon: <SchoolIcon />,
  StorefrontIcon: <StorefrontIcon />,
  PublicIcon: <PublicIcon />,
  logoImage: (
    <img src={logoImage} alt="Logo" style={{ width: "24px", height: "24px" }} />
  ),
};

export const Resume = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modal);

  return (
    <ResumeContainer>
      <Box
        sx={{
          marginY: 5,
          marginX: 3,
          backgroundColor: "primary.main",
          borderRadius: "15px",
          padding: { xs: 2, sm: 2 },
          // paddingX: { md: 5, lg:  },
        }}
      >
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
              m: 0,
            },
          }}
        >
          {data.map((item, index) => (
            <Button
              sx={{
                width: "100%",
                color: "black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "lightgray",
                },
              }}
              onClick={() => {
                toggleModal();
              }}
              variant="outlined"
            >
              <TimelineItem key={index} sx={{ width: "100%" }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      // Adjust the size of the dot based on the viewport width
                      width: { xs: "20px", sm: "25px", md: "30px", lg: "35px" },
                      height: {
                        xs: "20px",
                        sm: "25px",
                        md: "30px",
                        lg: "35px",
                      },
                      // Smooth transition for size changes
                      transition: "width 0.5s ease, height 0.5s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: (() => {
                        switch (index % 4) {
                          case 0:
                            return "#9ce7f5"; // First color
                          case 1:
                            return "#8239ff88"; // Second color
                          case 2:
                            return "#ff5e428a"; // Third color
                          case 3:
                            return "#303030"; // Fourth color
                          default:
                            return "#9d4343";
                        }
                      })(),
                    }}
                  >
                    {item.iconType === "mui"
                      ? React.cloneElement(iconMapping[item.icon], {
                          sx: {
                            // Adjust the size of the icon based on the viewport width
                            fontSize: {
                              xs: "1rem",
                              sm: "1.25rem",
                              md: "1.5rem",
                              lg: "1.75rem",
                            },
                            // Smooth transition for size changes
                            transition: "font-size 0.5s ease",
                          },
                        })
                      : iconMapping["logoImage"]}
                  </TimelineDot>
                  {index < data.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    sx={{
                      fontSize: { md: "1rem", lg: "1.5rem", xl: "1.85rem" },
                    }}
                  >
                    {item.header}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "1rem", lg: "1.5rem", xl: "1.85rem" },
                      color: "darkgrey",
                    }}
                  >
                    {item.subheader}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "1rem", lg: "1.5rem", xl: "1.75rem" },
                      color: "darkgrey",
                    }}
                  >
                    {item.dates}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Button>
          ))}
        </Timeline>
      </Box>
    </ResumeContainer>
  );
};
