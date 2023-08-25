import React, { useState, useEffect, useRef } from "react";

// React DOM
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer, toggleTheme } from "../Redux/ui/uiActions";
import { IAppState } from "@Redux/rootReducer";

// Material UI
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/BottomNavigationAction";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Switch from "@mui/material/Switch";

// Material Styles
import { makeStyles } from "@mui/styles";

import LightMode from "@mui/icons-material/Brightness4";
import DarkMode from "@mui/icons-material/BrightnessHigh";
import HomeIcon from "@mui/icons-material/Home";
import GithubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Public";
import InstallIcon from "@mui/icons-material/GetApp";

// ======================================================================================

type Anchor = "left";

const SideDrawer: React.FC<any> = () => {
  const [installable, setInstallable] = useState(false);
  let defferedPrompt: any = useRef(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);
  const isSideDrawerOpen = useSelector((state: IAppState) => state.ui.isSideDrawerOpen);

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

  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      {
        <List subheader={<ListSubheader>Links</ListSubheader>}>
          <ListItem component={Link} to="/">
            <HomeIcon color="action" />

            <ListItemText primary="Home" />
          </ListItem>

          <ListItem component={"a"} href="https://github.com/besSejrani">
            <GithubIcon color="action" />
            <ListItemText primary="Github" />
          </ListItem>

          <ListItem component={"a"} href="https://robohash.org/">
            <WebIcon color="action" />
            <ListItemText primary="RoboHash" />
          </ListItem>
        </List>
      }

      <Divider />

      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItem>
          {isDarkTheme ? <DarkMode color="action" /> : <LightMode color="action" />}
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
            <InstallIcon color="action" />
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

// ======================================================================================

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});
