import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Hidden, Tabs, Tab, Link } from "@material-ui/core";

import GithubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

export default function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Hidden only={["sm", "md", "lg", "xl"]}>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Link href="https://github.com/besSejrani" style={{ width: "100%" }}>
            <Tab icon={<GithubIcon />} aria-label="github" style={{ width: "100%" }} />
          </Link>
          <Link href="https://robohash.org/" style={{ width: "100%" }}>
            <Tab icon={<WebIcon />} aria-label="web" style={{ width: "100%" }} />
          </Link>
        </Tabs>
      </Paper>
    </Hidden>
  );
}
