import React from "react";

// React DOM
import { NavLink as Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { toggleSideDrawer } from "../Redux/ui/uiActions";

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
            <Link to="/" activeStyle={{ color: "white", textDecoration: "none" }}>
              RoboFriend
            </Link>
          </Typography>
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
