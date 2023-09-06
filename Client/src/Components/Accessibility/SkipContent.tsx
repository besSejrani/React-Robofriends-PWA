import React from "react";

// Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";

// ========================================================================================================

const SkipContent = () => {
  const classes = useStyles();

  return (
    <Box id="skiplink" className={classes.root}>
      <a href="#main" className={classes.link}>
        <Typography variant="body1">skip to main content</Typography>
      </a>

      <a href="#footer" className={classes.link}>
        <Typography variant="body1">skip to footer</Typography>
      </a>
    </Box>
  );
};

export default SkipContent;

// ========================================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0px 0px 0px 2rem",
  },
  link: {
    margin: "0px 20px 0px 0px",
    color: "white",
    textDecoration: "none",
  },
}));
