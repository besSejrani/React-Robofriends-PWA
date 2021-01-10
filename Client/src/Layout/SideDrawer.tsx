import React, { useState, useEffect } from "react";
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

type Anchor = "left";

const SideDrawer: React.FC<any> = () => {
  const [installable, setInstallable] = useState(false);

  let deferredPrompt;

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      // Log install to analytics
      console.log("INSTALL: Success");
    });
  }, []);

  const handleInstallClick = (e) => {
    // Hide the app provided install promotion
    setInstallable(false);
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  const classes = useStyles();
  const dispatch = useDispatch();

  const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);
  const isSideDrawerOpen = useSelector((state: IAppState) => state.ui.isSideDrawerOpen);

  const list = (anchor: Anchor) => (
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

        {installable && (
          <ListItem>
            <ListItemIcon>
              <InstallIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-bluetooth" primary="Install PWA" />
            <ListItemSecondaryAction>
              <Switch
                onChange={handleInstallClick}
                edge="end"
                inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>

      <Divider />
    </div>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map((anchor) => (
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
