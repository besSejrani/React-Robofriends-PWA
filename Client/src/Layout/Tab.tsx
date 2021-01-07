import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import GithubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Public";

const TabNavigation = () => {
  const classes = useStyles();

  return (
    <Hidden only={["sm", "md", "lg", "xl"]}>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />

        <BottomNavigationAction
          component={"a"}
          href="https://github.com/besSejrani"
          label="Github"
          icon={<GithubIcon />}
          style={{ width: "100%" }}
        />

        <BottomNavigationAction
          component={"a"}
          href="https://robohash.org/"
          label="API"
          icon={<WebIcon />}
          style={{ width: "100%", justifySelf: "center" }}
        />
      </BottomNavigation>
    </Hidden>
  );
};

export default TabNavigation;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});
