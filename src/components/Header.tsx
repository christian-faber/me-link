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
            bgcolor: "ivory",
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
            to="https://public.tableau.com/profile/your_username"
            sx={{ padding: "16px" }}
          >
            <SiTableau />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://github.com/your_username"
            sx={{ padding: "16px" }}
          >
            <GitHubIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://linkedin.com/in/your_username"
            sx={{ padding: "16px" }}
          >
            <LinkedInIcon />
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
            to="https://public.tableau.com/profile/your_username"
            sx={{ padding: "16px" }}
          >
            <PhoneIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://github.com/your_username"
            sx={{ padding: "16px" }}
          >
            <MailIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="https://linkedin.com/in/your_username"
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
