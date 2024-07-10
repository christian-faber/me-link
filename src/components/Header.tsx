import { Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import headshot from "../assets/headshot.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import EventIcon from "@mui/icons-material/Event";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiTableau } from "react-icons/si";
import { IconContext } from "react-icons";

export const Header = () => {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <Container maxWidth="sm">
        <Box
          component="section"
          sx={{
            m: 3,
            p: 1,
            border: "1px solid grey",
            borderRadius: "50%",
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={headshot}
            alt="Professional"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "1em",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to="https://github.com/christian-faber"
            sx={{ padding: "16px" }}
          >
            <GitHubIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://www.linkedin.com/in/christianfaber/"
            sx={{ padding: "16px" }}
          >
            <LinkedInIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://public.tableau.com/app/profile/christian1024"
            sx={{ padding: "16px" }}
          >
            <SiTableau />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "1em",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}
            sx={{ padding: "16px" }}
          >
            <PhoneIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to={`mailto:${import.meta.env.VITE_EMAI}`}
            sx={{ padding: "16px" }}
          >
            <MailIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://calendar.google.com/calendar/selfsched?sstoken=UU15OWl1ejhTS2tKfGRlZmF1bHR8NTczODc3OWM0NDExYzU3YTY0YjAzZmVkZWI2ZTJlOWE"
            sx={{ padding: "16px" }}
          >
            <EventIcon />
          </Button>
        </Box>
      </Container>
    </IconContext.Provider>
  );
};

export default Header;
