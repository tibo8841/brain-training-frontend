import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { checkSessions, endSession } from "./Networking";
import PlayerDisplayCard from "./Game/Multiplayer/PlayerDisplayCard";
import AvatarOption from "./Game/CustomiseProfile/AvatarOptions";
import { getProfile } from "./Networking";

const pages = [];
let settings = ["Login"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [sessionAuthentication, setSessionAuthentication] = useState(false);
  const [avatarID, setAvatarID] = useState(1);

  useEffect(() => {
    checkLoggedIn(); // eslint-disable-next-line
  }, []);

  async function checkLoggedIn() {
    const authentication = await checkSessions();
    authentication
      ? setSessionAuthentication(true)
      : setSessionAuthentication(false);
  }

  const gameName = "Dr Alex's Brain Training";
  let navigate = useNavigate();
  if (sessionAuthentication === true) {
    settings = ["Profile", "Logout"];
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleMenuSelect(event) {
    const target = event.target.innerHTML;
    if (target === "Login") {
      navigate(`/login`);
      handleCloseUserMenu();
    } else if (target === "Profile") {
      navigate("/profile");
      handleCloseUserMenu();
    } else if (target === "Logout") {
      endSession();
      navigate("/");
      handleCloseUserMenu();
      window.location.reload(false);
    }
  }

  function getAvatarLink(avatarID) {
    let chosenAvatar = AvatarOption().find((avatar) => avatar.id === avatarID);
    return chosenAvatar.link;
  }

  async function fetchAvatar() {
    if (sessionAuthentication === true) {
      const user = await getProfile();
      setAvatarID(user.user.profile_picture_id);
    }
  }
  fetchAvatar();
  getAvatarLink(avatarID);
  /*
- render user logged in avatar in header.
  */

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {gameName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {gameName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={getAvatarLink(avatarID)} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleMenuSelect}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// -Header:
//     -Some navigation
//     -Login button
//     -Registration button
//     -Logo takes you to home page
//     -Once logged in, display username
//     -Click on username to go to customise profile
//     -Logout button
