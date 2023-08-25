// React DOM
import { Link } from "react-router-dom";

// Material UI
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// Material Styles
import { makeStyles } from "@mui/styles";

import HomeIcon from "@mui/icons-material/Home";
import GithubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Public";

// ======================================================================================

const TabNavigation = () => {
  const classes = useStyles();

  return (
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
  );
};

export default TabNavigation;

// ======================================================================================

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});
