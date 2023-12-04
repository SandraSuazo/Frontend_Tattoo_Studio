import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserMenu } from "./components/UserMenu.jsx";
import { DesktopMenu } from "./components/DesktopMenu.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { userData } from "../../core/userSlice.js";

export const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { token, user } = useSelector(userData);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    if (anchorElNav) handleCloseNavMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => handleNavigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
          >
            <img
              src="src/assets/tattoo_logo/Logo_Studio_Tattoo.png"
              alt="Logo"
              style={{ width: 60, height: 60 }}
            />
          </Typography>
          <MobileMenu
            token={token}
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            handleNavigate={handleNavigate}
          />
          <Typography
            onClick={() => handleNavigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
          >
            <img
              src="src/assets/tattoo_logo/Logo_Studio_Tattoo.png"
              alt="Logo"
              style={{ width: 60, height: 60 }}
            />
          </Typography>
          <DesktopMenu token={token} handleNavigate={handleNavigate} />
          <UserMenu token={token} userRole={user && user.role} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
