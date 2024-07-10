import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Button, Typography } from "@mui/material";
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
  modalBullets: string[];
}

const data: DataItem[] = [
  {
    header: "Community Pursuit",
    subheader: "Owner | Developer | Contractor",
    dates: "2022 - Present",
    icon: "logoImage",
    iconType: "custom",
    modalBullets: [
      "Developed a websites for a local businesses and artists",
      "Created a custom Project Management system in Airtable for the client to develop and monitor a strategic plan",
      "Integrated an inventory management system with an online storefront with an automated data pipeline",
    ],
  },
  {
    header: "Dev-Island",
    subheader: "Student | Instructor",
    dates: "2022 - 2024",
    icon: "LaptopIcon",
    iconType: "mui",
    modalBullets: [
      "After completing the bootcamp, I returned to assist in instructing the next cohort. I coded along with folks, troubleshot, and led a few lectures and projects. While still not as experienced as other instructors, I was able to be one of the first to demonstrate a key skill I learned while I was a student, which was how to ask for help. Along the way, I refreshed myself with fundamental javascript and picked up new skills that the curriculum expanded to cover (backend!).",
      "FullStack development bootcamp.",
      "Focused on HTML, CSS, JavaScript, ReactJS, MongoDB, ExpressJS and Node.js.",
      "Professional development practices and studies.",
    ],
  },
  {
    header: "Office of Economic Development",
    subheader: "Data Viz & Analysis",
    dates: "2021 - 2022",
    icon: "ShowChartIcon",
    iconType: "mui",
    modalBullets: [
      "Tableau Dashboards: Updated, cleaned, and modified input data (Tableau Prep).",
      "Built dynamic, interactive visuals from data queried through Tableau .hyper files (Tableau Desktop).",
      "Publish and share data through servers and embed codes or through static reports.",
      "Data collection and database management: Created input methods through forms (in-person, Google/Microsoft/Airtable/Other Forms).",
      "Input and cleaned shared databases (Excel, Google Sheets, Airtable).",
      "Sourced information in different formats from public datasets (Census, DBEDT, DOA, BLS, etc.)",
      "Consistent communication and collaboration with coworkers.",
      "Learned whom to ask for help according to strengths and experiences.",
      "Learned how to utilize Microsoft tools to communicate and share online.",
      "Mostly remote work with regular time dedicated to in-person meetings.",
      "Descriptive statistic visuals for Kauaʻi Comprehensive Economic Development Strategy (CEDS).",
      "Data updates from Kauai Census, DBEDT, BLS, and other public sources.",
      "Web posts and website changes (via Wordpress and Tableau Server).",
    ],
  },
  {
    header: "Work Abroad",
    subheader: "Teaching English | Tourism",
    dates: "2019 - 2021",
    icon: "PublicIcon",
    iconType: "mui",
    modalBullets: [
      "Coordinate daily logistics and scheduling for three students",
      "Find creative solutions and resolutions to every day problems",
      "Effectively teach and tutor English to children of different ages and levels",
      "Organize and execute creative events and activities for learning and socializing",
      "Operate and navigate in a foreign environment using French language skills",
      "Orchestrate English lesson plans based on pre-made material",
      "Communicate using multiple tactics in order to compensate for language barriers",
      "Provide culture sensitive material to a diverse array of customers from different origins and backgrounds",
      "Autonomous organization and management of scheduling",
      "Prepare and execute presentations to ensure student understanding",
      "Acquire feedback from clients and apply in future lessons",
      "Practice leadership and communication skills to evaluate the needs of the client",
      "Use in-house presentation software for effective presentations",
    ],
  },
  {
    header: "Drake University",
    subheader: "Economics | International Business",
    dates: "2015 - 2019",
    icon: "SchoolIcon",
    iconType: "mui",
    modalBullets: [
      "BSBA from Drake Business School",
      "Major in Economics and International Business",
      "Additional coursework in Leadership and Psychology",
      "Leadership at Sea | Commonwealth of the Bahamas (2017)",
      "American Business School of Paris (2018)",
    ],
  },
  {
    header: "Apple",
    subheader: "Technical Specialist",
    dates: "2018 - 2019",
    icon: "AppleIcon",
    iconType: "mui",
    modalBullets: [
      "Utilize company resources to diagnose issues with personal devices",
      "Trained to use in-house software and applications to perform technical duties",
      "Build and repair customer relationships with strong positioning and communication",
      "Work with iOS software to provide complete solutions for customers",
    ],
  },
  {
    header: "Pre-Degree Work",
    subheader: "Various Positions",
    dates: "2013 - 2018",
    icon: "GroupWorkIcon",
    iconType: "mui",
    modalBullets: [
      "Aeropostale Sales Lead",
      "Drake University Resident Assistant",
      "ChenMed Business Intern",
      "Coborn's Inc. Customer Service Representative",
    ],
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
  const [activeItemData, setActiveItemData] = useState<DataItem | null>(null); // State to track active item's modalBullets

  const toggleModal = (itemData?: DataItem) => {
    if (itemData) {
      setActiveItemData(itemData || null); // Set the active item's data
    } else {
      setActiveItemData(null);
    }
    setModalOpen(!modalOpen);
  };

  return (
    <div>
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
                  toggleModal(item);
                }}
                variant="outlined"
                key={index}
              >
                <TimelineItem key={index} sx={{ width: "100%" }}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        // Adjust the size of the dot based on the viewport width
                        width: {
                          xs: "20px",
                          sm: "25px",
                          md: "30px",
                          lg: "35px",
                        },
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
      <ModalComponent
        open={modalOpen}
        handleClose={() => toggleModal()}
        data={activeItemData}
      />
    </div>
  );
};
