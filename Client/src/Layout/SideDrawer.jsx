import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  Switch,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import DarkMode from "@material-ui/icons/Brightness4";
import HomeIcon from "@material-ui/icons/Home";
import GithubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Public";
import InstallIcon from "@material-ui/icons/GetApp";

import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer, toggleTheme } from "../redux/ui/uiActions";
import { IAppState } from "src/redux/rootReducer";

//type Anchor = "left";

const SideDrawer = () => {
  const [installable, setInstallable] = useState(false);

  let defferedPrompt = useRef(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      defferedPrompt.current = event;
      console.log("bla", defferedPrompt.current);
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
        console.log(choiceResult.outcome);

        if (choiceResult.outcome === "dismissed") {
          console.log("user cancelled installation");
        } else {
          console.log("user added to homescreen");
        }

        defferedPrompt = null;
        setInstallable(false);
      });
    }
  };

  const classes = useStyles();
  const dispatch = useDispatch();

  const isDarkTheme = useSelector((state) => state.ui.isDarkTheme);
  const isSideDrawerOpen = useSelector((state) => state.ui.isSideDrawerOpen);

  const list = (anchor) => (
    <div className={classes.list}>
      {
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button component={"a"} href="https://github.com/besSejrani">
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>

          <ListItem button component={"a"} href="https://robohash.org/">
            <ListItemIcon>
              <WebIcon />
            </ListItemIcon>
            <ListItemText primary="RoboHash" />
          </ListItem>
        </List>
      }

      <Divider />

      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Dark Mode" />
          <ListItemSecondaryAction>
            <Switch
              checked={isDarkTheme}
              onChange={() => dispatch(toggleTheme())}
              edge="end"
              inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <InstallIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Install PWA" />
          <ListItemSecondaryAction>
            <Button onClick={handleInstallClick}>click</Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <Divider />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={isSideDrawerOpen} onClose={() => dispatch(toggleSideDrawer())}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideDrawer;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});
