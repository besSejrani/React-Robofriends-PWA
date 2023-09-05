import React from "react";

// React DOM
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { toggleSideDrawer } from "../Redux/ui/uiActions";

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

// ======================================================================================

const Header: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const pages = ["Login"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  // ==============================
  //           State
  // ==============================

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // ==============================
  //          Events
  // ==============================

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
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(toggleSideDrawer())}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              RoboFriend
            </Link>
          </Typography>

          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Link to="/login">
                <Typography textAlign="center">Login</Typography>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
