import React from "react";
import { NavLink as Link } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";

import { useDispatch } from "react-redux";
import { toggleSideDrawer } from "../redux/ui/uiActions";

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
            {/* <MenuIcon /> */}
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "64px",
      position: "relative",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      alignItems: "center",
      justifyContent: "center",
    },
  }),
);
