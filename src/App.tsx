import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fffff0",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="background">
        <Header />
        <Container maxWidth="md">
          <Box
            component="section"
            sx={{
              m: 3,
              p: 1,
              border: "1px solid grey",
              borderRadius: "10px",
              bgcolor: "#fffff0",
            }}
          >
            <Card>
              <CardContent>
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
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Data Analysis
                </Typography>
                <Typography variant="body2" component="p">
                  After studying Economics and International Business in
                  college, I left with skills in Excel, Stata, and Tableau.
                  During COVID lockdowns, I started practicing Python and SQL
                  while applying to work. Eventually, I was hired as a Data
                  Analytics and Visualization Specialist for an Office of
                  Economic Development.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
