import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StoreIcon from "@mui/icons-material/Store";

export const Summary = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          component="section"
          sx={{
            m: { sm: 1, md: 3 },
            p: 1,
            border: "1px solid grey",
            borderRadius: "10px",
            bgcolor: "#fffff075",
          }}
        >
          <Card sx={{ p: { xs: 1, sm: 2, md: 2 }, m: { xs: 1, sm: 1, md: 3 } }}>
            <CardContent>
              <CodeIcon sx={{ fontSize: 40 }} />
              <Typography variant="h5" component="h2">
                Software Development
              </Typography>
              <Typography variant="body2" component="p">
                I am a software developer with experience in React.js, Vanilla
                JavaScript, Typescript, HTML5, CSS, Express.js, Node.js,
                MongoDB, and multiple library packages.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ p: { xs: 1, sm: 2, md: 2 }, m: { xs: 1, sm: 1, md: 3 } }}>
            <CardContent>
              <QueryStatsIcon sx={{ fontSize: 40 }} />
              <Typography variant="h5" component="h2">
                Data Analysis
              </Typography>
              <Typography variant="body2" component="p">
                After studying Economics and International Business in college,
                I left with skills in Excel, Stata, and Tableau. During COVID
                lockdowns, I started practicing Python and SQL while applying to
                work. Eventually, I was hired as a Data Analytics and
                Visualization Specialist for focusing on economic data.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ p: { xs: 1, sm: 2, md: 2 }, m: { xs: 1, sm: 1, md: 3 } }}>
            <CardContent>
              <StoreIcon sx={{ fontSize: 40 }} />
              <Typography variant="h5" component="h2">
                Entrepreneurship
              </Typography>
              <Typography variant="body2" component="p">
                I started my first business in 2019, teaching English online and
                in person to a wide variety of students and classes. I changed
                career paths and then started my current business, Community
                Pursuit, in 2022. I use my business to take on projects that I
                am interested in and that support folks working to positively
                impact the community.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};
export default Summary;
