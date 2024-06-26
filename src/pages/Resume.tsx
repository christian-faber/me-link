import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Box } from "@mui/material";

export const Resume = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        marginX: 3,
        backgroundColor: "primary.main",
        borderRadius: "15px",
      }}
    >
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <Typography variant="h6" component="span">
              Software Engineer
            </Typography>
            <Typography>June 2018 - Present</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography>Developing and maintaining web applications</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* Repeat for other positions */}
      </Timeline>
    </Box>
  );
};
