import React, { useState } from "react";

// Material-UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Styles
import { makeStyles } from "@mui/styles";

// Components
import Signin from "@Components/Form/SignIn";
import Signup from "@Components/Form/SignUp";

// ========================================================================================================

const SigninSignup = () => {
  const classes = useStyles();

  // ==============================
  //          State
  // ==============================
  const [value, setValue] = React.useState<number>(0);
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  // ==============================
  //          Events
  // ==============================
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const renderForm = () => {
    if (isSignIn) {
      return <Signin />;
    }

    return <Signup />;
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {renderForm()}
        <Box className={classes.tabsContainer}>
          <Tabs
            className={classes.tabs}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Sign In" className={classes.tab} disabled={isSignIn} onClick={() => setIsSignIn(true)} />
            <Tab label="Sign Up" className={classes.tab} disabled={!isSignIn} onClick={() => setIsSignIn(false)} />
          </Tabs>
        </Box>
      </Card>
    </div>
  );
};

export default SigninSignup;

// ========================================================================================================

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  card: {
    position: "relative",
    width: "1100px",
    height: 620,
    borderRadius: "10px",
  },
  tabsContainer: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    display: "flex",
    justifyContent: "flex-end",
  },
  tabs: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    width: "50%",
  },
}));
