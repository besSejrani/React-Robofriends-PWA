import React from "react";

// Material UI
import Container from "@mui/material/Container";

// Components
import SearchBox from "@Components/SearchBox";
import CardList from "@Components/CardList";

// Material Styles
import { makeStyles } from "@mui/styles";

// ======================================================================================

const Main: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <SearchBox />
      </Container>

      <Container maxWidth="xl">
        <CardList />
      </Container>
    </div>
  );
};

export default Main;

// ======================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
    // [theme.breakpoints.down("sm")]: {
    //   padding: "50px 0px 100px 0px",
    // },
  },
}));
