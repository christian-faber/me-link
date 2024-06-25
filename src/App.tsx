import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Summary from "./components/Summary";

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
        },
      },
    },
    MuiCard: {
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
        <Summary />
      </div>
    </ThemeProvider>
  );
}

export default App;
