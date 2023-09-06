import React, { useEffect, useState, useRef } from "react";

// React DOM
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Components
import ButtonHeaderAction from "@Components/Buttons/ButtonHeaderAction";

// Material Styles
import { makeStyles } from "@mui/styles";

// Icons
import { BsSun } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";

// ======================================================================================

const Header: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  let defferedPrompt: any = useRef(null);

  // ==============================
  //           State
  // ==============================

  const [installable, setInstallable] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // ==============================
  //          Events
  // ==============================

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      defferedPrompt.current = event;
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      console.log("INSTALL: Success");
    });
  }, [installable]);

  const handleInstallClick = () => {
    if (defferedPrompt) {
      defferedPrompt.current.prompt();

      defferedPrompt.current.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "dismissed") {
          console.log("user cancelled installation");
        } else {
          console.log("user added to homescreen");
          defferedPrompt.current = null;
          setInstallable(false);
        }
      });
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              RoboFriend
            </Link>
          </Typography>

          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box style={{ display: "flex", margin: "0rem 1rem 0rem 0rem" }}>
              <Link to="/" style={{ textDecoration: "none", margin: "0rem 1rem 0rem 0rem" }}>
                <Typography textAlign="center" style={{ color: "white" }}>
                  Home
                </Typography>
              </Link>

              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography textAlign="center" style={{ color: "white" }}>
                  Login
                </Typography>
              </Link>
            </Box>

            {/* <ButtonHeaderAction action={() => Action()}> */}
            <Box style={{ margin: "0rem 0.2rem 0rem 0rem" }}>
              <ButtonHeaderAction>
                {/* {darkModeState === "dark" ? ( */}
                {true ? <BsSun style={{ fontSize: "18px" }} /> : <IoMoonOutline style={{ fontSize: "18px" }} />}
              </ButtonHeaderAction>
            </Box>

            {installable && (
              <Box style={{ margin: "0rem 1rem 0rem 0rem" }}>
                <ButtonHeaderAction>
                  {<AiOutlineDownload style={{ fontSize: "1.4rem" }} onClick={handleInstallClick} />}
                </ButtonHeaderAction>
              </Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Bes"
                    src={`https://robohash.org/bes?size=100x100`}
                    style={{ border: "1px solid white" }}
                  />
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

// ======================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "64px",
    position: "relative",
    zIndex: 99999999,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
    alignItems: "center",
    justifyContent: "center",
  },
}));
