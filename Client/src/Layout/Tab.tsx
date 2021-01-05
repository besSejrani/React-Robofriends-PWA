import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Hidden, Link, BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import {Link as LinkDom} from "react-router-dom"

import HomeIcon from '@material-ui/icons/Home';
import GithubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Public";


const TabNavigation = ()=> {

  const classes = useStyles();

  return (
    <Hidden only={["sm", "md", "lg", "xl"]}>

      <BottomNavigation
      className={classes.root}
      >
      <LinkDom to="/" style={{ width: "100%" }}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} style={{ width: "100%" }}/>
      </LinkDom>
      
      <Link href="https://github.com/besSejrani" style={{ width: "100%" }}>

      <BottomNavigationAction label="Github" icon={<GithubIcon />} style={{ width: "100%" }}/>
      </Link>

      <Link href="https://robohash.org/" style={{ width: "100%" }}>
      <BottomNavigationAction label="API" icon={<WebIcon />} style={{ width: "100%", justifySelf: "center" }}/>
      </Link>
    </BottomNavigation>

    </Hidden>
  );
}

export default TabNavigation


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});




