import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

type SlideMenuProps = {
  setMenuOpen: (open: boolean) => void;
};

export const SlideMenu: React.FC<SlideMenuProps> = ({ setMenuOpen }) => {
  return (
    <>
      <Box sx={{ m: 5, display: "flex", justifyContent: "center" }}>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemButton onClick={() => setMenuOpen(false)}>
                <ListItemIcon>
                  <HomeIcon sx={{ fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontSize: { xs: "30px", sm: "35px", md: "40px" },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/resume"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton onClick={() => setMenuOpen(false)}>
                <ListItemIcon>
                  <AccountBoxIcon sx={{ fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Resume"
                  primaryTypographyProps={{
                    fontSize: { xs: "30px", sm: "35px", md: "40px" },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton onClick={() => setMenuOpen(false)}>
                <ListItemIcon>
                  <DashboardCustomizeIcon sx={{ fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Portfolio"
                  primaryTypographyProps={{
                    fontSize: { xs: "30px", sm: "35px", md: "40px" },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem> */}
        </List>
      </Box>
    </>
  );
};
export default SlideMenu;
