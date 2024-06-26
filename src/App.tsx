import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Drawer, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import SlideMenu from "./components/SlideMenu";
import { Resume } from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fffff0",
    },
    secondary: {
      main: "#808000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          backgroundColor: "#fffff0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          backgroundColor: "#fffff0",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: "50%",
        },
      },
    },
  },
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="background">
        <Fab
          color="primary"
          sx={{ m: 1, position: "absolute", top: 2, right: 2 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon sx={{ fontSize: 40 }} />
        </Fab>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          PaperProps={{ sx: { width: { sm: "66%", md: "33%" } } }}
        >
          <CloseIcon
            sx={{ fontSize: 40, m: 1, position: "absolute", top: 2, right: 2 }}
            onClick={() => setMenuOpen(false)}
          />
          <SlideMenu setMenuOpen={setMenuOpen} />
        </Drawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
